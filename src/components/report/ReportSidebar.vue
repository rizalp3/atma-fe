<template>
    <div class="report-sidebar">
        <action-mood-card />
        <action-test-card />
    </div>
</template>

<script>
import ActionMoodCard from './ActionMoodCard.vue';
import ActionTestCard from './ActionTestCard.vue';

export default {
    name: 'ReportSidebar',

    components: {
        ActionMoodCard,
        ActionTestCard
    }
};
</script>

<style lang="scss" scoped>
.report-sidebar {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>
