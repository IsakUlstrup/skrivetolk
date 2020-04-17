<template>
  <div id="MainInput" class="f p1">
    <!-- <textarea v-model="inputData" v-on:keyup.prevent="handleInput"></textarea> -->
    <textarea class="fa" v-bind:style="userStyle" v-model="inputData" rows="30" v-on:keyup.prevent="handleInput"></textarea>
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
  border-radius: 3px;
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