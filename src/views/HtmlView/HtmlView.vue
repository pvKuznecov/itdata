<style src="./HtmlView.css"></style>
<template src="./HtmlView.html"></template>
<script>
    import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue';

    export default {
        name: "HtmlView",
        data() {
            return {
                areaName: "HTML"
            }
        },
        components: {
            PagetitleComponent
        }
    }
</script>