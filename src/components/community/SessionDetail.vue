<template>
    <div class="session-detail">
        <div class="session-detail__main">
            <div class="session-detail__title">Kick Out The Burnout!</div>
            <div class="session-detail__subtitle">25 Nov 2023 19.30</div>
        </div>

        <img :src="image" class="session-detail__image" alt="Session" />

        <div class="session-detail__section-title">Description</div>

        <div class="session-detail__description">
            {{ description }}
        </div>
    </div>
</template>

<script setup>
const image =
    'https://scontent.fcgk18-2.fna.fbcdn.net/v/t39.30808-6/407279574_913667937174799_3534229025574986589_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHcZdQWahUSyoy3jqjQaqVGZJQKQRfnFvVklApBF-cW9SyY6VvXgVlxpNo3UqUuHa4G9YO354LkViFnP0Qtxlmt&_nc_ohc=_ZS-PW7D8G4AX9GBLYd&_nc_ht=scontent.fcgk18-2.fna&oh=00_AfC5HjDj6pQrXKpz10Hmj6LIVXDb0M4ICmttz75ojgEIhA&oe=65B26801';

const description =
    'Hi, Socconians! EvoTalks is back to help you with burnout.\n\nBurnout is an issue that many college students are experiencing and oftentimes struggle to cope with it. To resolve this issue together, EvoTalks is collaborating with Zakaria Anshari, a psychology specialist and a Social Connect mentor, to delve deeper into many aspects of burnout and how we should effectively face it! 🤩';
</script>

<style lang="scss" scoped>
.session-detail {
    &__main {
        width: 100%;

        padding: 16px;
        margin-bottom: 24px;
        gap: 2px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        border-radius: 12px;
        border: 1px solid #f0f0f0;
    }

    &__image {
        width: 100%;
        margin-bottom: 16px;
        border-radius: 12px;
    }

    &__title {
        @include text(16px, 500);
    }

    &__subtitle {
        @include text(14px, 400);
        color: #929292;
    }

    &__section-title {
        @include text(18px, 500);
        margin-bottom: 12px;
    }

    &__description {
        @include text(14px, 300);
        white-space: pre-line;
        margin-bottom: 24px;
    }
}
</style>
