<template>
    <div class="test-result">
        <div :class="composeIconClasses">
            <atma-icon :name="composeIcon" size="22" />
        </div>

        <div class="test-result__detail">
            <div class="test-result__subject">{{ formattedName }}</div>
            <div class="test-result__time">{{ formattedTime }}</div>
        </div>

        <div :class="composeLevelClasses">
            <atma-icon :name="composeLevelIcon" size="16" />
            <div>{{ formattedLevel }}</div>
        </div>
    </div>
</template>

script
<script>
import moment from 'moment';

export default {
    name: 'TestResult',

    props: {
        result: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        isSelfTest() {
            return this.result.type === 'self';
        },

        formattedName() {
            return this.isSelfTest ? 'Self Test' : this.result.name;
        },

        formattedTime() {
            return moment(this.result.time).fromNow();
        },

        formattedLevel() {
            return `Level ${this.result.value}`;
        },

        composeIconClasses() {
            return {
                'test-result__icon': true,
                'test-result__icon--others': !this.isSelfTest
            };
        },

        composeIcon() {
            return this.isSelfTest ? 'person' : 'group';
        },

        composeLevelClasses() {
            return [
                'test-result__level',
                `test-result__level--${this.result.value}`
            ];
        },

        composeLevelIcon() {
            const icon = {
                1: 'sentiment-very-satisfied',
                2: 'sentiment-satisfied',
                3: 'sentiment-neutral',
                4: 'sentiment-dissatisfied',
                5: 'sentiment-very-dissatisfied'
            };

            return icon[this.result.value];
        }
    }
};
</script>

<style lang="scss" scoped>
.test-result {
    display: flex;
    align-items: center;
    gap: 12px;

    &__icon {
        width: 42px;
        height: 42px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(242, 153, 74, 0.15);
        color: #f2994a;

        &--others {
            background: rgba(45, 156, 219, 0.15);
            color: #2d9cdb;
        }
    }

    &__detail {
        flex: 1;
    }

    &__subject {
        @include text(14px, 500);
        color: var(--system-color-on-surface);
    }

    &__time {
        @include text(12px, 400);
        color: var(--system-color-outline);
    }

    &__level {
        --level-color: var(--system-color-outline);

        display: flex;
        align-items: center;
        gap: 4px;

        padding: 4px 8px;

        border-radius: 15px;
        border: 1px solid var(--level-color);

        color: var(--level-color);

        // Start of Level Variants
        $level-variant: (
            1: #0cb852,
            2: #8ac73c,
            3: #ffc300,
            4: #ff7927,
            5: #ff2442
        );

        @each $level, $color in $level-variant {
            &--#{$level} {
                --level-color: #{$color};
            }
        }
        // End of Level Variants

        > div {
            @include text(12px, 500);
        }
    }
}
</style>
