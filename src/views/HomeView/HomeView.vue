<style src="./HomeView.css"></style>
<template src="./HomeView.html"></template>
<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    data() {
      return {
        areaName: "Главная"
      }
    },
    inject: ["areaList"],
    computed: {
      areasList() {
        let n_areaList = [];
        for (let i=2; i<this.areaList.length; i++) {
          n_areaList[i-2] = this.areaList[i]; 
        }
        return n_areaList;
      }
    },
  }
</script>
