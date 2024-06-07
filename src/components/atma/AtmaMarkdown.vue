<template>
    <div v-html="markdown.render(content)"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
    name: 'AtmaMarkdown',

    props: {
        content: {
            type: String,
            default: ''
        }
    },

    setup() {
        const markdown = new MarkdownIt();
        return { markdown };
    }
};
</script>
