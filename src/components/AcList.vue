<template>
  <div id="AcList">
    <div id="metaData">
      <h3>{{list.name}}</h3>
      <ul>
        <li>id: {{list.id}}</li>
        <li>oppdatert: {{list.lastUpdate | formatDate}}</li>
        <li>Antall autokorrekturer: {{list.acs.length}} <a @click="toggleAcTable">(vis)</a> </li>
      </ul>
    </div>
    <div id="actions">
      <h3>Handlinger</h3>
      <input class="rounded input" type="button" value="Exsporter" @click="exportList(list)">
      <input class="rounded input" type="button" value="Slett" @click="removeList(list)">
    </div>
    <div id="acs" v-bind:class="{ invisible: !showAcTable }">
        <AddAc v-bind:list="list" />
        <ul id="acs" v-if="list.acs.length > 0">
          <li v-for="ac in list.acs" :key="ac.id">{{ac.in}} - {{ac.out}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import AddAc from './AddAc'
import fileSaver from 'file-saver'
import moment from 'moment'

moment.locale('no')

export default {
  name: 'AcList',
  components: {
    AddAc
  },
  props: {
    list: Object
  },
  data: () => {
    return {
      showAcTable: false
    }
  },
  methods: {
    toggleAcTable () {
      this.showAcTable = !this.showAcTable
    },
    exportList (list) {
      var blob = new Blob([JSON.stringify(list)], {type: "application/json;charset=utf-8"})
      fileSaver.saveAs(blob, list.name + '.json')
    },
    removeList (list) {
      this.$store.commit('removelist', list)
    }
  },
  filters: {
    formatDate: (date) => {
      return moment(date).format('D MMMM YYYY HH:mm')
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
a:hover {
  text-decoration: underline;
}
#AcList {
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 50px;
}
#AcList div {
  padding: 20px 0;
}
#metaData {
  flex: auto;
}
#actions {
  flex: initial;
}
#acs {
  flex: 100%;
}
</style>