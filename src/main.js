import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'

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

var router = new VueRouter({
  routes,
  mode: 'history'
})

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state))
})

new Vue({
  router,
  store,
  beforeCreate() {
		this.$store.commit('initialiseStore');
	},
  render: h => h(App),
}).$mount('#app')
