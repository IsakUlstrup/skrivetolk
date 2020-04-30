<template>
  <div class="Session">
    <div class="mv2">
      <h3>New session</h3>
      <input class="p3 br2 w100" type="text" name="host" placeholder="url" v-model="connectionDetails.host">
      <input class="p3 br2 w100" type="text" name="port" placeholder="port" v-model="connectionDetails.port">
      <input class="p3 br2 w100" type="button" value="New" @click="newSession">
    </div>

    <div class="mv2">
      <h3>Connect to session</h3>
      <input class="p3 br2 w100" type="text" name="host" placeholder="url" v-model="connectionDetails.host">
      <input class="p3 br2 w100" type="text" name="port" placeholder="port" v-model="connectionDetails.port">
      <input class="p3 br2 w100" type="text" name="session" placeholder="session" v-model="connectionDetails.sessionId">
      <input class="p3 br2 w100" type="button" value="New" @click="connect">
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
        protocol: 'ws'
      },
      socketData: null,
      status: 'idle',
      socket: null,
      wsLog: ''
    }
  },
  methods: {
    newSession() {
      axios.get(`http://${this.connectionDetails.host}:${this.connectionDetails.port}/new`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      }); 
    },
    connect() {
      this.socket = new WebSocket(`${this.connectionDetails.protocol}://${this.connectionDetails.host}:${this.connectionDetails.port}/?id=${this.connectionDetails.sessionId}`)
      this.socket.onopen = function() {
        console.log("[open] Connection established")
        // this.wsLog += '\n[open] Connection established'
      }
      this.socket.onmessage = function(event) {
        console.log(`[message] Data received from server: ${event.data}`)
        // this.wsLog += `\n[message] Data received from server: ${event.data}`
      }
      this.socket.onclose = function(event) {
        console.log('Connection closed: ', event.code, event.reason)
      }
    }
  }
}
</script>

<style>

</style>