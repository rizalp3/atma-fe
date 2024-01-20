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
                        class="nav-item"
                        exact-active-class="nav-item--active"
                        :to="item.path"
                        :key="i"
                    >
                        <vue-feather :type="item.icon" size="24" />
                        <div class="nav-title">{{ item.title }}</div>
                    </router-link>
                </nav>

                <!-- Shortcut Button (Test) -->
                <router-link class="shortcut-button" to="/test">
                    <img
                        class="shortcut-button__icon"
                        alt="Report Icon"
                        :src="ReportIcon"
                    />
                    <div class="shortcut-button__text">Take a Test</div>
                </router-link>

                <!-- Shortcut Button (Mood) -->
                <router-link class="shortcut-button" to="/mood">
                    <img
                        class="shortcut-button__icon"
                        alt="Mood Icon"
                        :src="MoodIcon"
                    />
                    <div class="shortcut-button__text">Add a Mood</div>
                </router-link>
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
                        <vue-feather type="arrow-left" size="24" />
                    </router-link>

                    <h1 v-if="$route.meta.title" class="title-bar__text">
                        {{ $route.meta.title }}
                    </h1>
                </div>
            </div>

            <!-- Page View -->
            <router-view></router-view>

            <div class="bottom-spacer"></div>
        </div>

        <!-- Utility Bar (Right) -->
        <div class="utility-bar">
            <!-- Header -->
            <div class="header">
                <div class="header-wrapper">
                    <div class="user-detail">
                        <img
                            class="user-detail__avatar"
                            src="https://i.pravatar.cc/200?img=13"
                            alt="User Avatar"
                        />

                        <div class="user-detail__name">Rizal Purnomo</div>

                        <vue-feather
                            class="user-detail__icon"
                            type="chevron-down"
                            size="24"
                        />
                    </div>
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
        <div class="bottom-navbar">
            <nav class="bottom-navbar__wrapper" role="navigation">
                <div v-for="(item, i) in items" :key="`bottom-navbar-${i}`">
                    <router-link
                        class="bottom-navbar__item"
                        exact-active-class="bottom-navbar__item--active"
                        :to="item.path"
                    >
                        <vue-feather :type="item.icon" size="24" />
                        <div class="bottom-navbar__item-title">
                            {{ item.title }}
                        </div>
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup>
import Logo from './assets/image/logo.svg';
import MoodIcon from './assets/image/mood-colored.svg';
import ReportIcon from './assets/image/report-colored.svg';

import Moodboard from './components/Moodboard.vue';

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

<style lang="scss" scoped src="./app.scss"></style>
