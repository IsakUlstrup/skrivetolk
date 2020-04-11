<template>
  <div id="AcList" class="rounded shadow">
    <div id="metaData">
      <h1>
        <input type="checkbox" name="enableList">
        {{list.name}}</h1>
      <ul>
        <!-- <li>Id: {{list.id}}</li> -->
        <li>Endret: {{list.lastUpdate | formatDate}}</li>
        <li>{{list.acs.length}} autokorrekturer</li>
        <li><a @click="exportList(list)">Eksporter</a></li>
        <li><a @click="removeList(list)">Slett</a></li>
      </ul>
    </div>
    <!-- <div id="actions">
      <h3>Handlinger</h3>
      <input class="rounded input" type="button" value="Eksporter" @click="exportList(list)">
      <input class="rounded input" type="button" value="Slett" @click="removeList(list)">
    </div> -->
    <!-- <div class="clearfix"></div> -->
    <div id="acs">
        <!-- <AddAc v-bind:acList="list" /> -->
        <AcTable v-bind:acList="list" v-bind:limit="5" />
        <!-- <ul id="acs" v-if="list.acs.length > 0">
          <li v-for="ac in list.acs" :key="ac.id">{{ac.in}} - {{ac.out}}</li>
        </ul> -->
    </div>
  </div>
</template>

<script>
// import AddAc from './AddAc'
import AcTable from './AcTable'
import fileSaver from 'file-saver'
import moment from 'moment'

moment.locale('no')

export default {
  name: 'AcList',
  components: {
    // AddAc,
    AcTable
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
  display: flex;
  margin-bottom: 30px;
}
ul li {
  margin-right: 20px;
}
h1 {
  margin-bottom: 50px;
}
a {
  text-decoration: underline;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
.clearfix {
  margin: 20px;
}
#AcList {
  padding: 30px;
  margin: 50px;
  white-space: nowrap;
}
</style>