<template>
    <div class="not-found-page">
        <not-found />
    </div>
</template>

<script setup>
import NotFound from '@/components/NotFound.vue';
</script>

<style lang="scss" scoped>
.not-found-page {
    position: fixed;
    inset: 0;

    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
