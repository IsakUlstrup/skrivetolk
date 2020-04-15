import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// save store to localStorage when something changes
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

new Vue({
  router,
  store,
  // init store from localStorage on app start
  beforeCreate() {
		this.$store.commit('initialiseStore');
	},
  render: h => h(App),
}).$mount('#app')
