<template>
  <div id="AcList">
    <strong>{{list.name}}</strong>
    <ul>
      <li>id: {{list.id}}</li>
      <li>oppdatert: {{list.lastUpdate | formatDate}}</li>
      <li>
        Autokorrekturer: {{list.acs.length}}
        <ul id="acs" v-if="list.acs.length > 0">
          <!-- v-for="item in items" :key="item.message" -->
          <li v-for="ac in list.acs" :key="ac.id">{{ac.in}} - {{ac.out}}</li>
        </ul>
      </li>
      <AddAc v-bind:list="list" />
      <h3>Handlinger</h3>
      <input class="rounded input" type="button" value="Exsporter" @click="exportList(list)">
      <input class="rounded input" type="button" value="Slett" @click="removeList(list)">
    </ul>
    <!-- {{list}} -->
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

<style>
ul {
  list-style: none;
}
#acs {
  margin: 10px;
}

</style>