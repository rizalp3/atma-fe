<template>
    <div class="bottom-bar">
        <section class="bottom-bar__wrapper">
            <div v-for="(item, i) in items" :key="`bottomBar${i}`">
                <router-link v-bind="composeClassAttrs" :to="item.path">
                    <vue-feather :type="item.icon" size="24" />
                    <div class="bottom-bar__item-title">{{ item.title }}</div>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
import VueFeather from 'vue-feather';

const composeClassAttrs = {
    class: 'bottom-bar__item',
    exactActiveClass: 'bottom-bar__item--active'
};

const items = [
    {
        path: '/',
        icon: 'home',
        title: 'Home'
    },
    {
        path: '/explore',
        icon: 'compass',
        title: 'Explore'
    },
    {
        path: '/community',
        icon: 'users',
        title: 'Community'
    },
    {
        path: '/report',
        icon: 'file-text',
        title: 'Report'
    }
];
</script>

<style lang="scss" scoped>
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 12px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    border-top: 1px solid #f0f0f0;

    &__wrapper {
        width: 100%;
        max-width: 500px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        > div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &__item {
        padding: 0 8px;

        text-decoration: none;
        text-align: center;

        color: #c9c9c9;

        &--active,
        &:hover {
            color: var(--victoria-600);
        }
    }

    &__item-title {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
    }
}
</style>
