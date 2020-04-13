<template>
  <div id="MainInput">
    <!-- <textarea v-model="inputData" v-on:keyup.prevent="handleInput"></textarea> -->
    <textarea v-model="inputData"></textarea>
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
    handleInput(event) {
      var output = this.inputData.split(/[ ,.]/).slice(-50)
      this.currentWord = output[output.length -1]

      if (this.currentWord === '') {
        this.acResults = []
        return
      }

      if (event.code === 'Tab') {
        // set last word to the first word in our filter list
        if (this.acResults.length > 0) {
          output[output.length -2] = this.acResults[0].out
        }
        // console.log(output.join(' '))
        this.inputData = output.join(' ')
        this.currentWord = ''
      } else {
        this.acResults = this.autoCorrects.filter(word => {
          // return all acutocorrect inout words that match the current word
          if (word.in.startsWith(this.currentWord)) return word
        })
      }
    }
  }
}
</script>

<style scoped>
textarea{
  width: 94%;
  height: 80vh;
  padding: 3%;
  resize: none;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 3px;
  font-size: 18px;
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