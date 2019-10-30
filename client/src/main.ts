import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
import VueHead from 'vue-head'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueHead)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
