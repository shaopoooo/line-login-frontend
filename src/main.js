import Vue from 'vue'
import axios from 'axios'
import VueSession from 'vue-session'

import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import store from '@/store'

import '@/router/permission'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueSession)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
