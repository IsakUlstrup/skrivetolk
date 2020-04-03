<template>
  <div id="ManageAutoCorrects">
    <AutoCorrectLists />
    <AddAutoCorrectList />
  </div>
</template>

<script>
import AutoCorrectLists from '../AutoCorrectLists'
import AddAutoCorrectList from '../AddAutoCorrectList'

export default {
  name: 'ManageAutoCorrects',
  components: {
    AutoCorrectLists,
    AddAutoCorrectList
  }
}
</script>

<style scoped>
#ManageAutoCorrects {
  background: white;
  margin: 5%;
}
</style>