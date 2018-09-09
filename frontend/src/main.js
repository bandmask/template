import Vue from 'vue'
import App from './App.vue'
import vueMq from 'vue-mq'
import router from './router'
import store from './store'
import media from './media'

Vue.config.productionTip = false
Vue.prototype.$appName = 'ropr.se'
Vue.use(vueMq, media)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
