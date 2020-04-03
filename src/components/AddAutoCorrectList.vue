<template>
  <div id="AddAutoCorrectList">
    <h3>Legg til autokorrekturliste</h3>
    <input class="rounded" v-model="formData.name" placeholder="Navn">
    <input class="rounded" type="button" value="Legg til" :disabled="this.formData.name === ''" @click="add">
  </div>
</template>

<script>
export default {
  name: 'AddAutoCorrectList',
  data () {
    return {
      formData: {
        name: ''
      }
    }
  },
  methods: {
    add() {
      this.$store.commit('addList', this.formData.name)
      this.formData.name = ''
    }
  }
}
</script>

<style scoped>
input {
  width: 96%;
  margin: 10px 0;
  padding: 2%;
  border: 1px solid #eee;
  box-sizing: content-box;
}
</style>