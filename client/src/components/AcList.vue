<template>
  <div id="AcList" class="mb1 shadow">
    <h3 class="h3">{{list.name}}</h3>
    <div id="metaData">
        <ul class="f fw lsn">
          <!-- <li>Id: {{list.id}}</li> -->
          <!-- <li><input class="mr3" type="checkbox" name="enableList"></li> -->
          <li class="mr3">{{list.lastUpdate | formatDate}}</li>
          <li class="mr3">{{list.acs.length}} ak</li>
          <li><a class="l mr3" @click="exportList(list)">Eksporter</a></li>
          <li><a class="l" @click="removeList(list)">Slett</a></li>
        </ul>
      </div>
      <div id="acs" class="mt2">
        <AcTable2 v-bind:filter="filter" v-bind:acList="list" v-bind:limit="30" />
      </div>
  </div>
</template>

<script>
// import AddAc from './AddAc'
// import AcTable from './AcTable'
// import GradientBorderPanel from './GradientBorderPanel'
import AcTable2 from './AcTable2'
import fileSaver from 'file-saver'
import moment from 'moment'

moment.locale('no')

export default {
  name: 'AcList',
  components: {
    // AddAc,
    AcTable2
    // AcTable2
    // GradientBorderPanel
  },
  props: {
    list: Object,
    filter: String
  },
  methods: {
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
      return moment(date).format('DD.MM.YY HH:mm')
    }
  }
}
</script>

<style scoped>
#AcList {
  background: #282828;
  border-radius: 5px;
  padding: 20px;
}
#metaData {
  font-weight: lighter;
  color: #aaa;
  font-size: 10pt;
}
.l:hover {
  color: white;
}
li aside {
  position: absolute;
  color: #aaa;
}
li aside ul {
  border-color: #111;
  background: #333;
}
li aside ul a {
  border-color: #111;
}
li aside ul a:hover {
  background: #222;
}

/* ul li {
} */
/* ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
ul li {
  margin-right: 20px;
}
a {
  text-decoration: underline;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
#AcList {
  white-space: nowrap;
} */
</style>