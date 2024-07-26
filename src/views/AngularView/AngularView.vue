<style src="./AngularView.css"></style>
<template src="./AngularView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';

    export default {
        name: "AngularView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.angular;
            },
        }
    }
</script>