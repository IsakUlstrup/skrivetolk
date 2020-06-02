<template>
  <div id="ManageAcs">
    <AcLists />
    <div id="actions">
      <AddAcList />
      <!-- <ImportAcList /> -->
    </div>
  </div>
</template>

<script>
import AcLists from '../AcLists'
import AddAcList from '../AddAcList'
// import ImportAcList from '../ImportAcList'

export default {
  name: 'ManageAcs',
  components: {
    AcLists,
    AddAcList,
    // ImportAcList
  }
}
</script>

<style scoped>
</style>