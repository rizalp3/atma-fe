<template>
    <template v-if="$route.meta.blank">
        <router-view></router-view>
    </template>

    <div v-else class="root">
        <!-- Side Bar (Left) -->
        <div class="sidebar">
            <div class="side-navbar">
                <!-- Brand Logo -->
                <div class="brand">
                    <img :src="Logo" alt="Brand Logo" />
                    <div class="brand-name">Atma</div>
                </div>

                <!-- Navbar -->
                <nav role="navigation">
                    <router-link
                        v-for="(item, i) in items"
                        v-slot="{ isActive }"
                        class="nav-item"
                        exact-active-class="nav-item--active"
                        :to="item.path"
                        :key="i"
                    >
                        <atma-icon :name="item.icon" :fill="isActive" />
                        <div class="nav-title">{{ item.title }}</div>
                    </router-link>
                </nav>
            </div>
        </div>

        <!-- Main Content (Center) -->
        <div class="content">
            <!-- Title Bar -->
            <div class="title-bar-wrapper">
                <div class="title-bar">
                    <router-link
                        v-if="$route.meta.back"
                        class="title-bar__icon"
                        :to="$route.meta.back"
                    >
                        <atma-icon name="arrow-back" />
                    </router-link>

                    <h1 v-if="$route.meta.title" class="title-bar__text">
                        {{ $route.meta.title }}
                    </h1>

                    <menu-dropdown
                        v-if="isTablet"
                        :theme="theme"
                        :variant="isMobile ? 'mini' : 'compact'"
                        @toggle-theme="toggleTheme"
                    />
                </div>
            </div>

            <!-- Page View -->
            <router-view></router-view>

            <div
                v-if="!$route.meta.customBottomBar"
                class="bottom-spacer"
            ></div>
        </div>

        <!-- Utility Bar (Right) -->
        <div class="utility-bar">
            <!-- Header -->
            <div class="header">
                <div class="header-wrapper">
                    <menu-dropdown
                        :theme="theme"
                        variant="full"
                        @toggle-theme="toggleTheme"
                    />
                </div>
            </div>

            <!-- Utility Bar Content -->
            <router-view v-slot="{ Component: UtilityBar }" name="utilityBar">
                <!-- Rendered View -->
                <component v-if="UtilityBar" :is="UtilityBar" />

                <!-- Default Fallback -->
                <template v-else>
                    <moodboard />
                </template>
            </router-view>
        </div>

        <!-- Bottom Bar -->
        <div v-if="!$route.meta.customBottomBar" class="bottom-navbar">
            <nav class="bottom-navbar__wrapper" role="navigation">
                <div v-for="(item, i) in items" :key="`bottom-navbar-${i}`">
                    <router-link
                        v-slot="{ isActive }"
                        class="bottom-navbar__item"
                        exact-active-class="bottom-navbar__item--active"
                        :to="item.path"
                    >
                        <div class="bottom-navbar__item-icon">
                            <atma-icon :name="item.icon" :fill="isActive" />
                        </div>
                        <div class="bottom-navbar__item-title">
                            {{ item.title }}
                        </div>
                    </router-link>
                </div>
            </nav>
        </div>

        <auth-modal />
    </div>
</template>

<script>
import Logo from './assets/image/logo.svg';

import Moodboard from './components/Moodboard.vue';
import MenuDropdown from './components/MenuDropdown.vue';

import AuthModal from './components/auth/AuthModal.vue';

export default {
    name: 'App',

    components: { Moodboard, MenuDropdown, AuthModal },

    data() {
        return {
            Logo,
            theme: 'light'
        };
    },

    created() {
        const theme = this.getTheme();

        if (theme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        }

        this.theme = theme;
    },

    computed: {
        items() {
            return [
                {
                    path: '/',
                    icon: 'space-dashboard',
                    title: 'Home'
                },
                {
                    path: '/explore',
                    icon: 'explore',
                    title: 'Explore'
                },
                {
                    path: '/community',
                    icon: 'group',
                    title: 'Community'
                },
                {
                    path: '/report',
                    icon: 'assignment',
                    title: 'Report'
                }
            ];
        },

        themeIcon() {
            return this.theme === 'light' ? 'light-mode' : 'dark-mode';
        }
    },

    methods: {
        getTheme() {
            return localStorage.getItem('color-theme') || 'light';
        },

        toggleTheme() {
            const target = this.theme === 'light' ? 'dark' : 'light';

            if (target === 'dark') {
                document.documentElement.classList.add('dark-theme');
            } else {
                document.documentElement.classList.remove('dark-theme');
            }

            localStorage.setItem('color-theme', target);
            this.theme = target;
        }
    }
};
</script>

<style lang="scss" scoped src="./app.scss"></style>
