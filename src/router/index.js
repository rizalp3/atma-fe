import { createRouter, createWebHistory } from 'vue-router';

import NotFoundPage from '@/pages/NotFoundPage.vue';

import HomePage from '@/pages/HomePage.vue';

import BottomBar from '@/components/layout/BottomBar.vue';
import TopBar from '@/components/layout/TopBar.vue';

import AtmaModalVue from '@/components/atma/AtmaModal.vue';
import AtmaButtonVue from '@/components/atma/AtmaButton.vue';

// Compose Layout Components
const components = (component, bottomBar, topBar) => {
    const data = {
        default: component
    };

    if (bottomBar) {
        data.bottombar = BottomBar;
    }

    if (topBar) {
        data.topbar = TopBar;
    }

    return data;
};

// Routes
const routes = [
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    },
    {
        path: '/',
        components: components(HomePage, true)
    },
    {
        path: '/about',
        components: components(AtmaButtonVue, true, true),
        props: {
            topbar: {
                title: 'Halaman About',
                showBackButton: true
            }
        }
    }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
