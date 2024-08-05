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
                                "<br><br>",
                                "<a href=\"http://www.example.com\">Здесь элемент содержит атрибут href, то есть гиперссылку.</a>"
                            ]
                        },
                        {
                            id: 1, code: [
                                "<!DOCTYPE html>",
                                "<html>",
                                "",
                                "</html>"
                            ]
                        },
                        {
                            id: 2, code: [
                                "<!DOCTYPE html>",
                                "<html>",
                                "   <head>",
                                "      <meta charset=\"utf-8\">",
                                "      <title>TestProject</title>",
                                "   </head>",
                                "   <body>",
                                "      <div>Моя первая страница HTML5!</div>",
                                "   </body>",
                                "</html>"
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>