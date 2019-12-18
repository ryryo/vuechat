import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Article from '../views/Article.vue'
import About from '../views/About.vue'
import Footer from '../components/Footer.vue'

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
// https://bootstrap-vue.js.org/docs/
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../assets/css/custom.scss'
Vue.use(BootstrapVue)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Chat
    components: {
      default: Chat,
      footer: Footer
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    components: {
      default: About,
      footer: Footer
    }

  },
  {
    path: '/article/:aid',
    name: 'article',
    // component: Article
    components: {
      default: Article,
      footer: Footer
    }

  }
]

const router = new VueRouter({
  routes
})

export default router
