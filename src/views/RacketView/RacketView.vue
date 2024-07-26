<style src="./RacketView.css"></style>
<template src="./RacketView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';

    export default {
        name: "RacketView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.racket;
            },
        },
        methods: {
            chgVisiblStatus(elId) {
                var el = document.getElementById(elId);
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            }
        }
    }
</script>