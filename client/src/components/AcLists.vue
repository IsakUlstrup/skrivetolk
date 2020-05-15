<template>
  <div id="AcLists">
    <AcList v-for="list in acLists" :key="list.id" v-bind:list="list" />
  </div>
</template>

<script>
import AcList from './AcList'

export default {
  name: 'AcLists',
  components: {
    AcList
  },
  computed: {
    acLists () {
      // return this.$store.state.autoCorrectLists
      return this.$store.getters.acLists
    }
  }
}
</script>

<style scoped>
</style>