<style src="./LessonsHTMLView.css"></style>
<template src="./LessonsHTMLView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';

    export default {
        name: "LessonsHTMLView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.html;
            }
        },
        data() {
            return {
                exampCode: {
                    1: [
                        {
                            id: 0, code: [
                                "<strong>Текст между двумя тегами — открывающим и закрывающим.</strong>",
                                "",
                                "<a href=\"http://www.example.com\">Здесь элемент содержит атрибут href, то есть гиперссылку.</a>"
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>