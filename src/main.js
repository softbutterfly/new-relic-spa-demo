import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
