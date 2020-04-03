import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autoCorrectLists: [],
    userPreferences: {
      userName: 'User-' + uuidv4()
    }
  },
  mutations: {
    initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				)
			}
		},
    addList (state, listName) {
      var list = {
        id: uuidv4(),
        name: listName,
        author: this.state.userPreferences.userName,
        enabled: true,
        lastUpdate: moment().format(),
        autoCorrects: []
      }
      console.log('List add request: ', list)
      this.state.autoCorrectLists.push(list)
      // localStorage.setItem('autoCorrectLists', JSON.stringify(this.state.autoCorrectLists))
    },
    removelist (state, list) {
      var listIndex = this.state.autoCorrectLists.indexOf(list)
      this.state.autoCorrectLists.splice(listIndex, 1)
      // console.log('removing list: ', list)
      // var remaininglists = this.state.autoCorrectLists.filter(l => {
      //   return l.id != list.id
      // })
      // console.log(remaininglists)
    },
    addAc (state, data) {
      var listMatch = this.state.autoCorrectLists.filter(l => {return l.id === data.listId})
      if (listMatch.length > 0) {
        var ac = {
          id: uuidv4(),
          in: data.in,
          out: data.out
        }
        listMatch[0].autoCorrects.push(ac)
      }
    }
  }
})