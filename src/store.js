import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acLists: [],
    userPreferences: []
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
        listMatch[0].lastUpdate = moment().format()
      }
    },
    updateAc (state, data) {
      console.log('Store: updating ac: ', data)

      // find list
      var listMatch = state.acLists.filter(list => {
        return list.id === data.listId
      })
      // error handlig
      if (listMatch.length === 0) {
        console.log(`No lists with id: ${data.listId} found.`)
        return
      }

      if (listMatch.length > 1) {
        console.log(`Too many lists found with id: ${data.listId}, something is probably wrong.`)
        return
      }

      listMatch[0].lastUpdate = moment().format()

      // var acMatch = listMatch[0].acs.filter(ac => {
      //   return ac.id === data.id
      // })

      // console.log('Store: ac match: ', acMatch)
    },
    deleteAc (state, data) {
      var listMatch = state.acLists.filter(list => {
        return list.id === data.listId
      })

      if (listMatch.length === 0) {
        console.log(`No lists with id: ${data.listId} found.`)
        return
      }

      if (listMatch.length > 1) {
        console.log(`Too many lists found with id: ${data.listId}, something is probably wrong.`)
        return
      }
      listMatch[0].acs = listMatch[0].acs.filter(ac => {
        return ac.id !== data.acId
      })
      // set last update
      listMatch[0].lastUpdate = moment().format()
      console.log(`ac with id: ${data.acId} removed.`)
    },
    // user preferences
    setPreference (state, payload) {
      console.log('set preference: ', payload.key, payload.value)
      // check if key exists
      var matchingKeys = state.userPreferences.filter( pref => {
        return pref.key === payload.key
      })

      if (matchingKeys.length > 1) {
        console.log('Too many key matches, something is probably wrong')
        return
      }

      if (matchingKeys.length === 1) {
        matchingKeys[0].value = payload.value
        return
      }

      if (matchingKeys.length === 0) {
        // no matches, push new
        state.userPreferences.push({
          key: payload.key,
          value: payload.value
        })
      }
    }
  },
  getters: {
    // return user preference by key
    userPreference: (state) => (key) => {
      if (state.userPreferences.length === 0) {
        console.log('Empty preferences, return null')
        return null
      }

      var matchingKeys = state.userPreferences.filter( pref => {
        return pref.key === key
      })

      if (matchingKeys.length === 0) {
        console.log(`Key ${key} not found, returning null`)
        return null
      }

      // console.log('store returning: ', matchingKeys[0].value)
      return matchingKeys[0].value
    },
    color: (state, getters) => (key) => {
      var color = getters.userPreference(key)
      if (!color) {
        console.log(`Key ${key} not found, returning default (#fff)`)
        return '#fff'
      }

      return color
    },
    acLists: state => {
      return state.acLists
    }
  }
})