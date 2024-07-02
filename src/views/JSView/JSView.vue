<style src="./JSView.css"></style>
<template src="./JSView.html"></template>
<script>
    import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue';

    export default {
        name: "JSView",
        data() {
            return {
                areaName: "JavaScript"
            }
        },
        components: {
            PagetitleComponent
        }
    }
</script>