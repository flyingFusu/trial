/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Cate from '../views/category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/friends',
    name:"friends",
    component:  () => import('../views/friends.vue'),
    meta:{
      title: '邀请好友列表'
    }
  },
  {
    path: '/task',
    name:"task",
    component:  () => import('../views/task.vue'),
    meta:{
      title: '任务'
    }
  },
   {
    path: '/detail',
    name:"detail",
    component:  () => import('../views/detail.vue'),
    meta:{
      title: '基金详情'
    }
  },
  {
    path: '/buy',
    name:"buy",
    component:  () => import('../views/buy.vue'),
    meta:{
      title: '买入（虚拟）'
    }
  },
  {
    path: '/redeem',
    name:"redeem",
    component:  () => import('../views/redeem.vue'),
    meta:{
      title: '赎回'
    }
  },

  
  {
    path: '/rank',
    name:"rank",
    component:  () => import('../views/rank.vue'),
    meta:{
      title: '赛季排行榜'
    }
  },  
  {
    path: '/ranklist',
     name:"ranklist",
    component:  () => import('../views/ranklist.vue'),
    meta:{
      title: '历史赛季排行榜'
    }
  },
  {
    path: '/deallist',
     name:"deallist",
    component:  () => import('../views/deallist.vue'),
    meta:{
      title: '交易记录'
    }
  },
  {
    path: '/tas',
    name:"tas",
    component:  () => import('../views/tas.vue'),
    meta:{
      title: 'Ta买了啥'
    }
  },  
  {
    path: '/rule',
    component: () => import('../views/rule.vue'),
  },
  {
    path: '/category',
    component: Cate,
    meta:{
      title: '基金分类'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
