<style src="./TSView.css"></style>
<template src="./TSView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue'

    export default {
        name: "TSView",
        inject: ["GDATA"],
        components: { ViewtitleComponent },
        computed: {
            AGDATA: function () {
                return this.GDATA.ts;
            },
        }
    }
</script>