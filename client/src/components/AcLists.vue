<template>
  <div id="AcLists">
    <AcList v-bind:filter="filter" v-for="list in filteredAcLists" :key="list.id" v-bind:list="list" />
  </div>
</template>

<script>
import AcList from './AcList'

export default {
  name: 'AcLists',
  props: {
    filter: String
  },
  components: {
    AcList
  },
  computed: {
    acLists () {
      // return this.$store.state.autoCorrectLists
      return this.$store.getters.acLists
    },
    filteredAcLists() {
      // return this.acLists
      if (this.filter === '') {
        return this.acLists
      }
      // filter lists
      return this.acLists.filter(list => {
        var filteredAcs = list.acs.filter(ac => {
          return ac.in.toLowerCase().includes(this.filter.toLowerCase()) || ac.out.toLowerCase().includes(this.filter.toLowerCase())
        })
        return list.name.toLowerCase().includes(this.filter.toLowerCase()) || filteredAcs.length > 0
      })
    }
  }
}
</script>

<style scoped>
</style>