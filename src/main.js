import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'

// routes
import MainPage from './components/routes/MainPage'
import Interpeter from './components/routes/Interpeter'
import ManageAutoCorrects from './components/routes/ManageAutoCorrects'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainPage },
  { path: '/interpeter', component: Interpeter},
  { path: '/manage', component: ManageAutoCorrects}
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
