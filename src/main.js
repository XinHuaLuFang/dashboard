import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import echarts from 'echarts'

require('./mock')

Vue.config.productionTip = false

Vue.prototype.http = axios
Vue.prototype.echarts = echarts

Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
