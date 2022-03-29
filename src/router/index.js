import Vue from 'vue'
import Router from 'vue-router'

import index from "@/views/index";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'index',
      component: index,
      children:[
        {
          path:'/home',
          name:'home',
          component :()=>import('../views/home')
        },
        {
          path:'/user',
          name:'user',
          component :()=>import('../views/User'),
        },
        {
          path:'/mall',
          name:'mall',
          component :()=>import('../views/Home/mall'),
        }
      ]
    }
  ]
})
//重复点击导航时，控制台出现报错 下列方法可解决问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
