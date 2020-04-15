import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import MainPage from './components/routes/MainPage'
import Interpeter from './components/routes/Interpeter'
import ManageAcs from './components/routes/ManageAcs'
import Debug from './components/routes/Debug'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: MainPage },
  { path: '/interpeter', component: Interpeter},
  { path: '/manage', component: ManageAcs},
  { path: '/debug', component: Debug}
]

export default new VueRouter({
  routes,
  mode: 'history'
})