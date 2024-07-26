<style src="./JSView.css"></style>
<template src="./JSView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';
 
    export default {
        name: "JSView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.js;
            },
        }
    }
</script>