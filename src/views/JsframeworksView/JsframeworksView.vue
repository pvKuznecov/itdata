<style src="./JsframeworksView.css"></style>
<template src="./JsframeworksView.html"></template>
<script>
    export default {
        name: "JsframeworksView",
        inject: ["GDATA"],
        data() {
            return {
                areaName: "JS-фреймворки",
                jsfData: {},
            }
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.areaList;
            },
            JSFDATA: function () {
                var res;
                for (let i=0; i < this.AGDATA.length; i++) {
                    if (this.AGDATA[i].txtKey == "js-frameworks") {
                        res = this.AGDATA[i].subarea;
                    }
                }
                return res;
            }
        },
        methods: {
            getImgByKey(keyVal) {
                return this.GDATA[keyVal].logo;
            }
        }
    }
</script>