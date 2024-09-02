<style src="./LinuxView.css"></style>
<template src="./LinuxView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';

    export default {
        name: "LinuxView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.linux;
            },
            COMMANDSDATA: function () {
                return this.AGDATA.commands;
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