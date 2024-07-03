<template>
    <div class="community-sidebar">
        <community-detail variant="sidebar" />
    </div>
</template>

<script>
import CommunityDetail from './CommunityDetail.vue';

export default {
    name: 'CommunitySidebar',

    components: {
        CommunityDetail
    }
};
</script>

<style lang="scss" scoped>
.community-sidebar {
    padding: 24px;
    margin-bottom: 24px;

    border-radius: 16px;

    background: var(--system-color-surface-container-low);
}
</style>
