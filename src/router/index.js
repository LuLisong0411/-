import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LoginView from '@/views/LoginView.vue'




Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login',
    component: LoginView
  },
  {
    path: '/login',
    name: LoginView,
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/layout.vue'),
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    }]
  },
  {
    path: "/loan-input",
    component: () => import('@/layout/layout.vue'),
    redirect: "/loan/indexView",
    meta: {
      title: "贷款管理"
    },
    children: [{
      path: "/loan/indexView",
      component: () => import("@/views/loan/indexView.vue"),
      name: "loan-input",
      meta: {
        title: "贷款申请"
      }
    }]
  }

]

const router = new VueRouter({
  routes
})

export default router