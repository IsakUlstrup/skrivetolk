import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import MainPage from './components/routes/MainPage'
import Interpeter from './components/routes/Interpeter'
import ManageAcs from './components/routes/ManageAcs'
import Debug from './components/routes/Debug'
import Session from './components/routes/Session'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainPage },
  { path: '/interpeter', component: Interpeter},
  { path: '/manage', component: ManageAcs},
  { path: '/debug', component: Debug},
  { path: '/session', component: Session}
]

export default new VueRouter({
  routes
})