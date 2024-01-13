<template>
    <router-link to="/article"> Go to Article </router-link>

    <div class="home-header">
        <div>
            <p class="home-header__greeting">Good Afternoon</p>
            <p class="home-header__name">Rizal Purnomo</p>
        </div>

        <div class="home-header__avatar"></div>
    </div>

    <div class="home-article">
        <div class="home-article__header">
            <h2 class="home-article__title">Articles For You</h2>
            <router-link class="home-article__action" to="/artikel">
                View All
            </router-link>
        </div>

        <div class="home-article__list">
            <div class="home-article__item">
                <div>
                    <h3 class="home-article__item-title">
                        Efek Trauma Masa Kecil dan Pengaruhnya
                    </h3>
                    <div class="home-article__item-detail">
                        <p>16 Nov</p>
                        <div class="home-article__item-dot" />
                        <p>2 min read</p>
                    </div>
                </div>

                <img
                    class="home-article__item-image"
                    src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"
                    alt="aa   "
                />
            </div>

            <div class="home-article__item">
                <div>
                    <h3 class="home-article__item-title">
                        Mengapa Kita Sering Memberi Stigma Buruk Terhadap Orang
                        Lain Mengapa Kita Sering Memberi Stigma Buruk Terhadap
                        Orang Lain
                    </h3>
                    <div class="home-article__item-detail">
                        <p>16 Nov</p>
                        <div class="home-article__item-dot" />
                        <p>2 min read</p>
                    </div>
                </div>

                <img
                    class="home-article__item-image"
                    src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"
                    alt="aa   "
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home-header {
    position: sticky;

    top: 0;
    padding: 16px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #fff;

    &__greeting {
        @include text(12px, 400);
        color: #929292;
    }

    &__name {
        @include text(18px, 500);
        color: #252525;
    }

    &__avatar {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        background: #929292;
    }
}

.home-article {
    color: #252525;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0 0;
    }

    &__title {
        @include text(18px, 500);
    }

    &__action {
        @include text(12px, 500);
        text-decoration: none;
        color: var(--victoria-600);
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 20px;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        &-title {
            @include text(14px, 500);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 8px;
        }

        &-detail {
            display: flex;
            align-items: center;
            gap: 8px;

            > p {
                @include text(12px, 400);
                color: #929292;
            }
        }

        &-dot {
            width: 3px;
            height: 3px;
            border-radius: 1.5px;
            background: #929292;
        }

        &-image {
            width: 80px;
            height: 80px;
            flex-shrink: 0;
            border-radius: 8px;
            object-fit: cover;
            background: #d9d9d9;
        }
    }
}
</style>
