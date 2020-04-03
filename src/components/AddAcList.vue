<template>
  <div id="AddAcList">
    <h3>Legg til autokorrekturliste</h3>
    <input class="rounded input" v-model="formData.name" placeholder="Navn">
    <input class="rounded input" type="button" value="Legg til" :disabled="this.formData.name === ''" @click="add">
  </div>
</template>

<script>
export default {
  name: 'AddAcList',
  data () {
    return {
      formData: {
        name: ''
      }
    }
  },
  methods: {
    add() {
      this.$store.commit('addList', {name: this.formData.name})
      this.formData.name = ''
    }
  }
}
</script>

<style scoped>
</style>