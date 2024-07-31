<style src="./LessonsPHPView.css"></style>
<template src="./LessonsPHPView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';

    export default {
        name: "LessonsPHPView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            PHPGDATA: function () {
                return this.GDATA.php;
            }
        },
    }
</script>