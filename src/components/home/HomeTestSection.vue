<template>
    <div class="home-test">
        <atma-text size="16" weight="600" color-scheme="on-surface">
            Test Result
        </atma-text>

        <div class="home-test__item">
            <div class="home-test__icon">
                <vue-feather type="user" size="24" />
            </div>

            <div>
                <atma-text size="14" weight="500" color-scheme="on-surface">
                    Self Test
                </atma-text>
                <atma-text size="14" weight="400" color-scheme="outline">
                    Yesterday
                </atma-text>
            </div>

            <div class="home-test__result">Level 4</div>
        </div>

        <div class="home-test__item">
            <div class="home-test__icon home-test__icon--others">
                <vue-feather type="users" size="24" />
            </div>

            <div>
                <atma-text size="14" weight="500" color-scheme="on-surface">
                    Rantty
                </atma-text>
                <atma-text size="14" weight="400" color-scheme="outline">
                    2 days ago
                </atma-text>
            </div>

            <div class="home-test__result">Level 2</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTestSection'
};
</script>

<style lang="scss" scoped>
.home-test {
    display: flex;
    flex-direction: column;

    gap: 16px;
    padding: 18px 20px 20px;
    border-radius: 16px;

    background: var(--system-color-surface);

    &__item {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: rgba(242, 153, 74, 0.15);
        color: #f2994a;

        &--others {
            background: rgba(45, 156, 219, 0.15);
            color: #2d9cdb;
        }
    }

    &__result {
        @include text(12px, 500);
        margin-left: auto;
        color: var(--system-color-outline);
    }
}
</style>
