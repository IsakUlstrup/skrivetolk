<template>
  <div id="BogusGenerator">
    <h3>Generer bogus</h3>
    <input type="number" placeholder="Antall..." v-model="bogusAmount">
    <input type="button" value="generer" @click="this.$emit(add)">
  </div>
</template>

<script>
export default {
  name: 'BogusGenerator',
  data () {
    return {
      bogusAmount: null
    }
  },
  methods: {
    generate() {
      for (let index = 0; index < this.bogusAmount; index++) {
        // TODO: check for duplicates
        var bogus = {
          in: Math.random().toString(36).substr(2, 5),
          out: Math.random().toString(36).substr(2, 5)
        }
        this.$emit('addBogus', bogus)
        // console.log(bogus)
      }
    }
  }
}
</script>

<style scoped>

</style>