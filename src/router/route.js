import NotFoundPage from '@/pages/NotFoundPage.vue';

import HomePage from '@/pages/HomePage.vue';

import ArticleListPage from '@/pages/article/ArticleListPage.vue';
import ArticleDetailPage from '@/pages/article/ArticleDetailPage.vue';
import ArticleListSidebar from '@/components/article/ArticleListSidebar.vue';

import ExplorePage from '@/pages/explore/ExplorePage.vue';
import ExploreSidebar from '@/components/explore/ExploreSidebar.vue';

import CommunityBoardPage from '@/pages/community/CommunityBoardPage.vue';
import CommunityDetailPage from '@/pages/community/CommunityDetailPage.vue';
import CommunitySidebar from '@/components/community/CommunitySidebar.vue';
import CommunityPostSidebar from '@/components/community/CommunityPostSidebar.vue';
import SessionDetail from '@/components/community/SessionDetail.vue';

import ReportPage from '@/pages/report/ReportPage.vue';
import ReportTestPage from '@/pages/report/ReportTestPage.vue';

import i18n from '@/locales';

const { t } = i18n.global;

/**
 * List of Meta Attribute
 *
 * title - Page Title and Title Bar Text
 * back - Show Back Button and The Target for It
 * blank - Render Blank Layout
 * customBottomBar - Hide Bottom Navbar on Mobile
 * */

export default [
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
        meta: { title: t('route.notFound'), blank: true }
    },

    {
        path: '/',
        component: HomePage,
        meta: { title: t('route.home') }
    },

    {
        path: '/article',
        components: {
            default: ArticleListPage,
            utilityBar: ArticleListSidebar
        },
        meta: { title: t('route.article'), back: '/' }
    },
    {
        path: '/article/:id',
        component: ArticleDetailPage,
        meta: { back: '/article' }
    },

    {
        path: '/explore',
        components: {
            default: ExplorePage,
            utilityBar: ExploreSidebar
        },
        meta: { title: t('route.explore') }
    },

    {
        path: '/community',
        components: {
            default: CommunityBoardPage,
            utilityBar: CommunitySidebar
        },
        meta: { title: t('route.community') }
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
        components: {
            default: CommunityDetailPage,
            utilityBar: CommunityPostSidebar
        },
        meta: { title: '', back: '/community', customBottomBar: true }
    },

    {
        path: '/report',
        component: ReportPage,
        meta: { title: t('route.report') }
    },
    {
        path: '/report/test',
        component: ReportTestPage,
        meta: { title: t('route.test'), back: '/report', customBottomBar: true }
    }
];
