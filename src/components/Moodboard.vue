<template>
    <div class="moodboard">
        <VCalendar
            borderless
            transparent
            expanded
            trim-weeks
            title-position="left"
            locale="id"
            :max-date="maxDate"
            :attributes="attributes"
            :masks="{
                title: 'MMM YYYY',
                weekdays: 'WWW'
            }"
        >
            <template #day-popover="{ attributes }">
                <div
                    v-for="{ customData, key } in attributes"
                    :key="key"
                    class="moodboard-detail"
                >
                    {{ customData.emoji }}
                </div>
            </template>
        </VCalendar>
    </div>
</template>

<script setup>
import moment from 'moment';

const mock = [
    {
        date: '2024-01-07',
        category: 'orange',
        emoji: '🤩'
    },
    {
        date: '2024-01-12',
        category: 'blue',
        emoji: '😭'
    },
    {
        date: '2024-01-13',
        category: 'green',
        emoji: '😋'
    }
];

const attributes = mock.map((data) => ({
    dates: moment(data.date).toDate(),
    highlight: {
        color: data.category
    },
    popover: {
        visibility: 'hover'
    },
    customData: {
        emoji: data.emoji
    }
}));

const maxDate = moment().toDate();
</script>

<style lang="scss" scoped>
.moodboard {
    margin: -16px -12px 0;

    :deep(.vc-title) > * {
        font-weight: 500;
    }

    :deep(.vc-weeks) > * {
        margin-top: 8px;
    }

    :deep(.vc-weekday) {
        @include text(12px, 400);
    }

    :deep(.vc-day-content) {
        font-weight: 400;
    }

    :deep(.vc-nav-title) {
        font-weight: 500;
    }

    :deep(.vc-nav-item) {
        font-weight: 400;
    }
}

.moodboard-detail {
    @include text(24px);
}
</style>
