<template>
  <div id="AcTable">
    <div id="actions">
      <input id="filter" v-model="filter" class="input rounded" type="text" placeholder="filter">
      <input v-model="newAcData.in" class="input rounded" type="text" placeholder="Inn">
      <input v-model="newAcData.out" class="input rounded" type="text" placeholder="Ut">
      <input class="input rounded" type="button" value="Legg til ny" @click="addAc">
    </div>
    <table v-if="acList.acs.length > 0">
      <tr>
        <!-- <th>id</th> -->
        <th @click="sort">Inn</th>
        <th>Ut</th>
        <!-- <th>Handlinger</th> -->
      </tr>
      <tr v-for="ac in filteredAcs.slice(0, limit)" :key="ac.id" >
        <!-- <td>{{ ac.id }}</td> -->
        <td>{{ ac.in }}</td>
        <td>{{ ac.out }}</td>
        <aside class="invisible">
          <a href="">✏️</a>
          <a href="">🗑️</a>
          </aside>
        <!-- <td>
          <input class="input rounded" type="button" value="Endre" @click="editAc(ac.id)">
          <input class="input rounded" type="button" value="Slett">
        </td> -->
      </tr>
    </table>
    <div v-if="filteredAcs.length - limit > 0">
      {{ filteredAcs.length - limit }} flere autokorrekturer
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcTable',
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
    },
    editAc(id) {
      // var element = this.acs[index]
      console.log('changing ', id)
    }
  }
}
</script>

<style scoped>
table, td, th {
  /* border: 1px solid; */
  text-align: center;
}
tr:nth-child(odd) {
  background: #f6f6f6;
}
tr:hover {
  background: #efefef;
}
tr:hover aside {
  display: block;
}
tr aside {
  position: absolute;
  margin-left: -50px;
}
tr aside a {
  text-decoration: none;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}
td, th {
  padding: 10px;
}
#actions {
  display: flex;
  flex-wrap: wrap;
}
#actions input {
  flex: auto;
}
#actions #filter {
  flex: 100%;
}
</style>