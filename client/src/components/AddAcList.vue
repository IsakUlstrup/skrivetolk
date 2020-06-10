<template>
  <input class="p3 br3 mr3 i" type="button" @click="add('Liste uten navn')" value="+">
</template>

<script>
export default {
  name: 'AddAcList',
  methods: {
    add(name) {
      this.$store.commit('addList', {name})
    }
  }
}
</script>

<style scoped>
</style>