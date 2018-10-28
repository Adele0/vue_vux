// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import { XHeader, XButton, XInput, LoadingPlugin, ToastPlugin } from 'vux'

// 组件
Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.component('x-input', XInput)
// 插件
Vue.use( LoadingPlugin)
Vue.use(ToastPlugin, {position: 'middle'})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
