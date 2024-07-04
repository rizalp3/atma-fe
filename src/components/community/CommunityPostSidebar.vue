<template>
    <div v-if="isQuestionPost" class="community-post-sidebar">
        <session-detail />
    </div>
</template>

<script>
import { useCommunityStore } from '@/stores/community';

import SessionDetail from './SessionDetail.vue';

export default {
    name: 'CommunityPostSidebar',

    components: {
        SessionDetail
    },

    setup() {
        const store = useCommunityStore();
        return { store };
    },

    computed: {
        isQuestionPost() {
            return this.store?.post?.category === 'question';
        }
    }
};
</script>

<style lang="scss" scoped>
.community-post-sidebar {
    margin-bottom: 40px;
}
</style>
