<style src="./main_app.css"></style>
<template src="./main_app.html"></template>
<script>
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent/FooterComponent.vue'

  export default {
    name: "App",
    components: {
      HeaderComponent,
      FooterComponent
    },
    data() {
      return {
        areaList: [
          {id: 0, title: "Главная", txtKey: "/"},
          {id: 1, title: "1C-Bitrix", txtKey: "bitrix"},
          {id: 2, title: "HTML", txtKey: "html"},
          {id: 3, title: "JS", txtKey: "javascript"},
          {id: 4, title: "TS", txtKey: "typescript"},
          {id: 5, title: "CSS", txtKey: "css"},
          {id: 6, title: "JS-фреймворки", txtKey: "js-frameworks"},
        ]
      }
    },
    provide() {
      return {
        areaList: this.areaList
      }
    }
  }
</script>

