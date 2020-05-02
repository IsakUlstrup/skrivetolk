<template>
  <div class="Session">
    <div class="mv2">
      <input class="p3 br2 w100" type="button" value="New session" @click="newSession">
    </div>

    <div class="mv2">
      <input class="p3 br2 mb3 w100" type="text" name="session" placeholder="sessionId" v-model="connectionDetails.sessionId">
      <input class="p3 br2 w100" type="button" value="Connect to session" @click="connect">
    </div>
    <div class="mv2">
      <input class="p3 br2" type="button" value="Ping" @click="ping">
    </div>

    <div class="status">
      <h3 class="mv3 h3">Status</h3>
        <p v-if="$route.params.id">id from url: {{ $route.params.id }}</p>
        <ul class="lsn mv3">
          <li>socket: {{ connection.status }}</li>
          <li v-if="connection.sessionIds.privateId">
            <router-link :to="connection.sessionIds.privateId | sessionLink">Link for tolk</router-link>
          </li>
          <li v-if="connection.sessionIds.publicId">
            <router-link :to="connection.sessionIds.publicId | sessionLink">Link for bruker</router-link>
          </li>
        </ul>
        <h3 class="mv3 h3">Log</h3>
        <ul class="lsn">
          <li class="mv3" v-for="logEntry in logData" :key="logEntry">{{logEntry}}</li>
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
        socket: undefined
      },
      connectionDetails: {
        host: '192.168.0.7',
        port: '8888',
        protocol: 'ws'
      },
      logData: []
    }
  },
  mounted() {
    if (typeof this.$route.params.id !== 'undefined') {
      console.log('id set in url, autoconnect')
      this.connectionDetails.sessionId = this.$route.params.id
      this.connect()
    }
  },
  filters: {
    sessionLink: (id) => {
      return `/session/${id}`
    }
  },
  methods: {
    ping() {
      if (this.connection.socket) {
        this.connection.socket.send('ping')
      }
    },
    log(msg) {
      this.logData.push(msg)
    },
    newSession() {
      axios.get(`http://${this.connectionDetails.host}:${this.connectionDetails.port}/new`)
      .then((response) => {
        console.log(response.data)

        // error handling
        if (typeof response.data.privateId === 'undefined' || typeof response.data.publicId === 'undefined') {
          console.log('invalid session details recieved from server')
          return
        }

        this.connection.sessionIds = response.data
        this.connectionDetails.sessionId = this.connection.sessionIds.privateId
        this.connect()
      })
      .catch((error) => {
        this.log(error)
        this.connection.status = 'network error'
      })
      .finally(function () {
        // always executed
      })
    },
    connect() {
      this.connection.status = 'connecting'
      this.connection.socket = new WebSocket(`${this.connectionDetails.protocol}://${this.connectionDetails.host}:${this.connectionDetails.port}/?id=${this.connectionDetails.sessionId}`)
      this.connection.socket.onopen = () => {
        this.log("[open] Connection established")
        this.connection.status = 'connected'
        this.$store.commit('webSocket', this.connection)
      }
      this.connection.socket.onmessage = (event) => {
        this.log(`[message] Data received from server: ${event.data}`)
      }
      this.connection.socket.onclose = (event) => {
        this.log('Connection closed: ', event.code, event.reason)
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