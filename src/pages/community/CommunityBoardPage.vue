<template>
    <div class="community-board">
        <div class="community-detail" @click="showCommunityDetail">
            <img
                :src="Logo"
                class="community-detail__image"
                alt="Social Connect Logo"
            />

            <div class="community-detail__content">
                <div class="community-detail__title">Social Connect</div>
                <div class="community-detail__subtitle">
                    Mental Health Community
                </div>
            </div>

            <vue-feather type="chevron-right" size="24" />
        </div>

        <div class="timeline-item">
            <div class="timeline-item__side">
                <div class="timeline-item__box">
                    <div class="timeline-item__date">16</div>
                    <div class="timeline-item__month">Nov</div>
                </div>
                <div class="timeline-item__line"></div>
            </div>
            <div class="timeline-item__content">
                <h2 class="timeline-item__title">
                    Podcast Special Edition: Social Connect Ambassador Program
                    (SCAP) 2023
                </h2>

                <div class="timeline-item__description">
                    Podcast Social Connect edisi spesial Ambassador Program
                    (SCAP 2023) telah berhasil kami rilis via Spotify!
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-item__side">
                <div class="timeline-item__box">
                    <div class="timeline-item__date">7</div>
                    <div class="timeline-item__month">Nov</div>
                </div>
                <div class="timeline-item__line"></div>
            </div>
            <div class="timeline-item__content">
                <h2 class="timeline-item__title">
                    EvoTalks Session: Kick Out The Burnout
                </h2>

                <img
                    src="https://picsum.photos/id/13/1200/1800"
                    alt="image"
                    class="timeline-item__image"
                />

                <div class="timeline-item__description">
                    EvoTalks is collaborating with Zakaria Anshari, a psychology
                    specialist, to delve deeper into many aspects of burnout and
                    how we should effectively face it!
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-item__side">
                <div class="timeline-item__box">
                    <div class="timeline-item__date">13</div>
                    <div class="timeline-item__month">Oct</div>
                </div>
                <div class="timeline-item__line"></div>
            </div>
            <div class="timeline-item__content">
                <h2 class="timeline-item__title">
                    Intip Keseruan: Kaef x Social Connect Goes to Campus IPB
                    University
                </h2>

                <div class="timeline-item__gallery">
                    <div class="gallery-main">
                        <img
                            src="https://picsum.photos/id/95/600/400"
                            alt="image"
                        />
                    </div>
                    <div class="gallery-side">
                        <img
                            src="https://picsum.photos/id/112/600/400"
                            alt="image"
                            class="gallery-photo"
                        />
                        <img
                            src="https://picsum.photos/id/110/600/400"
                            alt="image"
                            class="gallery-photo"
                        />
                    </div>
                </div>

                <div class="timeline-item__description">
                    Sebanyak 475 mahasiswa baru dibekali materi mengenai
                    Kekerasan Seksual di Lingkungan Pendidikan Tinggi yang
                    disampaikan oleh dr. Ayudya Cenderasari, MKK.
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-item__side">
                <div class="timeline-item__box">
                    <div class="timeline-item__date">2</div>
                    <div class="timeline-item__month">Okt</div>
                </div>
                <div class="timeline-item__line"></div>
            </div>
            <div class="timeline-item__content">
                <h2 class="timeline-item__title">Read Our Latest Article!</h2>

                <atma-link-preview
                    url="https://narasi.tv/read/narasi-daily/generasi-stroberi-adalah"
                />
            </div>
        </div>
    </div>

    <atma-modal v-model="isShowModal" title="Social Connect">
        <div class="community-modal">
            <img
                :src="Logo"
                alt="Social Connect Logo"
                class="community-modal__image"
            />

            <p class="community-modal__about">
                Berdiri sejak tahun 2019, Social Connect sudah berhasil
                mendorong lebih dari 1.000 edukasi digital dan 50 program daring
                serta luring di bidang kesehatan mental.<br /><br />Social
                Connect sudah berkolaborasi dengan beberapa lembaga pemerintah,
                perusahaan asing, perusahaan loka, hingga rintisan. Hubungi kami
                dan ciptakan perubahan bersama-sama.
            </p>

            <a
                href="https://www.instagram.com/socialconnect.id"
                class="community-modal__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <vue-feather type="instagram" size="20" />
                Instagram
                <vue-feather type="chevron-right" size="20" />
            </a>

            <a
                href="https://www.linkedin.com/company/socialconnectid"
                class="community-modal__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <vue-feather type="linkedin" size="20" />
                LinkedIn
                <vue-feather type="chevron-right" size="20" />
            </a>

            <a
                href="https://socialconnect.id"
                class="community-modal__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <vue-feather type="link" size="20" />
                Website
                <vue-feather type="chevron-right" size="20" />
            </a>
        </div>
    </atma-modal>
