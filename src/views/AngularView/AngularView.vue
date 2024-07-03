<style src="./AngularView.css"></style>
<template src="./AngularView.html"></template>
<script>
    import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue'

    export default {
        name: "AngularView",
    data() {
      return {
        areaName: "Angular"
      }
    },
    components: {
      PagetitleComponent
    },
    }
</script>