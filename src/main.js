import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App), //省略形
  render: function (h) {
    return h(App);
  }
}).$mount('#app')

