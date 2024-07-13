import { defineStore } from 'pinia';
import moment from 'moment';

const baseFilter = {
    sorting: [
        {
            key: 'trending',
            name: 'Trending',
            formula: 'view:desc'
        },
        {
            key: 'recent',
            name: 'Recent',
            formula: 'createdAt:desc'
        }
    ],
    time: [
        {
            key: 'any',
            name: 'Anytime',
            formula: {}
        },
        {
            key: 'week',
            name: 'Past Week',
            formula: {
                $between: [
                    moment().subtract(1, 'weeks').format(),
                    moment().format()
                ]
            }
        },
        {
            key: 'month',
            name: 'Past Month',
            formula: {
                $between: [
                    moment().subtract(1, 'months').format(),
                    moment().format()
                ]
            }
        },
        {
            key: 'year',
            name: 'Past Year',
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
