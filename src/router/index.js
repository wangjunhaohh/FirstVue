import Vue from 'vue'
import Router from 'vue-router'

import index from "@/views/index";
import index2 from "@/views/index2";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index2',
      component: index2
    }
  ]
})
