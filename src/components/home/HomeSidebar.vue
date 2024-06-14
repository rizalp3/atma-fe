<template>
    <div class="home-sidebar">
        <home-community-section />

        <home-test-section />

        <brand-banner />
    </div>
</template>

<script>
import HomeCommunitySection from './HomeCommunitySection.vue';
import HomeTestSection from './HomeTestSection.vue';

import BrandBanner from '@/components/BrandBanner.vue';

export default {
    name: 'HomeSidebar',

    components: {
        HomeCommunitySection,
        HomeTestSection,
        BrandBanner
    }
};
</script>

<style lang="scss" scoped>
.home-sidebar {
    > *:not(:first-child) {
        margin-top: 16px;
    }
}
</style>
