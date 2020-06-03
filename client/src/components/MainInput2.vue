<template>
  <div id="MainInput">
    <transition-group name="fade" class="textDisplay sy mv1 pv2" tag="div">
      <span
        v-for="text in textContent" :key="text.id"
      >{{text.word}} <br v-if="text.newLine"></span>
      <span :key="'currentWord'" class="temp">{{textInput}}</span>
      <span :key="'cursor'">_</span>
    </transition-group>

    <div>
      <input
        class="mv1 p2 br3 b w100 ct"
        type="text"
        name="Main input"
        v-on:keyup="handleInput"
        v-model="textInput"
      >
      <ul id="autocompleteResults" v-if="textInput != ''">
        <li v-for="ac in acResults.slice(0, 10)" :key="ac.id">
          {{ac.out}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

// timeout in seconds
const wordTimeout = 15

export default {
  name: 'MainInput2',
  data () {
    return {
      textContent: [],
      currentWord: '',
      textInput: '',
      uppercaseFlag: true
    }
  },
  methods: {
    addWord(data) {
      // push our new word, this will send over websocket in the future
      var wordObject = {
          word: data.word + ' ',
          newLine: (data.delimiter === 'newLine') ? true : false,
          id: uuidv4(),
          timestamp: moment().format(),
      }
      wordObject.timeout = setTimeout(() => {
        // console.log('word is old', wordObject.word)
        this.textContent = this.textContent.filter(text => {
          return text.id !== wordObject.id
        })
      }, wordTimeout * 1000)
      this.textContent.push(wordObject)
    },
    handleInput(event) {
      // console.log(event)

      if(this.uppercaseFlag === true) {
        this.textInput = this.textInput.charAt(0).toUpperCase() + this.textInput.slice(1)
      }

      // if input is empty, remove flag is true and we press backspace, delete last word
      if (event.key === 'Backspace' && this.textInput === '') {
        console.log('remove last word')
        this.textContent.pop()
        return
      }

      // only proceed if a complete word har been typed, this will have more delimiters in the future
      if (event.key !== ' ' && event.key !== 'Enter') {
        return
      }

      // set text delimiter, this should include new line in the future
      var delimiter = (event.key === ' ') ? ' ' : (event.key === 'Enter') ? 'newLine' : null;

      // remove trailing space from input, if delimiter is not newline
      if ( delimiter !== 'newLine') {
        this.textInput = this.textInput.slice(0, -1)
      }

      // set upper case flag if word ends with .
      if (this.textInput[this.textInput.length -1] === '.') {
        this.uppercaseFlag = true
      } else {
        this.uppercaseFlag = false
      }

      console.log(`New text: [${this.textInput}] delimiter: [${delimiter}] uppercaseFlag: ${this.uppercaseFlag}`)

      // push our new word, this will send over websocket in the future
      this.addWord({word: this.textInput, delimiter})
      this.textInput = ''
    }
  },
  computed: {
    acResults() {
      return this.$store.getters.filteredAcs(this.textInput) || []
    },
    connection() {
      var connection = this.$store.getters.getConnection

      if (connection && connection.status === 'connected') {
        return connection
      } else {
        return false
      }

    }
  },
  watch: {
    connection: function (newConnection) {
      return newConnection
      // console.log(newConnection)
      // if (newConnection.status === 'connected') {
      //   newConnection.socket.addEventListener('message', (event) => {
      //     var messageObject = JSON.parse(event.data)
      //     if (messageObject.type === 'content' && messageObject.data) {
      //       console.log('new data recieved, replacing input value:', messageObject.data)
      //       this.inputData = messageObject.data
      //       this.scrollBottom()
      //     }
      //   })
      //   console.log('New connection')
      // }
    }
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}



.textDisplay {
  height: 50vh;
  color: var(--user-text-color);
  font-size: var(--user-text-size);
}
.textDisplay span {
  padding-top: auto;
}
.temp {
  color: var(--user-highlight-color);
}
#autocompleteResults {
  position: absolute;
  list-style: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
#autocompleteResults li {
  padding: 4px 8px;
}
</style>