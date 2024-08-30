<style src="./CssView.css"></style>
<template src="./CssView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';

    export default {
        name: "CssView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.css;
            },
            TAGSDATA: function () {
                return this.GDATA.csstags;
            }
        },
        methods: {
            chgVisiblStatus(elId) {
                var el = document.getElementById(elId);
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            }
        }
    }
</script>