<template>
  <div class="Session">
    <div class="mv2">
      <input class="p3 i br2 b w100" type="button" value="New session" @click="newSession">
    </div>

    <!-- <div class="mv2">
      <input class="p3 i b br2 mb3 w100" type="text" name="session" placeholder="sessionId" v-model="connectionDetails.sessionId">
      <input class="p3 i b br2 w100" type="button" value="Connect to session" @click="connect">
    </div> -->

    <div class="status">
      <h3 class="mv3 h3">Status</h3>
        <p v-if="$route.params.id">id from url: {{ $route.params.id }}</p>
        <ul class="lsn mv3">
          <li v-if="connection.status === 'connected'">
            <input class="br3 b p3 mv3 w100" type="button" value="disconnect" @click="disconnect">
          </li>
          <li v-if="connection.status">socket: {{ connection.status }}</li>
          <li v-if="connection.status === 'connected' && connection.admin">
            admin
          </li>
          <li class="mv2" v-if="connection.status === 'connected'">
            <router-link :to="connection.ids.private | sessionLink">Link for tolk</router-link>
            <br>
            <img class="m1" :src="privateQR">
          </li>
          <li class="mv2" v-if="connection.status === 'connected'">
            <router-link :to="connection.ids.public | sessionLink">Link for bruker</router-link>
            <br>
            <!-- <img class="m1" :src="connection.qr.public"> -->
          </li>
        </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
// import qr from 'qrcode'

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
        secure: false
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
  },
  filters: {
    sessionLink: (id) => {
      return `/session/${id}`
    }
  },
  methods: {
    disconnect() {
      return
    },
    newSession() {
      console.log('Requesting new session')
      axios.get(`${(this.connectionDetails.secure) ? 'https' :'http'}://${this.connectionDetails.host}/new`)
      .then((response) => {
        // error handling
        if (typeof response.data.data.privateId === 'undefined' || typeof response.data.data.publicId === 'undefined') {
          console.log('invalid session details recieved from server')
          return
        }

        this.$store.commit('setSocketIds', {
          private: response.data.data.privateId,
          public: response.data.data.publicId
        })

        this.$store.commit('socketConnect', {
          secure: this.connectionDetails.secure,
          host: this.connectionDetails.host,
          sessionId: response.data.data.privateId
        })

      })
      .catch((error) => {
        console.log(error)
        this.$store.commit('socketStatus', 'network error')
        // this.mergeConnection({status: 'network error'})
      })
    },
    // connect(sessionId) {
    //   // this.connection.status = 'connecting'
    //   this.mergeConnection({status: 'connecting'})
    //   var socket = new WebSocket(`${(this.connectionDetails.secure) ? 'wss' :'ws'}://${this.connectionDetails.host}/?id=${sessionId}`)
    //   socket.onopen = () => {
    //     console.log("[open] Connection established")
    //     this.mergeConnection({status: 'connected'})

    //     var QrCodes = {}

    //     qr.toDataURL(`${(this.connectionDetails.secure) ? 'https' :'http'}://${this.connectionDetails.host}/#/session/${this.connectionComp.publicId}`)
    //     .then(url => {
    //       // this.qrCodes.public = url
    //       // this.mergeConnection({qr: {public: url}})
    //       QrCodes.public = url
    //       // console.log(url)
    //     })
    //     .catch(err => {
    //       console.error(err)
    //     })

    //     qr.toDataURL(`${(this.connectionDetails.secure) ? 'https' :'http'}://${this.connectionDetails.host}/#/session/${this.connectionComp.privateId}`)
    //     .then(url => {
    //       // this.qrCodes.private = url
    //       // this.mergeConnection({qr: {private: url}})
    //       QrCodes.private = url
    //       // console.log(url)
    //     })
    //     .catch(err => {
    //       console.error(err)
    //     })

    //     this.mergeConnection({qr: QrCodes})

    //   }
    //   // socket.onmessage = message => this.$store.webSocketMessage(message)
    //   // socket.onmessage = (event) => this.$store.webSocketMessage()
    //   socket.onmessage = (event) => {
    //     console.log(`[server] ${event.data}`)
    //     if (JSON.parse(event.data).data.writePermission) {
    //       // set write permission flag in stored socket object
    //       console.log('write permission true')
    //       this.mergeConnection({writePermission: true})
    //     }
    //     if (JSON.parse(event.data).type === 'ping') {
    //       socket.send(JSON.stringify({
    //         type: 'ping',
    //         data: 'ping'
    //       }))
    //     }
    //   }
    //   socket.onerror = (event) => {
    //     console.log('websocket error:', event)
    //   }
    //   socket.onclose = (event) => {
    //     console.log('Connection closed: ', event.code, event.reason)
    //     // this.connection.status = 'closed'
    //     this.mergeConnection({status: 'closed'})
    //   }
    //   this.mergeConnection({socket: socket})
    // }
  },
  computed: {
    connection() {
      return this.$store.getters.getConnection
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