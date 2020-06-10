<template>
  <div id="ManageAcs">
    <div class="f mb2">
      <input v-model="filter" class="p3 i br3 fa mr3" type="text" placeholder="filter" name="acFilter">
      <AddAcList />
      <ImportAcList />
    </div>
    <AcLists v-bind:filter="filter" />
  </div>
</template>

<script>
import AcLists from '../AcLists'
import AddAcList from '../AddAcList'
import ImportAcList from '../ImportAcList'

export default {
  name: 'ManageAcs',
  data: () => {
    return {
      filter: ''
    }
  },
  components: {
    AcLists,
    AddAcList,
    ImportAcList
  }
}
</script>

<style scoped>
</style>