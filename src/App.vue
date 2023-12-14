<template>
    <router-view name="topbar"></router-view>

    <div class="wrapper">
        <router-view></router-view>
    </div>

    <router-view name="bottombar"></router-view>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 16px;
}
</style>
