<template>
  <div class="Session">
    <div class="mv2">
      <input class="p3 i br2 b w100" type="button" value="New session" @click="newSession">
    </div>

    <div class="mv2">
      <input class="p3 i b br2 mb3 w100" type="text" name="session" placeholder="sessionId" v-model="connectionDetails.sessionId">
      <input class="p3 i b br2 w100" type="button" value="Connect to session" @click="connect">
    </div>

    <div class="status">
      <h3 class="mv3 h3">Status</h3>
        <p v-if="$route.params.id">id from url: {{ $route.params.id }}</p>
        <ul class="lsn mv3">
          <li v-if="connectionComp.status">socket: {{ connectionComp.status }}</li>
          <li v-if="connectionComp.status === 'connected' && connectionComp.writePermission">
            write permission
          </li>
          <li v-if="connectionComp.status === 'connected'">
            <input class="br3 b p3 mv3 w100" type="button" value="disconnect" @click="disconnect">
          </li>
          <li v-if="connectionComp.status === 'connected'">
            <router-link :to="connectionComp.privateId | sessionLink">Link for tolk</router-link>
          </li>
          <li v-if="connectionComp.status === 'connected'">
            <router-link :to="connectionComp.publicId | sessionLink">Link for bruker</router-link>
          </li>
          <li v-if="connectionComp.status === 'connected'">
            <img class="w100" :src="qrCodes.public" alt="">
          </li>
        </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import qr from 'qrcode'

export default {
  name: 'Session',
  data: () => {
    return {
      qrCodes: {
        public: null,
        private: null
      },
      connectionDetails: {
        host: '',
        secure: false,
        sessionId: '',
      }
    }
  },
  mounted() {
    // set connection details based on url

    // protocol
    if (location.protocol === 'https:') {
      this.connectionDetails.secure = true
    }
    // host
    this.connectionDetails.host = self.location.host

    // parameters
    if (typeof this.$route.params.id !== 'undefined') {
      console.log('id set in url, autoconnect')
      this.connectionDetails.sessionId = this.$route.params.id
      this.connect(this.$route.params.id)
    }
  },
  filters: {
    sessionLink: (id) => {
      return `/session/${id}`
    }
  },
  methods: {
    mergeConnection(mergeObject) {
      this.connectionComp = {...this.connectionComp, ...mergeObject}
    },
    disconnect() {
      if (this.connectionComp.socket) {
        this.connectionComp.socket.close()
      }
    },
    newSession() {
      console.log('Requesting new session')
      axios.get(`${(this.connectionDetails.secure) ? 'https' :'http'}://${this.connectionDetails.host}/new`)
      .then((response) => {
        // console.log('Response:', response.data)

        // error handling
        if (typeof response.data.data.privateId === 'undefined' || typeof response.data.data.publicId === 'undefined') {
          console.log('invalid session details recieved from server')
          return
        }

        this.mergeConnection({
          privateId: response.data.data.privateId,
          publicId: response.data.data.publicId
        })

        this.connect(this.connectionComp.privateId)
      })
      .catch((error) => {
        console.log(error)
        this.mergeConnection({status: 'network error'})
      })
    },
    connect(sessionId) {
      // this.connection.status = 'connecting'
      this.mergeConnection({status: 'connecting'})
      var socket = new WebSocket(`${(this.connectionDetails.secure) ? 'wss' :'ws'}://${this.connectionDetails.host}/?id=${sessionId}`)
      socket.onopen = () => {
        console.log("[open] Connection established")
        this.mergeConnection({status: 'connected'})

        qr.toDataURL(`${(this.connectionDetails.secure) ? 'https' :'http'}://${this.connectionDetails.host}/?id=${this.connectionComp.publicId}`)
        .then(url => {
          this.qrCodes.public = url
          console.log(url)
        })
        .catch(err => {
          console.error(err)
        })

      }
      socket.onmessage = (event) => {
        console.log(`[server] ${event.data}`)
        if (JSON.parse(event.data).data.writePermission) {
          // set write permission flag in stored socket object
          console.log('write permission true')
          this.mergeConnection({writePermission: true})
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
      }
      socket.onclose = (event) => {
        console.log('Connection closed: ', event.code, event.reason)
        // this.connection.status = 'closed'
        this.mergeConnection({status: 'closed'})
      }
      this.mergeConnection({socket: socket})
    }
  },
  computed: {
    connectionComp: {
    // getter
    get: function () {
      return this.$store.getters.getConnection
    },
    // setter
    set: function (newValue) {
      this.$store.commit('webSocket', newValue)
    }
  }
  }
}
</script>

<style scoped>
a {
  color: white;
}
a:visited {
  color: white;
}
</style>