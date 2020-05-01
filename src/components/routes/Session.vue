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
        <ul class="lsn mv3">
          <li>socket: {{ status }}</li>
          <li>privateId: {{ session.privateId }}</li>
          <li>publicId: {{ session.publicId }}</li>
        </ul>
        <h3 class="mv3 h3">Log</h3>
        <div>{{logData}}</div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Session',
  data: () => {
    return {
      connectionDetails: {
        host: '192.168.0.7',
        port: '8888',
        protocol: 'ws'
      },
      status: '',
      session: {},
      socket: null,
      logData: ''
    }
  },
  methods: {
    ping() {
      if (this.socket) {
        this.socket.send('ping')
      }
    },
    log(msg) {
      this.logData += `\n${msg}`
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

        this.session = response.data
        this.connectionDetails.sessionId = this.session.publicId
        this.connect()
      })
      .catch((error) => {
        this.log(error)
        this.status = 'network error'
      })
      .finally(function () {
        // always executed
      })
    },
    connect() {
      this.socket = new WebSocket(`${this.connectionDetails.protocol}://${this.connectionDetails.host}:${this.connectionDetails.port}/?id=${this.connectionDetails.sessionId}`)
      this.socket.onopen = () => {
        this.log("[open] Connection established")
        this.status = 'connected'
      }
      this.socket.onmessage = (event) => {
        this.log(`[message] Data received from server: ${event.data}`)
      }
      this.socket.onclose = (event) => {
        this.log('Connection closed: ', event.code, event.reason)
        this.status = 'closed'
      }
    }
  }
}
</script>

<style>

</style>