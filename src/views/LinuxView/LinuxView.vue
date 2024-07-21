<style src="./LinuxView.css"></style>
<template src="./LinuxView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue'

    export default {
        name: "LinuxView",
        inject: ["GDATA"],
        components: { ViewtitleComponent },
        computed: {
            AGDATA: function () {
                return this.GDATA.linux;
            },
        }
    }
</script>