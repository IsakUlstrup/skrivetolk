<template>
  <div class="AcTable2">
    <!-- <div class="actions">
      <div class="f mb3">
        <input v-model="newAcData.in" class="p3 b br3 w100 mr3" type="text" placeholder="Inn">
        <input v-model="newAcData.out" class="p3 b br3 w100 mr3" type="text" placeholder="Ut">
        <input type="button" class="p3 b br3 w100" value="Legg til ny" @click="addAc">
      </div>

      <input v-model="filter" class="p3 mb2 w100 br3 b" type="text" placeholder="filter">
    </div> -->
    <addAc v-bind:acList="acList"/>

    <transition-group
      class="list w100 lsn"
      v-if="acList.acs.length > 0"
      name="list"
      tag="ul">
        <Ac
          v-for="ac in filteredAcs.slice(0, limit)"
          :key="ac.id"
          v-bind:acData="ac"
          v-bind:listId="acList.id"
        />
    </transition-group>

    <div class="mv3" v-if="filteredAcs.length - limit > 0">
        ({{ filteredAcs.length - limit }} flere)
      </div>
  </div>
</template>

<script>
import Ac from './Ac'
import AddAc from './AddAc'

export default {
  name: 'AcTable2',
  components: {
    Ac,
    AddAc
  },
  props: {
    acList: Object,
    limit: Number
  },
  data: () => {
    return {
      newAcData: {
        in: null,
        out: null
      },
      filter: ''
    }
  },
  computed: {
    filteredAcs() {
      return this.acList.acs.filter(ac => {
        return ac.in.includes(this.filter) || ac.out.includes(this.filter)
      })
    }
  },
  methods: {
    sort() {
      // console.log('sorting')
      this.acList.acs.sort(function(a, b) {
        var nameA = a.in.toUpperCase(); // ignore upper and lowercase
        var nameB = b.in.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    },
    addAc() {
      // console.log(this.list.id)
      var ac = {
        in: this.newAcData.in,
        out: this.newAcData.out,
        listId: this.acList.id
      }
      if (this.newAcData.in !== '' && this.newAcData.out !== '') {
        // add ac to store
        this.$store.commit('addAc', ac)
        // reset data
        this.newAcData.in = null
        this.newAcData.out = null
      }
    }
  }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all .2s ease-out;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
.list {
  max-height: 300px;
  overflow-y: scroll;
}
</style>