import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import routerPath from './router/routerPath'
import apiPath from './services/apiPath'

import jvc from '@justinaus/vue-components'
import '@justinaus/vue-components/dist/justinaus.css'

Vue.config.productionTip = false

Vue.prototype.$routerPath = routerPath;
Vue.prototype.$apiPath = apiPath;

Vue.use(jvc.Plugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
