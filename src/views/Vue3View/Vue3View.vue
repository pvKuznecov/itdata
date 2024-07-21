<style src="./Vue3View.css"></style>
<template src="./Vue3View.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue'

    export default {
        name: "Vue3View",
        inject: ["GDATA"],
        components: { ViewtitleComponent },
        computed: {
            AGDATA: function () {
                return this.GDATA.vue3;
            },
        }
    }
</script>