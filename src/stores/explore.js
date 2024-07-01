import { defineStore } from 'pinia';
import moment from 'moment';

const baseFilter = {
    sorting: [
        {
            key: 'trending',
            name: 'Trending',
            formula: 'likesCount:desc'
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
