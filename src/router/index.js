import { createRouter, createWebHistory } from 'vue-router';

import routes from './route';

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
