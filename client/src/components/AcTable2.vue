<template>
  <div class="AcTable2">
    <addAc v-bind:acList="acList"/>

    <transition-group
      class="list lsn sy"
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
    limit: Number,
    filter: String
  },
  data: () => {
    return {
      newAcData: {
        in: null,
        out: null
      }
    }
  },
  computed: {
    filteredAcs() {
      return this.acList.acs.filter(ac => {
        return ac.in.toLowerCase().includes(this.filter.toLowerCase()) || ac.out.toLowerCase().includes(this.filter.toLowerCase())
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
}
</style>