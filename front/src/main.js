import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const moment = require('moment')
require('moment/locale/ru')

Vue.use(require('vue-moment'), {
    moment
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
