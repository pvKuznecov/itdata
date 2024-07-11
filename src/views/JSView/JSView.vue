<style src="./JSView.css"></style>
<template src="./JSView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
 
    export default {
        name: "JSView",
        inject: ["GDATA"],
        components: { ViewtitleComponent },
        computed: {
            AGDATA: function () {
                return this.GDATA.js;
            },
        }
    }
</script>