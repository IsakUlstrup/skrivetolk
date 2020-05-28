<template>
  <div id="MainInput" class="f p1">
    <!-- <textarea v-model="inputData" v-on:keyup.prevent="handleInput"></textarea> -->
    <textarea
      class="fa"
      placeholder="Skriv her..."
      ref="mainInput"
      v-model="inputData"
      rows="30"
      v-on:keyup="handleInput2"
      @blur="inputChanged"
      :disabled=" connection && !connection.writePermission"
    ></textarea>
    <ul id="autocompleteResults">
      <li v-for="ac in acResults.slice(0, 10)" :key="ac.in">
        {{ac.out}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainInput',
  props: {
    autoCorrects: Array
  },
  data () {
    return {
      inputData: '',
      acResults: [],
      currentWord: ''
    }
  },
  methods: {
    inputChanged() {
      console.log('input changed')
    },
    scrollBottom() {
      this.$refs.mainInput.scrollTop = this.$refs.mainInput.scrollHeight;
      // textarea.scrollTop = textarea.scrollHeight
    },
    handleInput2() {
      if (!this.connection) return
      this.connection.socket.send(JSON.stringify({
        type: 'content',
        data: this.inputData
      }))
    },
    handleInput() {
      var output = this.inputData.split(/[ ,.]/).slice(-50)
      this.currentWord = output[output.length -1]

      console.log(this.currentWord)
      if (this.currentWord === '') {
        this.acResults = []
        return
      }

      // if (event.code === 'Tab') {
      //   // set last word to the first word in our filter list
      //   if (this.acResults.length > 0) {
      //     output[output.length -2] = this.acResults[0].out
      //   }
      //   // console.log(output.join(' '))
      //   this.inputData = output.join(' ')
      //   this.currentWord = ''
      // } else {
      //   this.acResults = this.autoCorrects.filter(word => {
      //     // return all acutocorrect inout words that match the current word
      //     if (word.in.startsWith(this.currentWord)) return word
      //   })
      // }
    }
  },
  computed: {
    connection() {
      var connection = this.$store.getters.getConnection

      if (connection && connection.status === 'connected') {
        return connection
      } else {
        return false
      }

    },
    acStartsWith() {
      return null
    }
  },
  watch: {
    connection: function (newConnection) {
      console.log(newConnection)
      if (newConnection.status === 'connected') {
        newConnection.socket.addEventListener('message', (event) => {
          var messageObject = JSON.parse(event.data)
          if (messageObject.type === 'content' && messageObject.data) {
            console.log('new data recieved, replacing input value:', messageObject.data)
            this.inputData = messageObject.data
            this.scrollBottom()
          }
        })
        console.log('New connection')
      }
    }
  },
}
</script>

<style scoped>
textarea{
  /* display: block; */
  /* width: 100%; */
  height: 75vh;
  resize: none;
  border: none;
  outline: none;
  background: none;
  font-size: var(--user-text-size);
  color: var(--user-text-color);
}
#autocompleteResults {
  position: fixed;
  list-style: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
#autocompleteResults li {
  padding: 4px 8px;
}
</style>