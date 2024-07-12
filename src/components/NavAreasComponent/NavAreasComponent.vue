<style src="./NavAreasComponent.css"></style>
<template src="./NavAreasComponent.html"></template>
<script>
// const textStr = 'Слезы единорога';  // Ни один единорог, конечно, не пострадал...
// const textNode = document.createTextNode(textStr);
// document.body.appendChild(textNode);  // ...текст лишь для примера.
// ========
// var container = document.createElement('div');
// var container = document.getElementById("tet")
// container.innerHTML = '<hr><p>Волшебная пыль</p>';
// var newElement = container.firstChild;
// // var el = document.getElementById("tet");
// // el.appendChild(newElement);
// document.body.appendChild(newElement);

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
            },
            // addhtmlTxtPart(containerType, textVal) {
            //     var container = document.createElement(containerType);
            //     container.innerHTML = textVal;
            //     var newElement = container.firstChild;
            //     document.body.appendChild(newElement);
            // }
            // addhtmlTxtPart("div", target, "<p>test</p><hr>")
        }
    }
</script>