<template>
    <div class="register-section">
        <div class="register-section__title">Register</div>

        <div class="register-section__subtitle">
            Please provide your details to sign up
        </div>

        <form @submit.prevent="handleSubmit">
            <!-- Name -->
            <div class="register-section__input">
                <label class="form-label" for="register-name">Name</label>
                <input
                    v-model="name"
                    :class="['form-control', { 'is-invalid': errors.name }]"
                    type="text"
                    placeholder="Enter your name"
                    id="register-name"
                    @change="validateName"
                />
                <div class="invalid-feedback">{{ errors.name }}</div>
            </div>

            <!-- Email -->
            <div class="register-section__input">
                <label class="form-label" for="register-email">
                    Email Address
                </label>
                <input
                    v-model="email"
                    :class="['form-control', { 'is-invalid': errors.email }]"
                    type="email"
                    placeholder="Enter your email address"
                    id="register-email"
                    @change="validateEmail"
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
            </div>

            <!-- Password -->
            <div class="register-section__input">
                <label class="form-label" for="register-password">
                    Password
                </label>

                <input
                    v-model="password"
                    :class="[
                        'form-control',
                        'form-control--password',
                        { 'is-invalid': errors.password }
                    ]"
                    :type="toggleType"
                    placeholder="Password"
                    id="register-password"
                    @change="validatePassword"
                />
                <button
                    class="register-section__password-toggle"
                    type="button"
                    tabindex="-1"
                    @click="handlePasswordVisibility"
                >
                    <atma-icon :name="toggleIcon" size="20" />
                </button>

                <div
                    v-show="!isPasswordValid"
                    class="register-section__rule-list"
                >
                    <div
                        v-for="(rule, i) in rules"
                        :key="`password-rule-${i}`"
                        :class="[
                            'register-section__rule',
                            { 'register-section__rule--passed': rule.passed }
                        ]"
                    >
                        <atma-icon
                            :name="rule.passed ? 'check' : 'close'"
                            size="20"
                        />

                        <div class="register-section__rule-text">
                            {{ rule.message }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- General Error Alert -->
            <div
                v-if="errors.general"
                class="register-section__alert alert fade show"
                role="alert"
            >
                <div class="register-section__alert-text">
                    {{ errors.general }}
                </div>

                <button class="d-flex" type="button" @click="handleHideError">
                    <atma-icon name="close" size="20" />
                </button>
            </div>

            <!-- Submit -->
            <button class="register-section__submit" type="submit">
                Register
            </button>

            <!-- Login -->
            <div class="register-section__login">
                <div>Already have an account?</div>

                <button type="button" @click="handleRedirectToLogin">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

import endpoint from '@/services/auth';

export default {
    name: 'RegisterSection',

    setup() {
        const store = useAuthStore();
        return { store };
    },

    data() {
        return {
            isPasswordShown: false,

            name: '',
            email: '',
            password: '',

            errors: {},
            rules: [
                { passed: false, message: 'At least 8 characters' },
                { passed: false, message: 'Contain 1 uppercase character' },
                { passed: false, message: 'Contain 1 number' },
                { passed: false, message: `Can't contain any spaces` }
            ]
        };
    },

    watch: {
        name() {
            if (this.errors.name) {
                delete this.errors.name;
            }
        },
        email() {
            if (this.errors.email) {
                delete this.errors.email;
            }
        },
        password() {
            if (this.errors.password) {
                delete this.errors.password;
            }

            this.checkPassword();
        }
    },

    computed: {
        isPasswordValid() {
            return this.rules.every((rule) => rule.passed);
        },
        toggleIcon() {
            return this.isPasswordShown ? 'visibility-off' : 'visibility';
        },
        toggleType() {
            return this.isPasswordShown ? 'text' : 'password';
        }
    },

    methods: {
        validateName() {
            if (this.name === '') {
                this.errors.name = `Name is required`;
            }
        },

        validateEmail() {
            const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;

            if (this.email === '') {
                this.errors.email = 'Email is required';
            } else if (!emailRegex.test(this.email)) {
                this.errors.email = 'Invalid email address';
            }
        },

        validatePassword() {
            const isPasswordValid = this.rules.every((rule) => rule.passed);

            if (!isPasswordValid) {
                this.errors.password = 'Password is not valid';
            }
        },

        checkPassword() {
            if (this.password === '') {
                this.rules.forEach((rule) => {
                    rule.passed = false;
                });
            } else {
                this.rules[0].passed = this.password.length >= 8;
                this.rules[1].passed = /[A-Z]/.test(this.password);
                this.rules[2].passed = /\d/.test(this.password);
                this.rules[3].passed = !/\s/.test(this.password);
            }
        },

        handlePasswordVisibility() {
            this.isPasswordShown = !this.isPasswordShown;
        },

        async handleSubmit() {
            this.validateName();
            this.validateEmail();
            this.validatePassword();

            // Reset general error
            if (this.errors.general) {
                delete this.errors.general;
            }

            // Check if there is any error
            if (Object.keys(this.errors).length > 0) {
                return;
            }

            const payload = {
                username: this.name,
                email: this.email,
                password: this.password
            };

            const response = await endpoint.register(payload);

            if (response.jwt && response.user) {
                this.store.setAuthData(response.jwt, response.user);
                location.reload();
            }

            if (response.error) {
                this.errors.general =
                    response.error.message || 'Something went wrong';
            }
        },

        handleRedirectToLogin() {
            this.store.showAuthModal('login');
        },

        handleHideError() {
            delete this.errors.general;
        }
    }
};
</script>

<style lang="scss" scoped>
.register-section {
    &__title {
        @include text(24px, 700);
        text-align: center;
        color: var(--system-color-on-surface);
    }

    &__subtitle {
        @include text(14px, 400);
        text-align: center;
        color: var(--system-color-outline);
        margin: 4px 0 32px;
    }

    &__input {
        position: relative;
        margin-bottom: 16px;

        .form-label {
            @include text(14px, 500);
            margin-bottom: 6px;
            color: var(--system-color-on-surface);
        }

        .form-control {
            font-size: 14px;
            line-height: 24px;

            background: var(--system-color-surface);
            color: var(--system-color-on-surface);
            border-color: var(--system-color-surface-container-highest);

            &:focus {
                box-shadow: none;
                border-color: var(--system-color-outline);
            }

            &:hover:not(:focus, .is-invalid) {
                border-color: var(--system-color-outline-variant);
            }

            &::placeholder {
                color: var(--system-color-outline);
            }

            &.is-invalid {
                border-color: var(--system-color-error);
            }

            &--password:focus {
                ~ .invalid-feedback {
                    display: none;
                }

                ~ .register-section__rule-list {
                    .register-section__rule {
                        color: var(--system-color-error);

                        &--passed {
                            color: var(--system-color-valid);
                        }
                    }
                }
            }
        }

        .invalid-feedback {
            --bs-form-invalid-color: var(--system-color-error);
        }
    }

    &__password-toggle {
        width: 38px;
        height: 38px;

        position: absolute;
        top: 29px;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 6px;

        color: var(--system-color-outline);

        &:hover {
            color: var(--system-color-on-surface);
        }
    }

    &__rule {
        display: flex;
        align-items: center;
        gap: 4px;

        color: var(--system-color-outline);

        &-list {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 8px;
        }

        &-text {
            @include text(14px, 400);
        }

        &--passed {
            color: var(--system-color-valid);
        }
    }

    &__alert {
        display: flex;
        gap: 8px;

        --bs-alert-bg: var(--system-color-error-container);
        --bs-alert-color: var(--system-color-on-error-container);
        --bs-alert-padding-y: 12px;
        --bs-alert-padding-x: 12px;

        &-text {
            @include text(14px);
            margin-right: auto;
        }
    }

    &__submit {
        width: 100%;

        padding: 8px 16px;
        margin-top: 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 20px;

        @include text(14px, 500);

        background: var(--system-color-primary);
        color: var(--system-color-on-primary);
    }

    &__login {
        @include text(14px, 400);

        margin-top: 16px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        color: var(--system-color-outline);

        button {
            font-weight: 500;
            color: var(--system-color-on-surface);
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
