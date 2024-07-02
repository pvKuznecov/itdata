<style src="./HomeView.css"></style>
<template src="./HomeView.html"></template>
<script>
  import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue'

  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    data() {
      return {
        areaName: "Главная"
      }
    },
    components: {
      HelloWorld,
      PagetitleComponent
    }
  }
</script>
