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
                    <template v-for="(item, i) in items" :key="i">
                        <router-link
                            v-if="isNavItemShown(item.authenticated)"
                            v-slot="{ isActive }"
                            class="nav-item"
                            exact-active-class="nav-item--active"
                            :to="item.path"
                        >
                            <atma-icon :name="item.icon" :fill="isActive" />
                            <div class="nav-title">{{ item.title }}</div>
                        </router-link>
                    </template>
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

                    <h1 :class="titleBarClasses">
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
        <div class="utility-bar" id="utility-bar">
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

            <!-- Fixed Utility Bar Content -->
            <div class="utility-bar--fixed" id="utility-bar-fixed"></div>

            <!-- Utility Bar Content -->
            <router-view v-slot="{ Component: UtilityBar }" name="utilityBar">
                <!-- Rendered View -->
                <component v-if="UtilityBar" :is="UtilityBar" />
            </router-view>
        </div>

        <!-- Bottom Bar -->
        <div v-if="!$route.meta.customBottomBar" class="bottom-navbar">
            <nav class="bottom-navbar__wrapper" role="navigation">
                <template
                    v-for="(item, i) in items"
                    :key="`bottom-navbar-${i}`"
                >
                    <div v-if="isNavItemShown(item.authenticated)">
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
                </template>
            </nav>
        </div>

        <auth-modal />
    </div>
</template>

<script>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

import Logo from './assets/image/logo.svg';

import MenuDropdown from './components/MenuDropdown.vue';

import AuthModal from './components/auth/AuthModal.vue';

export default {
    name: 'App',

    components: { MenuDropdown, AuthModal },

    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },

    data() {
        return {
            Logo,
            theme: 'light'
        };
    },

    created() {
        // -- Theme --
        const theme = this.getTheme();

        if (theme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        }

        this.theme = theme;

        // -- Authentication --
        this.authStore.getAuthToken();
        this.authStore.getAuthData();
    },

    computed: {
        items() {
            return [
                {
                    path: '/',
                    icon: 'space-dashboard',
                    title: this.$t('route.home')
                },
                {
                    path: '/explore',
                    icon: 'explore',
                    title: this.$t('route.explore')
                },
                {
                    path: '/community',
                    icon: 'group',
                    title: this.$t('route.community')
                },
                {
                    path: '/report',
                    icon: 'assignment',
                    title: this.$t('route.report'),
                    authenticated: true
                }
            ];
        },

        themeIcon() {
            return this.theme === 'light' ? 'light-mode' : 'dark-mode';
        },

        titleBarClasses() {
            const classes = ['title-bar__text'];

            if (this.$route.meta.back) {
                classes.push('title-bar__text--back');
            }

            if (this.isMobile) {
                classes.push('title-bar__text--mini');
            } else if (this.isTablet) {
                classes.push(
                    this.authStore.isAuthenticated
                        ? 'title-bar__text--compact'
                        : 'title-bar__text--extended'
                );
            }

            return classes;
        }
    },

    methods: {
        isNavItemShown(isNeedAuth) {
            if (!isNeedAuth) {
                return true;
            }

            return !!this.authStore.isAuthenticated;
        },

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
    },

    provide() {
        return {
            token: computed(() => this.authStore.token),
            user: computed(() => this.authStore.user),
            isAuthenticated: computed(() => this.authStore.isAuthenticated)
        };
    }
};
</script>

<style lang="scss" scoped src="./app.scss"></style>
