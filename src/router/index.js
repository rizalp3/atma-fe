import { createRouter, createWebHistory } from 'vue-router';

import NotFoundPage from '@/pages/NotFoundPage.vue';

import HomePage from '@/pages/HomePage.vue';
import ArticleListPage from '@/pages/article/ArticleListPage.vue';
import ArticleDetailPage from '@/pages/article/ArticleDetailPage.vue';

/**
 * List of Meta Attribute
 *
 * title - Page Title and Title Bar Text
 * back - Show Back Button and The Target for It
 * blank - Render Blank Layout
 * */

// Routes
const routes = [
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
        meta: { title: 'Page Not Found', blank: true }
    },

    {
        path: '/',
        component: HomePage,
        meta: { title: 'Home' }
    },

    {
        path: '/article',
        component: ArticleListPage,
        meta: { title: 'Articles', back: '/' }
    },
    {
        path: '/article/:id',
        component: ArticleDetailPage,
        meta: { back: '/article' }
    }
];

const router = createRouter({ history: createWebHistory(), routes });

// Change Page Title
router.beforeEach((to) => {
    let pageTitle = to?.meta?.title || '';

    if (pageTitle) {
        pageTitle += ' | Atma';
    } else if (pageTitle === '') {
        pageTitle = 'Atma';
    }

    document.title = pageTitle;
});

export default router;
