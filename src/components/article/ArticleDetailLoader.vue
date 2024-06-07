<template>
    <div class="article-detail-loader atma-pulse">
        <atma-skeleton width="100%" height="24px" />
        <atma-skeleton class="mt-2 mb-3" width="70%" height="24px" />
        <atma-skeleton width="40%" height="16px" />
        <atma-skeleton
            class="my-4"
            width="100%"
            radius="8px"
            :height="isMobile ? '200px' : '300px'"
        />
        <atma-skeleton width="100%" height="16px" />
        <atma-skeleton class="my-2" width="100%" height="16px" />
        <atma-skeleton width="60%" height="16px" />
    </div>
</template>

<script>
export default {
    name: 'ArticleDetailLoader'
};
</script>
