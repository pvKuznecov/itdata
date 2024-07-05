<style src="./NavAreasComponent.css"></style>
<template src="./NavAreasComponent.html"></template>
<script>
    export default {
        name: "NavAreasComponent",
        inject: ["areaList"],
        data() {
            return {
                discTxt: "",
            }
        },
        computed: {
            areasList() {
                let n_areaList = [];
                let startPoint = 2;
                for (let i=startPoint; i<this.areaList.length; i++) {
                    n_areaList[i-startPoint] = this.areaList[i]; 
                }
                return n_areaList;
            }
        },
        methods: {
            showDiscArea(inpVal) {
                this.discTxt = inpVal;
            },
            prepareTxt(txtVal) {
                let preResult = txtVal.split('\n');
                return preResult;
            }
        }
    }
</script>