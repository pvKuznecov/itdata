<style src="./CssView.css"></style>
<template src="./CssView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';

    export default {
        name: "CssView",
        inject: ["GDATA"],
        components: { ViewtitleComponent },
        computed: {
            AGDATA: function () {
                return this.GDATA.css;
            },
        }
    }
</script>