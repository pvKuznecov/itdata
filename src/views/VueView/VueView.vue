<style src="./VueView.css"></style>
<template src="./VueView.html"></template>
<script>
    import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue'

    export default {
        name: "VueView",
        data() {
            return {
                areaName: "Vue"
            }
        },
        components: {
            PagetitleComponent
        },
    }
</script>