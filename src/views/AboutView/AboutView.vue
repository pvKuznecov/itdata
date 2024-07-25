<style src="./AboutView.css"></style>
<template src="./AboutView.html"></template>
<script>
  export default {
    name: "AboutView",
    inject: ["GDATA"],
    data() {
      return {
        areaName: "О сайте",
      }
    },
    computed: {
        MEGDATA: function () {
            return this.GDATA.me;
        },
    },
  }
</script>