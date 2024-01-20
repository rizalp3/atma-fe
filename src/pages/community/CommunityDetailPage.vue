<template>
    <div class="community-detail">
        <h1 class="community-detail__title">
            {{ article.title }}
        </h1>

        <div class="community-detail__info">
            <div class="community-detail__category">{{ article.category }}</div>
            <div class="community-detail__dot"></div>
            <div class="community-detail__date">
                {{ moment(article.date).format('D MMMM YYYY') }}
            </div>
        </div>

        <div class="community-detail__content">
            <community-post :images="article.images" :text="article.text" />
        </div>
    </div>
</template>

<script setup>
import moment from 'moment';

import CommunityPost from '@/components/community/CommunityPost.vue';

const article = {
    title: 'Podcast Special Edition: Social Connect Ambassador Program (SCAP) 2023',
    category: 'News',
    date: '2023-11-06',
    images: [
        'https://picsum.photos/id/89/1200/1800',
        'https://picsum.photos/id/12/1200/1800',
        'https://picsum.photos/id/71/1200/1800'
    ],
    text: 'Sobat muda yang lagi gandrung dunia digital dan pengen eksis di media sosial, merapat! Episode spesial podcast Social Connect kali ini bakal ngebahas tuntas pengalaman seru para peserta Social Connect Ambassador Program (SCAP) 2023. Penasaran gimana program yang udah nge-booming ini bisa nyalain kreativitas dan ngasih skill kece buat para anak muda? Dengerin aja langsung podcastnya, dijamin kamu bakal dapet insight dan motivasi buat ikutan program serupa di tahun depan!\n\nDi episode spesial ini, kamu bakal ngedengerin langsung cerita-cerita seru dari para alumni SCAP 2023. Gimana sih rasanya dapet belajar bareng mentor kece, ngerasain challenge yang ngebangunin mental, dan pastinya, gimana mereka berhasil ngembangin personal branding lewat program ini. Ada tips-tips rahasia juga lho, dari bikin konten yang nge-tren sampai ngedapetin engagement tinggi di media sosial.\n\nSelain ngebahas pelatihan dan pengalaman, podcast ini juga bakal ngehighlight pentingnya networking dan membangun komunitas. SCAP 2023 nggak cuma sekadar program, tapi juga jadi wadah buat para pesertanya saling kenal, ngobrol, dan kolaborasi. Persahabatan yang terjalin selama program ini pasti bakal ngerembet ke proyek-proyek kreatif bareng nantinya.\n\nNah, tunggu apa lagi? Langsung aja cek episode spesial podcast Social Connect yang ngebahas SCAP 2023. Dijamin kamu bakal dapet insight, motivasi, dan inspirasi buat ngejar mimpi jadi influencer sukses! Semangat berkarya, sob!\n\nJangan lupa share podcast ini ke temen-temen kamu yang tertarik sama dunia digital dan pengen jadi bagian dari komunitas kreatif Social Connect! Sampai jumpa di episode selanjutnya!'
};
</script>

<style lang="scss" scoped>
.community-detail {
    &__title {
        @include text(24px, 600);
    }

    &__info {
        display: flex;
        align-items: center;

        margin: 10px 0 16px;
        gap: 10px;

        > * {
            @include text(14px, 400);
            color: #929292;
        }
    }

    &__dot {
        width: 3px;
        height: 3px;
        border-radius: 1.5px;
        background: #929292;
    }
}

@media (max-width: 600px) {
    .community-detail {
        &__title {
            @include text(20px, 600);
        }
    }
}
</style>
