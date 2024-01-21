<template>
    <div class="community-sidebar">
        <div class="community-sidebar__main">
            <img
                :src="Logo"
                class="community-sidebar__image"
                alt="Social Connect Logo"
            />

            <div class="community-sidebar__title">Social Connect</div>

            <div class="community-sidebar__subtitle">
                Mental Health Community
            </div>
        </div>

        <div class="community-sidebar__section-title">About</div>

        <p class="community-sidebar__about">
            Berdiri sejak tahun 2019, Social Connect sudah berhasil mendorong
            lebih dari 1.000 edukasi digital dan 50 program daring serta luring
            di bidang kesehatan mental.<br /><br />Social Connect sudah
            berkolaborasi dengan beberapa lembaga pemerintah, perusahaan asing,
            perusahaan loka, hingga rintisan. Hubungi kami dan ciptakan
            perubahan bersama-sama.
        </p>

        <div class="community-sidebar__section-title">Contact</div>

        <a
            href="https://www.instagram.com/socialconnect.id"
            class="community-sidebar__link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <vue-feather type="instagram" size="20" />
            Instagram
            <vue-feather type="chevron-right" size="20" />
        </a>

        <a
            href="https://www.linkedin.com/company/socialconnectid"
            class="community-sidebar__link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <vue-feather type="linkedin" size="20" />
            LinkedIn
            <vue-feather type="chevron-right" size="20" />
        </a>

        <a
            href="https://socialconnect.id"
            class="community-sidebar__link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <vue-feather type="link" size="20" />
            Website
            <vue-feather type="chevron-right" size="20" />
        </a>
    </div>
</template>

<script setup>
import Logo from '@/assets/image/community.png';
</script>

<style lang="scss" scoped>
.community-sidebar {
    &__main {
        width: 100%;

        padding: 24px;
        margin-bottom: 24px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        border-radius: 12px;
        border: 1px solid #f0f0f0;
    }

    &__image {
        width: 96px;
        height: 96px;
        margin-bottom: 16px;
    }

    &__title {
        @include text(18px, 500);
    }

    &__subtitle {
        @include text(14px, 400);
        color: #929292;
    }

    &__section-title {
        @include text(18px, 400);
        margin-bottom: 12px;
    }

    &__about {
        @include text(14px, 300);
        margin-bottom: 24px;
        color: #5c5c5c;
    }

    &__link {
        width: 100%;

        padding: 12px 16px;
        margin-bottom: 12px;
        gap: 12px;

        display: flex;
        align-items: center;

        border-radius: 12px;
        border: 1px solid #f0f0f0;

        color: #929292;

        @include text(14px, 400);
        text-decoration: none;

        > *:last-child {
            margin-left: auto;
            color: #c9c9c9;
        }

        &:hover {
            background: #fbfbfb;
            color: #59499e;
        }
    }
}
</style>
