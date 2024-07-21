<style src="./ReactView.css"></style>
<template src="./ReactView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';

    export default {
        name: "ReactView",
        inject: ["GDATA"],
        components: { ViewtitleComponent },
        computed: {
            AGDATA: function () {
                return this.GDATA.react;
            },
        }
    }
</script>