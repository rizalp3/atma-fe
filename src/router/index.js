import { createRouter, createWebHistory } from 'vue-router';

import NotFoundPage from '@/pages/NotFoundPage.vue';

import HomePage from '@/pages/HomePage.vue';

import ArticleListPage from '@/pages/article/ArticleListPage.vue';
import ArticleDetailPage from '@/pages/article/ArticleDetailPage.vue';
import ArticleListSidebar from '@/components/article/ArticleListSidebar.vue';

import ExplorePage from '@/pages/explore/ExplorePage.vue';

import CommunityBoardPage from '@/pages/community/CommunityBoardPage.vue';
import CommunityDetailPage from '@/pages/community/CommunityDetailPage.vue';
import CommunitySidebar from '@/components/community/CommunitySidebar.vue';
import SessionDetail from '@/components/community/SessionDetail.vue';

import ReportPage from '@/pages/report/ReportPage.vue';
import ReportSidebar from '@/components/report/ReportSidebar.vue';

/**
 * List of Meta Attribute
 *
 * title - Page Title and Title Bar Text
 * back - Show Back Button and The Target for It
 * blank - Render Blank Layout
 * customBottomBar - Hide Bottom Navbar on Mobile
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
        components: {
            default: ArticleListPage,
            utilityBar: ArticleListSidebar
        },
        meta: { title: 'Articles', back: '/' }
    },
    {
        path: '/article/:id',
        component: ArticleDetailPage,
        meta: { back: '/article' }
    },

    {
        path: '/explore',
        component: ExplorePage,
        meta: { title: 'Explore' }
    },

    {
        path: '/community',
        components: {
            default: CommunityBoardPage,
            utilityBar: CommunitySidebar
        },
        meta: { title: 'Community Board' }
    },
    {
        path: '/community/session/:id',
        components: {
            default: CommunityDetailPage,
            utilityBar: SessionDetail
        },
        meta: { title: '', back: '/community', customBottomBar: true }
    },
    {
        path: '/community/:id',
        component: CommunityDetailPage,
        meta: { title: '', back: '/community' }
    },

    {
        path: '/report',
        components: {
            default: ReportPage,
            utilityBar: ReportSidebar
        },
        meta: { title: 'Report' }
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
