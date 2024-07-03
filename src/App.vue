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
          {id: 1, title: "О сайте", txtKey: "about", subarea: []},
          {id: 2, title: "1C-Bitrix", txtKey: "bitrix", subarea: []},
          {id: 3, title: "HTML", txtKey: "html", subarea: []},
          {id: 4, title: "JS", txtKey: "javascript", subarea: []},
          {id: 5, title: "TS", txtKey: "typescript", subarea: []},
          {id: 6, title: "CSS", txtKey: "css", subarea: []},
          {id: 7, title: "JS-фреймворки", txtKey: "js-frameworks", subarea: [
            {title: "Angular", txtKey: "js-frameworks/angular"},
            {title: "React", txtKey: "js-frameworks/react"},
            {title: "Vue", txtKey: "js-frameworks/vue"},
          ]},
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

