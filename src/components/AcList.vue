<template>
  <div id="AcList" class="mv1">
    <div id="metaData">
      <h3 class="h3">{{list.name}}</h3>
      <ul class="f fw lsn nw">
        <!-- <li>Id: {{list.id}}</li> -->
        <li class="mr3">Endret: {{list.lastUpdate | formatDate}}</li>
        <li class="mr3">{{list.acs.length}} autokorrekturer</li>
        <li class="mr3"><a class="l" @click="exportList(list)">Eksporter</a></li>
        <li class="mr3"><a class="l" @click="removeList(list)">Slett</a></li>
      </ul>
    </div>
    <div id="acs" class="mv2">
        <AcTable v-bind:acList="list" v-bind:limit="5" />
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
    return {}
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
      return moment(date).format('D MMMM YYYY HH:mm')
    }
  }
}
</script>

<style scoped>
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