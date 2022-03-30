// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import 'element-ui/lib/theme-chalk/index.css';
import {button,Radio,Container,Header,Main,Aside,Menu,Submenu,MenuItem,Table,TableColumn,MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,Row,Card,Col} from "element-ui";


import router from './router'
import store from "./store";
import './assets/less/index.less'
import http from 'axios'


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
Vue.use(TableColumn)
Vue.use(Table)

//axios不是一个插件，全局使用需要使用prototype
Vue.prototype.$http = http

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
