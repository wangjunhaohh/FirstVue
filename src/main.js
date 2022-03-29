// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import 'element-ui/lib/theme-chalk/index.css';
import {button,Radio,Container,Header,Main,Aside,Menu,Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,Row,Card,Col} from "element-ui";


import router from './router'
import store from "./store";


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
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
