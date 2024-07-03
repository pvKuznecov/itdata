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
import VueView from '../views/VueView/VueView.vue'
import RacketView from '../views/RacketView/RacketView.vue'

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
    path: '/js-frameworks/angular',
    name: 'js-frameworks/angular',
    component: AngularView
  },
  {
    path: '/js-frameworks/react',
    name: 'js-frameworks/react',
    component: ReactView
  },
  {
    path: '/js-frameworks/vue',
    name: 'js-frameworks/vue',
    component: VueView
  },
  {
    path: '/racket',
    name: 'racket',
    component: RacketView
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
