<template>
    <div class="report">
        <moodboard />

        <atma-text class="mt-4 mb-3" size="18" weight="500">
            Test Results
        </atma-text>

        <div class="report__result-wrapper">
            <div v-for="(result, i) in results" :key="i" class="report__result">
                <div
                    :class="[
                        'report__result-icon',
                        {
                            'report__result-icon--others':
                                result.type === 'others'
                        }
                    ]"
                >
                    <vue-feather
                        :type="result.type === 'other' ? 'users' : 'user'"
                        size="24"
                    />
                </div>

                <div>
                    <div class="report__result-name">{{ result.name }}</div>
                    <div class="report__result-date">{{ result.date }}</div>
                </div>

                <div
                    :class="[
                        'report__result-level',
                        `report__result-level--${result.level}`
                    ]"
                >
                    Level {{ result.level }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Moodboard from '@/components/Moodboard.vue';

export default {
    name: 'ReportPage',

    components: {
        Moodboard
    },

    data() {
        return {
            results: [
                {
                    type: 'others',
                    name: 'Rantty',
                    date: '2 hours ago',
                    level: 1
                },
                {
                    type: 'self',
                    name: 'Yourself',
                    date: '4 Jun',
                    level: 3
                },
                {
                    type: 'self',
                    name: 'Yourself',
                    date: '5 Dec 2023',
                    level: 4
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.report {
    &__result-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px 32px;
    }

    &__result {
        display: flex;
        align-items: center;
        gap: 16px;

        flex: 0 0 auto;
        width: calc(50% - 16px);

        @media (max-width: 600px) {
            width: 100%;
        }

        &-icon {
            width: 48px;
            height: 48px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #fdf0e4;
            color: #f2994a;

            &--others {
                background: #dff0fa;
                color: #2d9cdb;
            }
        }

        &-name {
            @include text(16px, 500);
            color: #252525;
        }

        &-date {
            @include text(14px);
            color: #929292;
        }

        &-level {
            @include text(12px, 500);
            margin-left: auto;

            padding: 4px 8px;
            border-radius: 15px;
            border: 1px solid #929292;
        }
    }

    $level-variant: (
        1: #0cb852,
        2: #8ac73c,
        3: #ffc300,
        4: #ff7927,
        5: #ff2442
    );

    @each $level, $color in $level-variant {
        .report__result-level--#{$level} {
            color: $color;
            border-color: $color;
        }
    }
}
</style>
