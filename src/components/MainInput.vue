<template>
  <div id="MainInput" class="f p1">
    <!-- <textarea v-model="inputData" v-on:keyup.prevent="handleInput"></textarea> -->
    <textarea class="fa" v-bind:style="userStyle" v-model="inputData" rows="30" v-on:keyup.prevent="handleInput2"></textarea>
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
      inputData: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus',
      acResults: [],
      currentWord: ''
    }
  },
  methods: {
    handleInput2() {
      // console.log(this.$store.getters.getConnection)
      this.connection.socket.send(JSON.stringify({
        header: 'content',
        data: this.inputData
        }))
      // if (this.connection) {
      //   console.log(this.connection)
      //   // this.connection.send(this.inputData)
      // }
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
      if (connection) {
        return connection
      } else {
        return false
      }
    },
    userStyle() {
      return {
        color: this.$store.getters.color('textColor'),
        'font-size': this.$store.getters.userPreference('textSize')
      }
    },
    acStartsWith() {
      return null
    }
  }
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