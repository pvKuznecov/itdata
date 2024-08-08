<style src="./LessonsBitrixView.css"></style>
<template src="./LessonsBitrixView.html"></template>
<script>
    import ViewtitleComponent from '@/components/ViewtitleComponent/ViewtitleComponent.vue';
    import NavigatorComponent from '@/components/NavigatorComponent/NavigatorComponent.vue';

    export default {
        name: "LessonsBitrixView",
        inject: ["GDATA"],
        components: {
            ViewtitleComponent,
            NavigatorComponent
        },
        computed: {
            AGDATA: function () {
                return this.GDATA.bitrix;
            }
        },
        data() {
            return {
                exampCode: {
                    1: [
                        {
                            id: 0, code: [
                                "function IB_idByKey($IBKey) {",
                                "$IBId_result = false;",
                                "",
                                "if ($IBKey) {",
                                "$rsSection = CIBlock::GetList(array(\"SORT\" => \"ASC\"), array(\"CODE\" => $IBKey), false, array(\"ID\"));",
                                "",
                                "if ($arSection = $rsSection->Fetch()) {",
                                "$IBId_result = $arSection[\"ID\"];",
                                "	}",
                                "	}",
                                "",
                                "return $IBId_result;",
                                "}"
                            ]
                        }                 
                    ],
                    2: [
                        {
                            id: 0, code: [
                                "function AddIBlock() {",
                                "$IBType = \"lists\";   //код целевого типа инфоблока \"Универсальные списки\"",
                                "$IBCode = \"IB_KEY\";   //код создаваемого инфоблока \"Документы\"",
                                "",
                                "//проверка на уникальность",
                                "$resIBE = CIBlock::GetList(Array(), Array(\"TYPE\" => $IBType, \"CODE\" => $IBCode));",
                                "if ($ar_resIBE = $resIBE->Fetch()) {",
                                "return false;",
                                "} else {",
                                "$IBCONFIG_Document = array(",
                                "\"CODE\"=> $IBCode,",
                                "\"IBLOCK_TYPE_ID\"=> $IBType,",
                                "\"NAME\"=> \"Документы\",",
                                "\"ACTIVE\"=> \"Y\",",
                                "\"SORT\"=> 500,",
                                "\"DESCRIPTION_TYPE\"=> \"text\",",
                                "\"RSS_ACTIVE\"=> \"N\",",
                                "\"INDEX_ELEMENT\"=> \"Y\",",
                                "\"INDEX_SECTION\"=> \"N\",",
                                "\"WORKFLOW\"=> \"N\",",
                                "\"BIZPROC\"=> \"Y\",",
                                "\"VERSION\"=> 1,",
                                "\"SITE_ID\"=> \"s1\",",
                                "\"ELEMENT_NAME\" => \"Документ\",",
                                "\"ELEMENTS_NAME\" => \"Документы\",",
                                "\"ELEMENT_ADD\" => \"Добавить документ\",",
                                "\"ELEMENT_EDIT\" => \"Изменить документ\",",
                                "\"ELEMENT_DELETE\" => \"Удалить документ\",",
                                "\"SECTION_NAME\" => \"Раздел\",",
                                "\"SECTIONS_NAME\" => \"Разделы\",",
                                "\"SECTION_ADD\" => \"Добавить раздел\",",
                                "\"SECTION_EDIT\" => \"Изменить раздел\",",
                                "\"SECTION_DELETE\" => \"Удалить раздел\"",
                                ");",
                                "$ib = new CIBlock;",
                                "",
                                "$NEWID = $ib->Add($IBCONFIG_Document);   // создаем инфоблок",
                                "//создаем св-ва",
                                "$IBFIELDS_Document = array(",
                                "array(\"NAME\" => \"Код\", \"ACTIVE\" => \"Y\", \"SORT\" => 10, \"CODE\" => \"KOD\", \"PROPERTY_TYPE\" => \"S\", \"FILTRABLE\" => \"Y\", \"IBLOCK_ID\" => $NEWID, \"IS_REQUIRED\" => \"Y\"),",
                                "array(\"NAME\" => \"Описание\", \"ACTIVE\" => \"Y\", \"SORT\" => 20,  \"CODE\" => \"OPISANIE\", \"PROPERTY_TYPE\" => \"S\", \"FILTRABLE\" => \"Y\", \"IBLOCK_ID\" => $NEWID),",
                                "array(\"NAME\"=> \"Ссылка на оригинал\", \"ACTIVE\" => \"Y\", \"SORT\" => 30, \"CODE\" => \"SSYLKA_NA_ORIGINAL\", \"PROPERTY_TYPE\" => \"E\", \"FILTRABLE\" => \"Y\", \"IBLOCK_ID\" => $NEWID, \"LINK_IBLOCK_ID\" => $NEWID),",
                                ");",
                                "$ibp = new CIBlockProperty;",
                                "for ($i = 0; $i < count($IBFIELDS_Document); $i++) {",
                                "$propId = $ibp->Add($IBFIELDS_Document[$i]);",
                                "}",
                                "if ($propId > 0) {",
                                "$result = \"done\";",
                                "} else {",
                                "$result = \"error\";",
                                "}",
                                "return $result;",
                                "}",
                                "}" 
                            ]
                        }
                    ],
                    3: [
                        {
                            id: 0, code: [
                                "// поиск id группы по ее символьному коду",
                                "function IBG_idByKey($GroupCode) {",
                                "$IBId_result = false;",
                                "",
                                "if ($GroupCode) {",
                                "$rsSection = CGroup::GetList($by = \"c_sort\", $order = \"asc\", array(\"STRING_ID\"=>$GroupCode));",
                                "",
                                "if ($arSection = $rsSection->Fetch()) {",
                                "$IBId_result = $arSection['ID'];",
                                "}",
                                "}",
                                "",
                                "return $IBId_result;",
                                "}"
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>