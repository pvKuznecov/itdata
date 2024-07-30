import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import AboutView from '../views/AboutView/AboutView.vue'
import BitrixView from '../views/BitrixView/BitrixView.vue'
import HtmlView from '../views/HtmlView/HtmlView.vue'
import JSView from '../views/JSView/JSView.vue'
import TSView from '../views/TSView/TSView.vue'
import CssView from '../views/CssView/CssView.vue'
import JsframeworksView from '../views/JsframeworksView/JsframeworksView.vue'
import NotfoundView from '../views/NotfoundView/NotfoundView.vue'
import AngularView from '../views/AngularView/AngularView.vue'
import ReactView from '../views/ReactView/ReactView.vue'
import Vue3View from '../views/Vue3View/Vue3View.vue'
import RacketView from '../views/RacketView/RacketView.vue'
import LinuxView from '../views/LinuxView/LinuxView.vue'
import LessonsHTMLView from '../views_learning/LessonsHTMLView/LessonsHTMLView.vue'
import LessonsRacketView from '../views_learning/LessonsRacketView/LessonsRacketView.vue'
import LessonsBitrixView from '../views_learning/LessonsBitrixView/LessonsBitrixView.vue'
import LessonsJSView from '../views_learning/LessonsJSView/LessonsJSView.vue'
import LessonsTSView from '../views_learning/LessonsTSView/LessonsTSView.vue'
import LessonsCssView from '../views_learning/LessonsCssView/LessonsCssView.vue'
import LessonsAngularView from '../views_learning/LessonsAngularView/LessonsAngularView.vue'
import LessonsReactView from '../views_learning/LessonsRacketView/LessonsRacketView.vue'
import LessonsVue3View from '../views_learning/LessonsVue3View/LessonsVue3View.vue'
import LessonsLinuxView from '../views_learning/LessonsLinuxView/LessonsLinuxView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bitrix',
    name: 'bitrix',
    component: BitrixView
  },
  {
    path: '/html',
    name: 'html',
    component: HtmlView
  },
  {
    path: '/javascript',
    name: 'javascript',
    component: JSView
  },
  {
    path: '/typescript',
    name: 'typescript',
    component: TSView
  },
  {
    path: '/css',
    name: 'css',
    component: CssView
  },
  {
    path: '/js-frameworks',
    name: 'js-frameworks',
    component: JsframeworksView
  },
  {
    path: '/angular',
    name: 'angular',
    component: AngularView
  },
  {
    path: '/react',
    name: 'react',
    component: ReactView
  },
  {
    path: '/vue3',
    name: 'vue3',
    component: Vue3View
  },
  {
    path: '/racket',
    name: 'racket',
    component: RacketView
  },
  {
    path: '/linux',
    name: 'linux',
    component: LinuxView
  },

  { path: '/lessons-angular/html', component: HtmlView },
  { path: '/lessons-bitrix/html', component: HtmlView },
  { path: '/lessons-css/html', component: HtmlView },
  { path: '/lessons-html/html', component: HtmlView },
  { path: '/lessons-js/html', component: HtmlView },
  { path: '/lessons-linux/html', component: HtmlView },
  { path: '/lessons-racket/html', component: HtmlView },
  { path: '/lessons-react/html', component: HtmlView },
  { path: '/lessons-ts/html', component: HtmlView },  
  { path: '/lessons-vue3/html', component: HtmlView },
  
  { path: '/lessons-angular/about', component: AboutView },
  { path: '/lessons-bitrix/about', component: AboutView },
  { path: '/lessons-css/about', component: AboutView },
  { path: '/lessons-html/about', component: AboutView },
  { path: '/lessons-js/about', component: AboutView },
  { path: '/lessons-linux/about', component: AboutView },
  { path: '/lessons-racket/about', component: AboutView },
  { path: '/lessons-react/about', component: AboutView },
  { path: '/lessons-ts/about', component: AboutView },
  { path: '/lessons-vue3/about', component: AboutView },
  
  { path: '/lessons-angular/bitrix', component: BitrixView },
  { path: '/lessons-bitrix/bitrix', component: BitrixView },
  { path: '/lessons-css/bitrix', component: BitrixView },
  { path: '/lessons-html/bitrix', component: BitrixView },
  { path: '/lessons-js/bitrix', component: BitrixView },
  { path: '/lessons-linux/bitrix', component: BitrixView },
  { path: '/lessons-racket/bitrix', component: BitrixView },
  { path: '/lessons-react/bitrix', component: BitrixView },
  { path: '/lessons-ts/bitrix', component: BitrixView },
  { path: '/lessons-vue3/bitrix', component: BitrixView },
  
  { path: '/lessons-angular/javascript', component: JSView },
  { path: '/lessons-bitrix/javascript', component: JSView },
  { path: '/lessons-css/javascript', component: JSView },
  { path: '/lessons-html/javascript', component: JSView },
  { path: '/lessons-js/javascript', component: JSView },
  { path: '/lessons-linux/javascript', component: JSView },
  { path: '/lessons-racket/javascript', component: JSView },
  { path: '/lessons-react/javascript', component: JSView },
  { path: '/lessons-ts/javascript', component: JSView },
  { path: '/lessons-vue3/javascript', component: JSView },
  
  { path: '/lessons-angular/typescript', component: TSView },
  { path: '/lessons-bitrix/typescript', component: TSView },
  { path: '/lessons-css/typescript', component: TSView },
  { path: '/lessons-html/typescript', component: TSView },
  { path: '/lessons-js/typescript', component: TSView },
  { path: '/lessons-linux/typescript', component: TSView },
  { path: '/lessons-racket/typescript', component: TSView },
  { path: '/lessons-react/typescript', component: TSView },
  { path: '/lessons-ts/typescript', component: TSView },
  { path: '/lessons-vue3/typescript', component: TSView },
  
  { path: '/lessons-angular/css', component: CssView },
  { path: '/lessons-bitrix/css', component: CssView },
  { path: '/lessons-css/css', component: CssView },
  { path: '/lessons-html/css', component: CssView },
  { path: '/lessons-js/css', component: CssView },
  { path: '/lessons-linux/css', component: CssView },
  { path: '/lessons-racket/css', component: CssView },
  { path: '/lessons-react/css', component: CssView },
  { path: '/lessons-ts/css', component: CssView },
  { path: '/lessons-vue3/css', component: CssView },
  
  { path: '/lessons-angular/angular', component: AngularView },
  { path: '/lessons-bitrix/angular', component: AngularView },
  { path: '/lessons-css/angular', component: AngularView },
  { path: '/lessons-html/angular', component: AngularView },
  { path: '/lessons-js/angular', component: AngularView },
  { path: '/lessons-linux/angular', component: AngularView },
  { path: '/lessons-racket/angular', component: AngularView },
  { path: '/lessons-react/angular', component: AngularView },
  { path: '/lessons-ts/angular', component: AngularView },
  { path: '/lessons-vue3/angular', component: AngularView },
  
  { path: '/lessons-angular/react', component: ReactView },
  { path: '/lessons-bitrix/react', component: ReactView },
  { path: '/lessons-css/react', component: ReactView },
  { path: '/lessons-html/react', component: ReactView },
  { path: '/lessons-js/react', component: ReactView },
  { path: '/lessons-linux/react', component: ReactView },
  { path: '/lessons-racket/react', component: ReactView },
  { path: '/lessons-react/react', component: ReactView },
  { path: '/lessons-ts/react', component: ReactView },
  { path: '/lessons-vue3/react', component: ReactView },
  
  { path: '/lessons-angular/vue3', component: Vue3View },
  { path: '/lessons-bitrix/vue3', component: Vue3View },
  { path: '/lessons-css/vue3', component: Vue3View },
  { path: '/lessons-html/vue3', component: Vue3View },
  { path: '/lessons-js/vue3', component: Vue3View },
  { path: '/lessons-linux/vue3', component: Vue3View },
  { path: '/lessons-racket/vue3', component: Vue3View },
  { path: '/lessons-react/vue3', component: Vue3View },
  { path: '/lessons-ts/vue3', component: Vue3View },
  { path: '/lessons-vue3/vue3', component: Vue3View },
  
  { path: '/lessons-angular/racket', component: RacketView },
  { path: '/lessons-bitrix/racket', component: RacketView },
  { path: '/lessons-css/racket', component: RacketView },
  { path: '/lessons-html/racket', component: RacketView },
  { path: '/lessons-js/racket', component: RacketView },
  { path: '/lessons-linux/racket', component: RacketView },
  { path: '/lessons-racket/racket', component: RacketView },
  { path: '/lessons-react/racket', component: RacketView },
  { path: '/lessons-ts/racket', component: RacketView },
  { path: '/lessons-vue3/racket', component: RacketView },
  
  
  { path: '/lessons-angular/linux', component: LinuxView },
  { path: '/lessons-bitrix/linux', component: LinuxView },
  { path: '/lessons-css/linux', component: LinuxView },
  { path: '/lessons-html/linux', component: LinuxView },
  { path: '/lessons-js/linux', component: LinuxView },
  { path: '/lessons-linux/linux', component: LinuxView },
  { path: '/lessons-racket/linux', component: LinuxView },
  { path: '/lessons-react/linux', component: LinuxView },
  { path: '/lessons-ts/linux', component: LinuxView },
  { path: '/lessons-vue3/linux', component: LinuxView },
  
  {
    path: '/lessons-html/:id', component: LessonsHTMLView,
    children: [ { path: '/lessons-html/:id', component: LessonsHTMLView } ]
  },
  {
    path: '/lessons-bitrix/:id', component: LessonsBitrixView,
    children: [ { path: '/lessons-bitrix/:id', component: LessonsBitrixView } ]
  },
  {
    path: '/lessons-js/:id', component: LessonsJSView,
    children: [ { path: '/lessons-js/:id', component: LessonsJSView } ]
  },
  {
    path: '/lessons-ts/:id', component: LessonsTSView,
    children: [ { path: '/lessons-ts/:id', component: LessonsTSView } ]
  },
  {
    path: '/lessons-css/:id', component: LessonsCssView,
    children: [ { path: '/lessons-css/:id', component: LessonsCssView } ]
  },
  {
    path: '/lessons-angular/:id', component: LessonsAngularView,
    children: [ { path: '/lessons-angular/:id', component: LessonsAngularView } ]
  },
  {
    path: '/lessons-react/:id', component: LessonsReactView,
    children: [ { path: '/lessons-react/:id', component: LessonsReactView } ]
  },
  {
    path: '/lessons-vue3/:id', component: LessonsVue3View,
    children: [ { path: '/lessons-vue3/:id', component: LessonsVue3View} ]
  },
  {
    path: '/lessons-linux/:id', component: LessonsLinuxView,
    children: [ { path: '/lessons-linux/:id', component: LessonsLinuxView} ]
  },
  {
    path: '/lessons-racket/:id', component: LessonsRacketView,
    children: [ { path: '/lessons-racket/:id', component: LessonsRacketView } ]
  },
  
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotfoundView
    // component: () => import('../apps/AppNotfound/AppNotfound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory("/itdata/"),
  routes
})

export default router
