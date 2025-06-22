import { createRouter, createWebHistory } from 'vue-router'
import PkindexView from '../views/pk/PkindexView.vue'
import RecordindexView from '../views/record/RecordindexView.vue'
import RanklistindexView from '../views/ranklist/RanklistindexView.vue'
import UserBotindexView from '../views/user/bot/UserBotindexView.vue'
import Notfound from '../views/error/NotfoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk/'
  },
  {
    path: '/pk/',
    name: 'pkindex',
    component: PkindexView
  },{
    path: '/record/',
    name: 'recordindex',
    component: RecordindexView
  },{
    path: '/ranklist/',
    name: 'ranklistindex',
    component: RanklistindexView
  },{
    path: '/user/bot/',
    name: 'userbotindex',
    component: UserBotindexView
  },{
    path: '/404/',
    name: '404',
    component: Notfound
  },{
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: Notfound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
