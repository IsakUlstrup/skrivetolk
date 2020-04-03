<template>
  <div id="AutoCorrectLists">
    <h3>Autokorrekturlister</h3>
    <ul v-for="list in acLists" :key="list.id">
      <strong>{{ list.name }}</strong>
      <li>ID: {{ list.id }}</li>
      <li>Bruker: {{ list.author }}</li>
      <li>Antall autokorrekturer: {{ list.autoCorrects.length }}</li>
      <li>Oppdatert: {{list.lastUpdate}}</li>
      <input type="button" value="Exsporter" @click="exportList(list)">
      <input type="button" value="Slett" @click="removeList(list)">
      <AddAutoCorrect v-bind:list="list" />
    </ul>
  </div>
</template>

<script>
import fileSaver from 'file-saver'
import AddAutoCorrect from './AddAutoCorrect'

export default {
  name: 'AutoCorrectLists',
  components: {
    AddAutoCorrect
  },
  computed: {
    acLists () {
      return this.$store.state.autoCorrectLists
    }
  },
  methods: {
    exportList (list) {
      var blob = new Blob([JSON.stringify(list)], {type: "application/json;charset=utf-8"})
      fileSaver.saveAs(blob, list.name + '.json')
    },
    removeList (list) {
      this.$store.commit('removelist', list)
    }
  }
}
</script>

<style scoped>
ul {
  margin-bottom: 40px;
  list-style: none;
}
</style>