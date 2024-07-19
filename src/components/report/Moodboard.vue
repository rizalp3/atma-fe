<template>
    <div class="moodboard">
        <VCalendar v-bind="composeCalendarAttrs">
            <template #day-content="{ attributes, day }">
                <!-- Emoji Date Content -->
                <Tooltip v-if="isMoodShown(attributes, day)">
                    <div :class="composeDateClasses(attributes, day)">
                        {{ attributes[0].customData.emoji }}
                    </div>

                    <template #popper>
                        <div class="moodboard__tooltip">
                            <div class="moodboard__tooltip-emoji">
                                {{ attributes[0].customData.emoji }}
                            </div>

                            <div class="moodboard__tooltip-title">
                                {{ formatCategory(attributes) }}
                            </div>

                            <div class="moodboard__tooltip-date">
                                {{ formatDate(day.date) }}
                            </div>
                        </div>
                    </template>
                </Tooltip>

                <!-- Default Date Content -->
                <div v-else :class="composeDateClasses(attributes, day)">
                    {{ day.day }}
                </div>
            </template>
        </VCalendar>
    </div>
</template>

<script>
import moment from 'moment';
import { Tooltip } from 'floating-vue';

export default {
    name: 'Moodboard',

    props: {
        data: {
            type: Array,
            default: () => []
        }
    },

    components: {
        Tooltip
    },

    computed: {
        composeCalendarData() {
            const result = this.data.map((item) => ({
                dates: moment(item.date).toDate(),
                customData: {
                    emoji: item.emoji,
                    title: item.title
                }
            }));
            return [...result];
        },

        composeCalendarAttrs() {
            return {
                attributes: this.composeCalendarData,
                borderless: true,
                expanded: true,
                initialPage: {
                    month: moment().month() + 1,
                    year: moment().year()
                },
                locale: this.$i18n.locale === 'id' ? 'id' : 'en',
                masks: {
                    title: 'MMMM YYYY',
                    weekdays: this.isMobile ? 'WW' : 'WWW',
                    navMonths: 'MMM'
                },
                maxDate: moment().endOf('month').toDate(),
                transparent: true,
                trimWeeks: true,
                titlePosition: 'left'
            };
        }
    },

    methods: {
        isMoodShown(attributes, day) {
            const isEmojiExist = attributes?.[0]?.customData?.emoji;
            const isDateInMonth = day?.inMonth;

            return isEmojiExist && isDateInMonth;
        },

        composeDateClasses(attributes, day) {
            const isEmojiExist = attributes?.[0]?.customData?.emoji;
            const isDateToday = day?.isToday;

            return {
                'vc-day-content': true,
                'vc-day-content--mood': isEmojiExist,
                'vc-day-content--today': isDateToday
            };
        },

        formatDate(date) {
            return moment(date).format('D MMM YYYY');
        },

        formatCategory(data) {
            const key = data?.[0]?.customData?.title?.toLowerCase?.();

            if (key) {
                return this.$t(`report.mood.modal.category.${key}`);
            }

            return '-';
        }
    }
};
</script>

<style lang="scss">
.moodboard {
    padding: 20px 24px 24px;
    border-radius: 12px;
    background: var(--system-color-surface);

    &__tooltip {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-emoji {
            @include text(24px, 500);
        }

        &-title {
            @include text(14px, 600);
            text-transform: capitalize;
        }

        &-date {
            @include text(12px, 500);
            color: var(--system-color-outline);
        }
    }

    .vc-header {
        padding: 0;
        margin: 0 -4px 16px 0;

        .vc-title {
            padding: 0;

            > * {
                @include text(18px, 500);
            }
        }
    }

    .vc-weeks {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .vc-weekdays {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .vc-weekday {
            min-width: 32px;
            @include text(14px, 400);
        }
    }

    .vc-week {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .vc-day {
            min-width: 32px;
        }

        .vc-day-content {
            width: 32px;
            height: 32px;
            font-weight: 400;

            cursor: unset;

            &--today {
                background: var(--system-color-primary-container);
                color: var(--system-color-on-primary-container);
            }

            &--mood {
                font-size: 20px;
            }
        }
    }

    .vc-monthly .is-not-in-month * {
        opacity: 1;
        color: var(--system-color-outline-variant);
    }

    .vc-nav-item {
        font-weight: 500;
    }

    @media (max-width: 600px) {
        padding: 16px 16px 20px;

        .vc-header {
            margin-left: 4px;
        }
    }
}
</style>

<style lang="scss">
.vc-dark,
.vc-light {
    // Base
    --vc-focus-ring: none;

    // Header
    --vc-header-arrow-color: var(--system-color-outline);
    --vc-header-arrow-hover-bg: var(--system-color-surface-container-high);
    --vc-header-title-color: var(--system-color-on-surface);

    // Day Name
    --vc-weekday-color: var(--system-color-primary);

    // Date
    --vc-color: var(--system-color-on-surface);
    --vc-day-content-hover-bg: var(--system-color-surface-container-high);
    --vc-day-content-disabled-color: var(--system-color-outline);

    // Popover
    --vc-nav-hover-bg: var(--system-color-surface-container-high);
    --vc-nav-title-color: var(--system-color-on-surface);
    --vc-nav-item-current-color: var(--system-color-primary);
    --vc-nav-item-active-color: var(--system-color-primary);
    --vc-nav-item-active-bg: var(--system-color-secondary-container);
    --vc-popover-content-color: var(--system-color-on-surface-variant);
    --vc-popover-content-bg: var(--system-color-surface-container-low);
    --vc-popover-content-border: var(--system-color-surface-container-high);
}
</style>
