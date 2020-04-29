<template>
  <div class="Session">
    <div>
      <h3>New session</h3>
      <input type="text" name="host" placeholder="url" v-model="connectionDetails.host">
      <input type="text" name="port" placeholder="port" v-model="connectionDetails.port">
      <input type="text" name="parameters" placeholder="parameters" v-model="connectionDetails.parameters">
      <input type="button" value="New" @click="newSession">
    </div>

    <div>
      <h3>Connect to session</h3>
      <input type="text" name="host" placeholder="url" v-model="connectionDetails.host">
      <input type="text" name="port" placeholder="port" v-model="connectionDetails.port">
      <input type="button" value="Connect" @click="connect">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Session',
  data: () => {
    return {
      connectionDetails: {
        protocol: 'ws'
      },
      socketData: null,
      socket: null
    }
  },
  methods: {
    newSession() {
      // console.log('new session: ', this.connectionDetails.host, ':' , this.connectionDetails.port)
      this.socket = new WebSocket(`${this.connectionDetails.protocol}://${this.connectionDetails.host}:${this.connectionDetails.port}/${this.connectionDetails.parameters}`)
      this.socket.onopen = function() {
        console.log("[open] Connection established")
      }
      this.socket.onmessage = function(event) {
        console.log(`[message] Data received from server: ${event.data}`);
        // logElement.innerHTML += ' ' + event.data
      };
    },
    connect() {
      console.log('Connect to session: ', this.connectionDetails.host, ':', this.connectionDetails.port)
    }
  }
}
</script>

<style>

</style>