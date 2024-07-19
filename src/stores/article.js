import { defineStore } from 'pinia';
import moment from 'moment';

import i18n from '@/locales';

const { t } = i18n.global;

const baseFilter = {
    sorting: [
        {
            key: 'trending',
            name: t('article.sort.trending'),
            formula: 'view:desc'
        },
        {
            key: 'recent',
            name: t('article.sort.recent'),
            formula: 'createdAt:desc'
        }
    ],
    time: [
        {
            key: 'any',
            name: t('article.time.anytime'),
            formula: {}
        },
        {
            key: 'week',
            name: t('article.time.week'),
            formula: {
                $between: [
                    moment().subtract(1, 'weeks').format(),
                    moment().format()
                ]
            }
        },
        {
            key: 'month',
            name: t('article.time.month'),
            formula: {
                $between: [
                    moment().subtract(1, 'months').format(),
                    moment().format()
                ]
            }
        },
        {
            key: 'year',
            name: t('article.time.year'),
            formula: {
                $between: [
                    moment().subtract(1, 'years').format(),
                    moment().format()
                ]
            }
        }
    ]
};

export const useArticleStore = defineStore('article', {
    state: () => {
        return {
            config: {
                sort: ['view:desc'],
                filters: {
                    createdAt: {},
                    category: {
                        key: []
                    }
                },
                populate: {
                    image: { fields: ['formats'] }
                },
                fields: ['title', 'reading_time', 'createdAt']
            },
            sorting: 'trending',
            timeFilter: 'any'
        };
    },
    getters: {
        baseFilter: () => baseFilter
    },
    actions: {
        setSorting(data) {
            this.config.sort = [data.formula];
        },
        setTime(data) {
            this.config.filters.createdAt = data.formula;
        },
        setCategory(values) {
            this.config.filters.category.key = values;
        }
    }
});
