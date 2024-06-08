<template>
    <div :class="['article-card', cardType]">
        <div class="article-card__content">
            <h3 class="article-card__title">
                {{ title }}
            </h3>

            <div class="article-card__detail">
                <div class="article-card__date">{{ formattedDate }}</div>
                <div class="article-card__separator"></div>
                <div class="article-card__time">{{ time }} min read</div>
            </div>
        </div>

        <img
            class="article-card__image"
            alt="Article Illustration"
            :src="image"
        />
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'ArticleCard',

    props: {
        type: {
            type: String,
            default: 'main'
        },
        title: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        time: {
            type: Number,
            default: 1
        },
        image: {
            type: String,
            default: ''
        }
    },

    computed: {
        formattedDate() {
            return moment(this.date).fromNow() || '-';
        },
        cardType() {
            return `article-card--${this.type}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.article-card {
    display: flex;
    align-items: center;
    gap: 16px;

    &__image {
        order: -1;

        width: 120px;
        height: 120px;

        object-fit: cover;

        flex-shrink: 0;
        border-radius: 8px;

        background: #d9d9d9;
    }

    &__content {
        flex: 1;
    }

    &__title {
        margin-bottom: 8px;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        @include text(18px, 500);
    }

    &__detail {
        display: flex;
        align-items: center;
        gap: 12px;

        > * {
            @include text(16px, 400);
            color: #929292;
        }
    }

    &__date:first-letter {
        text-transform: uppercase;
    }

    &__separator {
        width: 3px;
        height: 3px;
        border-radius: 1.5px;
        background: #929292;
    }
}

.article-card--recommendation {
    gap: 12px;

    .article-card {
        &__title {
            @include text(16px, 400);
            margin-bottom: 6px;
        }

        &__detail > * {
            @include text(14px, 400);
        }

        &__image {
            width: 72px;
            height: 72px;
            order: unset;
        }
    }
}

@media (max-width: 600px) {
    .article-card {
        &__title {
            @include text(16px, 500);
            margin-bottom: 4px;
        }

        &__detail > * {
            @include text(14px, 400);
        }

        &__image {
            width: 80px;
            height: 80px;
            order: unset;
        }
    }

    .article-card--recommendation {
        width: 180px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;

        .article-card {
            &__title {
                @include text(14px, 400);
                margin-bottom: 6px;
            }

            &__detail {
                gap: 8px;

                > * {
                    @include text(12px, 400);
                }
            }

            &__image {
                width: 180px;
                height: 120px;
                order: -1;
            }

            &__separator {
                width: 2px;
                height: 2px;
            }
        }
    }
}
</style>
