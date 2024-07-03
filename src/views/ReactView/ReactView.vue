<style src="./ReactView.css"></style>
<template src="./ReactView.html"></template>
<script>
    import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue'

    export default {
        name: "ReactView",
    data() {
      return {
        areaName: "React"
      }
    },
    components: {
      PagetitleComponent
    },
    }
</script>