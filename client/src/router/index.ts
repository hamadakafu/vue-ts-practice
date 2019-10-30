import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import ButtonSample from '@/components/ButtonSample.vue'
import TextSample from '@/components/TextSample.vue'
import If from '@/components/If.vue'
import For from '@/components/For.vue'
import Computed from '@/components/Computed.vue'
import Markdown from '@/components/Markdown.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/button-sample',
    name: 'button-sample',
    component: ButtonSample,
  },
  {
    path: '/text-sample',
    name: 'text-sample',
    component: TextSample,
  },
  {
    path: '/if',
    name: 'if',
    component: If,
  },
  {
    path: '/for',
    name: 'for',
    component: For,
  },
  {
    path: '/computed',
    name: 'computed',
    component: Computed,
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: Markdown,
  },
]

const router = new VueRouter({
  // シャープがなくなる
  mode:'history',
  routes
})

export default router
