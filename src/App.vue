<style src="./main_app.css"></style>
<template src="./main_app.html"></template>
<script>
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent/FooterComponent.vue'
  import GDATA from '@/gdata/GLOBAL.json'

  export default {
    name: "App",
    components: {
      HeaderComponent,
      FooterComponent
    },
    data() {
      return {
        GDATA: GDATA.GLOBAL,
        areaList: GDATA.GLOBAL.areaList,
      }
    },
    provide() {
      return {
        GDATA: this.GDATA,
        areaList: this.areaList,
      }
    }
  }
</script>

