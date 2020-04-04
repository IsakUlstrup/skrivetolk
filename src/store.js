import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acLists: [],
    userPreferences: {
      background: {},
      text: {}
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
    // AutoCorrect stuff
    addList (state, listData) {
      // console.log('in: ', listData)
      var list = {
        id: listData.id || uuidv4(),
        name: listData.name,
        lastUpdate: listData.lastUpdate || moment().format(),
        acs: listData.acs || []
      }
      console.log('Adding list (data): ', list)

      // check is list already exists
      var listMatch = this.state.acLists.filter(l => {
        return l.id === list.id
      })
      if (listMatch.length > 0) {
        console.log('list exists, replace.', listMatch)
      } else {
        console.log('Adding list: ', list.id)
        this.state.acLists.push(list)
      }
    },
    removelist (state, list) {
      var listIndex = this.state.acLists.indexOf(list)
      this.state.acLists.splice(listIndex, 1)
    },
    addAc (state, data) {
      var listMatch = this.state.acLists.filter(l => {return l.id === data.listId})
      if (listMatch.length > 0) {
        var ac = {
          id: uuidv4(),
          in: data.in,
          out: data.out
        }
        listMatch[0].acs.push(ac)
      }
    },
    // user preferences
    setBackground (state, data) {
      console.log('new background color: ', data.r, data.g, data.b)
      this.state.userPreferences.background = data
    }
  },
  getters: {
    userPreferences: state => {
      return state.userPreferences
    },
    acLists: state => {
      return state.acLists
    }
  }
})