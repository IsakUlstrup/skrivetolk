<template>
  <div class="Session">
    <div class="mv2">
      <input class="p3 br2 w100" type="button" value="New session" @click="newSession">
    </div>

    <div class="mv2">
      <input class="p3 br2 mb3 w100" type="text" name="session" placeholder="sessionId" v-model="connectionDetails.sessionId">
      <input class="p3 br2 w100" type="button" value="Connect to session" @click="connect">
    </div>
    <!-- <div class="mv2">
      <input class="p3 br2" type="button" value="Ping" @click="ping">
    </div> -->

    <div class="status">
      <h3 class="mv3 h3">Status</h3>
        <p v-if="$route.params.id">id from url: {{ $route.params.id }}</p>
        <ul class="lsn mv3">
          <li>socket: {{ connection.status }}</li>
          <li v-if="connection.status === 'connected' && connection.writePermission">
            write permission
          </li>
          <li v-if="connection.status === 'connected'">
            <input class="br3 p3" type="button" value="disconnect" @click="disconnect">
          </li>
          <li v-if="connection.status === 'connected'">
            <router-link :to="connection.sessionIds.privateId | sessionLink">Link for tolk</router-link>
          </li>
          <li v-if="connection.status === 'connected'">
            <router-link :to="connection.sessionIds.publicId | sessionLink">Link for bruker</router-link>
          </li>
        </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Session',
  data: () => {
    return {
      connection: {
        status: 'initial',
        sessionIds: {},
        socket: undefined,
        writePermission: false
      },
      connectionDetails: {
        host: '',
        protocol: 'wss'
      }
    }
  },
  mounted() {
    // console.log('server: ', self.location.host)
    this.connectionDetails.host = self.location.host
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
    disconnect() {
      if (this.connection.socket) {
        this.connection.socket.close()
      }
    },
    ping() {
      if (this.connection.socket) {
        this.connection.socket.send(JSON.stringify({
          type: 'ping',
          data: 'ping'
        }))
      }
    },
    newSession() {
      console.log('Requesting new session')
      axios.get(`http://${this.connectionDetails.host}/new`)
      .then((response) => {
        console.log('Response:', response.data)

        // error handling
        if (typeof response.data.data.privateId === 'undefined' || typeof response.data.data.publicId === 'undefined') {
          console.log('invalid session details recieved from server')
          return
        }

        this.connection.sessionIds = {
          privateId: response.data.data.privateId,
          publicId: response.data.data.publicId
        }
        // this.connectionDetails.sessionId = this.connection.sessionIds.privateId
        this.connect(response.data.data.privateId)
      })
      .catch((error) => {
        console.log(error)
        this.connection.status = 'network error'
      })
      .finally(function () {
        // always executed
      })
    },
    connect(sessionId) {
      this.connection.status = 'connecting'
      this.connection.socket = new WebSocket(`${this.connectionDetails.protocol}://${this.connectionDetails.host}/?id=${sessionId}`)
      this.connection.socket.onopen = () => {
        console.log("[open] Connection established")
        this.connection.status = 'connected'
        this.$store.commit('webSocket', this.connection)
      }
      this.connection.socket.onmessage = (event) => {
        console.log(`[server] ${event.data}`)
        if (JSON.parse(event.data).data.writePermission) {
          // console.log(JSON.parse(event.data).data.writePermission)
          // set write permission flag in stored socket object
          console.log('write permission true')
          this.connection.writePermission = true
          this.$store.commit('webSocket', this.connection)
        }
        if (JSON.parse(event.data).type === 'ping') {
          this.connection.socket.send(JSON.stringify({
            type: 'ping',
            data: 'ping'
          }))
        }
      }
      this.connection.socket.onerror = (event) => {
        console.log('websocket error:', event)
      }
      this.connection.socket.onclose = (event) => {
        console.log('Connection closed: ', event.code, event.reason)
        this.connection.status = 'closed'
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