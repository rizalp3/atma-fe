<template>
    <atma-modal
        v-model="value"
        title="SRQ-20 Test"
        :closable="false"
        :primary-button="primaryButton"
        :secondary-button="secondaryButton"
        @primary-click="handleSubmit"
        @secondary-click="handleCancel"
    >
        <div class="test-start-modal">
            <div class="test-start-modal__title">Test Subject</div>

            <div class="test-start-modal__options">
                <div class="form-check">
                    <input
                        v-model="category"
                        class="form-check-input"
                        type="radio"
                        name="type"
                        value="self"
                        id="type-self"
                    />
                    <label class="form-check-label" for="type-self">
                        Yourself
                    </label>
                </div>

                <div class="form-check">
                    <input
                        v-model="category"
                        class="form-check-input"
                        type="radio"
                        name="type"
                        value="others"
                        id="type-others"
                    />
                    <label class="form-check-label" for="type-others">
                        Other People
                    </label>
                </div>
            </div>

            <template v-if="category === 'others'">
                <div class="test-start-modal__title">Name</div>

                <input
                    v-model="name"
                    class="form-control"
                    type="text"
                    placeholder="Enter name"
                />
            </template>
        </div>
    </atma-modal>
</template>

<script>
export default {
    name: 'TestStartModal',

    props: ['modelValue'],

    data() {
        return {
            category: 'self',
            name: ''
        };
    },

    watch: {
        category() {
            if (this.category === 'others') {
                this.name = '';
            }
        }
    },

    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },

        isButtonDisabled() {
            if (this.category === 'others') {
                return !this.name;
            }

            return false;
        },

        primaryButton() {
            return { title: 'Start Test', disabled: this.isButtonDisabled };
        },

        secondaryButton() {
            return { title: 'Cancel' };
        }
    },

    methods: {
        handleCancel() {
            this.redirect('/report');
        },

        handleSubmit() {
            this.$emit('submit', {
                type: this.category,
                name: this.name
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.test-start-modal {
    margin-bottom: 12px;

    &__title {
        @include text(16px, 500);
        margin-bottom: 8px;
        color: var(--system-color-on-surface);

        &:not(:first-child) {
            margin-top: 16px;
        }
    }

    &__options {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .form-check {
        color: var(--system-color-on-surface-variant);

        &-input {
            --bs-border-color: var(--system-color-outline-variant);
            --bs-form-check-bg: var(--system-color-surface);
            --bs-form-check-bg-image: none;

            &:checked {
                --bs-border-width: 3px;

                width: 15px;
                height: 15px;

                background-color: var(--system-color-primary);
                border-color: var(--system-color-surface);

                outline: var(--system-color-primary) solid 1px;
            }

            &:hover:not(:checked) {
                background-color: var(--system-color-surface-container-high);
            }

            &:focus {
                box-shadow: unset;
            }
        }

        > * {
            cursor: pointer;
        }

        label {
            margin-left: 4px;
        }
    }

    .form-control {
        @include text(16px, 400);

        background: var(--system-color-surface);
        color: var(--system-color-on-surface);
        border-color: var(--system-color-surface-container-highest);

        &:focus {
            box-shadow: none;
            border-color: var(--system-color-outline);
        }

        &:hover:not(:focus) {
            border-color: var(--system-color-outline-variant);
        }

        &::placeholder {
            color: var(--system-color-outline);
        }
    }
}
</style>
