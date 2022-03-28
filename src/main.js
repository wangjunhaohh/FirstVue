// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import 'element-ui/lib/theme-chalk/index.css';
import {button,Radio,Container,Header,Main,Aside,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui';


import router from './router'

Vue.config.productionTip = false
Vue.use(button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
