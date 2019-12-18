import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,

  // render: h => h(App), //省略形
  render: function (h) {
    return h(App);
  }
}).$mount('#app')

