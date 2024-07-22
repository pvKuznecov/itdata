<style src="./HtmlView.css"></style>
<template src="./HtmlView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';

    export default {
        name: "HtmlView",
        inject: ["GDATA"],
        components: { ViewtitleComponent },
        computed: {
            AGDATA: function () {
                return this.GDATA.html;
            },
            COLORDATA: function () {
                return this.GDATA.colors;
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