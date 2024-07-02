<style src="./AboutView.css"></style>
<template src="./AboutView.html"></template>
<script>
  import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue';

  export default {
    name: "AboutView",
    data() {
      return {
        areaName: "О проекте"
      }
    },
    components: {
      PagetitleComponent
    }
  }
</script>