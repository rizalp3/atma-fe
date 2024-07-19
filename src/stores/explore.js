import { defineStore } from 'pinia';
import moment from 'moment';

import i18n from '@/locales';

const { t } = i18n.global;

const baseFilter = {
    sorting: [
        {
            key: 'trending',
            name: t('explore.filter.sort.trending'),
            formula: 'likesCount:desc'
        },
        {
            key: 'recent',
            name: t('explore.filter.sort.recent'),
            formula: 'createdAt:desc'
        }
    ],
    time: [
        {
            key: 'any',
            name: t('explore.filter.time.anytime'),
            formula: {}
        },
        {
            key: 'week',
            name: t('explore.filter.time.week'),
            formula: {
                $between: [
                    moment().subtract(1, 'weeks').format(),
                    moment().format()
                ]
            }
        },
        {
            key: 'month',
            name: t('explore.filter.time.month'),
            formula: {
                $between: [
                    moment().subtract(1, 'months').format(),
                    moment().format()
                ]
            }
        },
        {
            key: 'year',
            name: t('explore.filter.time.year'),
            formula: {
                $between: [
                    moment().subtract(1, 'years').format(),
                    moment().format()
                ]
            }
        }
    ]
};

export const useExploreStore = defineStore('explore', {
    state: () => {
        return {
            config: {
                sort: ['likesCount:desc'],
                filters: { createdAt: {} }
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
        }
    }
});
