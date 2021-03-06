import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acLists: [],
    userPreferences: [],
    connection: {
      socket: undefined,
      status: 'initial',
      admin: false,
      ids: {
        private: undefined,
        public: undefined
      }
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
    setSocketIds(state, ids) {
      state.connection.ids = ids
    },
    socketDisconnect(state) {
      state.connection.socket.close()
    },
    socketStatus(state, status) {
      state.connection.status = status
    },
    socketConnect(state, connectionDetails) {
      console.log('connecting:', connectionDetails)
      var socket = new WebSocket(`${(connectionDetails.secure) ? 'wss' :'ws'}://${connectionDetails.host}/?id=${connectionDetails.sessionId}`)
      socket.onopen = () => {
        console.log("store: [open] Connection established")
        // this.mergeConnection({status: 'connected'})
        state.connection.socket = socket
        state.connection.status = 'connected'
      }
      socket.onmessage = (event) => {
        if (JSON.parse(event.data).data.writePermission) {
          // set write permission flag in stored socket object
          console.log('admin true')
          state.connection.admin = true
        }
        if (JSON.parse(event.data).type === 'ping') {
          socket.send(JSON.stringify({
            type: 'ping',
            data: 'ping'
          }))
        }
      }
      socket.onerror = (event) => {
        console.log('websocket error:', event)
        state.connection.status = 'websocket error'
      }
      socket.onclose = (event) => {
        console.log('Connection closed: ', event.code, event.reason)
        state.connection.status = 'closed'
      }
    },
    webSocket (state, data) {
      state.connection = data
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
        this.state.acLists.unshift(list)
      }
      this.commit('saveState')
    },
    removelist (state, list) {
      var listIndex = this.state.acLists.indexOf(list)
      this.state.acLists.splice(listIndex, 1)
      this.commit('saveState')
    },
    addAc (state, data) {
      var listMatch = this.state.acLists.filter(l => {return l.id === data.listId})
      if (listMatch.length > 0) {
        var ac = {
          id: uuidv4(),
          in: data.in,
          out: data.out
        }
        listMatch[0].acs.unshift(ac)
        listMatch[0].lastUpdate = moment().format()
      }
      this.commit('saveState')
    },
    saveState (state) {
      // save state to localStorage
      console.log('saving state to localStorage')
      localStorage.setItem('store', JSON.stringify({acLists: state.acLists, userPreferences: state.userPreferences}))
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
      this.commit('saveState')
    },
    // user preferences
    setPreference (state, payload) {
      // console.log('set preference: ', payload.key, payload.value)
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
        this.commit('saveState')
        return
      }

      if (matchingKeys.length === 0) {
        // no matches, push new
        state.userPreferences.push({
          key: payload.key,
          value: payload.value
        })
        this.commit('saveState')
      }
    }
  },
  getters: {
    getConnection: state => {
      return state.connection
    },
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
        console.log(`Key ${key} not found, returning false`)
        return false
      }

      // console.log('store returning: ', matchingKeys[0].value)
      return matchingKeys[0].value
    },
    // color: (state, getters) => (key) => {
    //   var color = getters.userPreference(key)
    //   if (!color) {
    //     console.log(`Key ${key} not found, returning default (#fff)`)
    //     return '#fff'
    //   }

    //   return color
    // },
    filteredAcs: state => string => {
      // console.log('store: getting acs that start with:', string, state)
      // string = string.toLowerCase()
      var matches = []
      state.acLists.forEach(list => {
        // console.log('match ' + string + ' in list:', list.name)
        // var acs = list.acs.filter(ac => {
        //   return ac.in.startsWith(string)
        // })
        // console.log(acs)
        list.acs.filter(ac => {
          if (ac.in.startsWith(string.toLowerCase())) {
            matches.push(ac)
          }
          // return ac.in.startsWith(string)
        })
      })
      return matches
    },
    acLists: state => {
      return state.acLists
    }
  }
})