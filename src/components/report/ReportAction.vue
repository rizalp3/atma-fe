<template>
    <button
        v-for="(action, i) in actions"
        :key="`action-${i}`"
        class="report-action"
    >
        <img alt="Action Icon" :src="action.icon" />

        <div>
            <div class="report-action__title">{{ action.title }}</div>
            <div class="report-action__subtitle">{{ action.subtitle }}</div>
        </div>
    </button>
</template>

<script>
import MoodIcon from '@/assets/image/mood-colored.svg';
import ReportIcon from '@/assets/image/report-colored.svg';

export default {
    name: 'ReportAction',

    computed: {
        actions() {
            return [
                {
                    title: 'Take Test',
                    subtitle: 'Examine your stress level',
                    icon: ReportIcon
                },
                {
                    title: 'Report Mood',
                    subtitle: 'Tell us what you feel',
                    icon: MoodIcon
                }
            ];
        }
    }
};
</script>

<style lang="scss" scoped>
.report-action {
    width: 100%;

    display: flex;
    align-items: center;

    padding: 16px;
    gap: 12px;
    border-radius: 8px;

    font-weight: 500;

    cursor: pointer;

    background: #ffffff;
    border: 1px solid #e3e3e3;
    color: #5c5c5c;

    &:hover {
        background: #fbfbfb;
    }

    &:not(:first-of-type) {
        margin-top: 16px;
    }

    &__title {
        @include text(16px, 500);
        color: #252525;
    }

    &__subtitle {
        @include text(14px);
        color: #929292;
    }
}
</style>