</template>

<script setup>
import { ref } from 'vue';

import AtmaModal from '@/components/atma/AtmaModal.vue';
import AtmaLinkPreview from '@/components/atma/AtmaLinkPreview.vue';
import Logo from '@/assets/image/community.png';

const isShowModal = ref(false);

const showCommunityDetail = () => {
    isShowModal.value = true;
};
</script>

<style lang="scss" scoped>
.community-board {
    display: flex;
    flex-direction: column;
}

.community-detail {
    width: 100%;

    padding: 16px;
    margin-bottom: 24px;

    display: none;
    align-items: center;

    cursor: pointer;

    border-radius: 12px;
    border: 1px solid #f0f0f0;

    &__image {
        width: 48px;
        height: 48px;
    }

    &__content {
        margin: 0 auto 0 16px;
    }

    &__title {
        @include text(16px, 500);
    }

    &__subtitle {
        @include text(14px, 300);
        color: #929292;
    }

    &:hover {
        background: #fbfbfb;
    }
}

.community-modal {
    display: flex;
    flex-direction: column;

    &__image {
        width: 96px;
        height: 96px;
        margin-bottom: 16px;
        align-self: center;
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
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.timeline-item {
    display: flex;

    &__side {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__box {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-shrink: 0;

        border-radius: 12px;

        background: #eeeaff;
        color: #59499e;
    }

    &__date {
        @include text(16px, 500);
    }

    &__month {
        @include text(12px, 500);
        margin-top: -2px;
    }

    &__line {
        flex: 1;
        width: 2px;
        background: #ebebeb;
    }

    &__content {
        flex: 1;
        margin: 0 0 28px 16px;
        cursor: pointer;
    }

    &__title {
        @include text(18px, 400);
        margin-bottom: 8px;
    }

    &__description {
        @include text(16px, 300);
        color: #929292;
    }

    &__image {
        width: 100%;
        height: 240px;

        object-fit: cover;
        flex-shrink: 0;

        border-radius: 8px;
        margin-bottom: 8px;

        background: #d9d9d9;
    }

    &__gallery {
        display: flex;
        margin-bottom: 8px;

        .gallery-main {
            flex: 1;
            max-width: 100%;
            max-height: 240px;

            > img {
                width: 100%;
                height: 100%;

                object-fit: cover;

                border-radius: 8px;

                background: #d9d9d9;
            }
        }

        .gallery-side {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-left: 8px;
        }

        .gallery-photo {
            width: 148px;
            height: 116px;

            object-fit: cover;
            flex-shrink: 0;

            border-radius: 8px;

            background: #d9d9d9;
        }
    }
}

.timeline-item:last-of-type .timeline-item {
    &__line {
        display: none;
    }
}

@media (max-width: 1035px) {
    .community-detail {
        display: flex;
    }
}

@media (max-width: 600px) {
    .timeline-item {
        &__box {
            width: 42px;
            height: 42px;
        }

        &__date {
            @include text(14px);
        }

        &__month {
            @include text(10px);
        }

        &__line {
            width: 1px;
        }

        &__title {
            @include text(16px);
        }

        &__description {
            @include text(14px);
        }

        &__image {
            height: 160px;
        }

        &__gallery {
            .gallery-main {
                max-height: 160px;
            }

            .gallery-photo {
                width: 100px;
                height: 76px;
            }
        }
    }
}
</style>
