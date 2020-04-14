import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from "./route/index"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import echarts from "echarts"
Vue.config.productionTip = false
Vue.prototype.echarts = echarts
Vue.use(ElementUI)

let axconf = {
    baseURL:"http://localhost:3000/"
}
Vue.prototype.server = axios.create(axconf)

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
