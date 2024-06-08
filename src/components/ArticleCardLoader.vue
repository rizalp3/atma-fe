<template>
    <!-- Mobile -->
    <div v-if="isMobile" class="d-flex gap-3 align-items-center atma-pulse">
        <div class="d-flex flex-column gap-1 flex-fill">
            <atma-skeleton width="100%" height="18px" />
            <atma-skeleton width="85%" height="18px" />
            <atma-skeleton class="mt-1" width="60%" height="14px" />
        </div>
        <atma-skeleton width="80px" height="80px" radius="8px" />
    </div>

    <!-- Desktop -->
    <div v-else class="d-flex gap-3 align-items-center atma-pulse">
        <atma-skeleton width="120px" height="120px" radius="8px" />
        <div class="d-flex flex-column gap-2 flex-fill">
            <atma-skeleton width="95%" height="20px" />
            <atma-skeleton width="65%" height="20px" />
            <atma-skeleton class="mt-2" width="40%" height="18px" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleCardLoader'
};
</script>
