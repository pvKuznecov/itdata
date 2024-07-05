<style src="./HomeView.css"></style>
<template src="./HomeView.html"></template>
<script>
  import NavAreasComponent from '@/components/NavAreasComponent/NavAreasComponent.vue'
  
  export default {
    name: 'HomeView',
    data() {
      return {
        areaName: "Главная"
      }
    },
    components: {
      NavAreasComponent
    },
  }
</script>
