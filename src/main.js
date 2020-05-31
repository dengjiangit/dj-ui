import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入我们的组件库
import djUi from './packages/index'
Vue.use(djUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
