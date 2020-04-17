<template>
  <div id="AddAcList" class="mv2">
    <h3 class="h3">Legg til liste</h3>
    <input class="i p3 b br3" v-model="formData.name" placeholder="Navn">
    <input class="mh3 i p3" type="button" value="Legg til" :disabled="this.formData.name === ''" @click="add">
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