<template>
    <div class="login-section">
        <div class="login-section__title">Login</div>

        <div class="login-section__subtitle">
            Please enter your account detail
        </div>

        <form @submit.prevent="handleSubmit">
            <!-- Email -->
            <div class="login-section__input">
                <label class="form-label" for="login-email">
                    Email Address
                </label>
                <input
                    v-model="email"
                    :class="['form-control', { 'is-invalid': errors.email }]"
                    type="email"
                    placeholder="example@mail.com"
                    id="login-email"
                    @blur="validateEmail"
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
            </div>

            <!-- Password -->
            <div class="login-section__input">
                <label class="form-label" for="login-password">
                    Password
                </label>

                <input
                    v-model="password"
                    :class="['form-control', { 'is-invalid': errors.password }]"
                    :type="toggleType"
                    placeholder="Password"
                    id="login-password"
                    @blur="validatePassword"
                />
                <button
                    class="login-section__password-toggle"
                    type="button"
                    tabindex="-1"
                    @click="handlePasswordVisibility"
                >
                    <atma-icon :name="toggleIcon" size="20" />
                </button>

                <div class="invalid-feedback">{{ errors.password }}</div>
            </div>

            <!-- General Error Alert -->
            <div
                v-if="errors.general"
                class="login-section__alert alert fade show"
                role="alert"
            >
                <div class="login-section__alert-text">
                    {{ errors.general }}
                </div>

                <button class="d-flex" type="button" @click="handleHideError">
                    <atma-icon name="close" size="20" />
                </button>
            </div>

            <!-- Submit -->
            <button class="login-section__submit" type="submit">Login</button>

            <!-- Register -->
            <div class="login-section__register">
                <div>Don't have an account yet?</div>

                <button type="button" @click="handleRedirectToRegister">
                    Sign Up
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

import endpoints from '@/services/auth';

export default {
    name: 'LoginSection',

    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },

    data() {
        return {
            isPasswordShown: false,

            email: '',
            password: '',

            errors: {}
        };
    },

    watch: {
        email() {
            delete this.errors.email;
        },
        password() {
            delete this.errors.password;
        }
    },

    computed: {
        toggleIcon() {
            return this.isPasswordShown ? 'visibility-off' : 'visibility';
        },
        toggleType() {
            return this.isPasswordShown ? 'text' : 'password';
        }
    },

    methods: {
        validateEmail() {
            const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;

            if (this.email === '') {
                this.errors.email = 'Email is required';
            } else if (!emailRegex.test(this.email)) {
                this.errors.email = 'Invalid email address';
            }
        },

        validatePassword() {
            if (this.password === '') {
                this.errors.password = `Password can't be empty`;
            }
        },

        handleHideError() {
            delete this.errors.general;
        },

        handlePasswordVisibility() {
            this.isPasswordShown = !this.isPasswordShown;
        },

        async handleSubmit() {
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
                identifier: this.email,
                password: this.password
            };

            const response = await endpoints.login(payload);

            if (response.jwt && response.user) {
                this.authStore.setAuthData(response.jwt, response.user);
                this.authStore.hideAuthModal();
            }

            if (response.error) {
                this.errors.general =
                    response.error.message || 'Something went wrong';
            }
        },

        handleRedirectToRegister() {
            this.authStore.showAuthModal('register');
        }
    }
};
</script>

<style lang="scss" scoped>
.login-section {
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
        margin-top: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 20px;

        @include text(14, 500);

        background: var(--system-color-primary);
        color: var(--system-color-on-primary);
    }

    &__register {
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
