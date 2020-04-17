<template>
  <div id="AcTable">
    <div id="actions">
      <input v-model="filter" class="p3 mb2 w100 br3 b" type="text" placeholder="filter">
      <!-- <input v-model="newAcData.in" class="input rounded" type="text" placeholder="Inn">
      <input v-model="newAcData.out" class="input rounded" type="text" placeholder="Ut">
      <input class="input rounded" type="button" value="Legg til ny" @click="addAc"> -->
    </div>
    <table class="w100 ct" v-if="acList.acs.length > 0">
      <thead class="mb3">
        <tr>
          <!-- <th>id</th> -->
          <th @click="sort">Inn</th>
          <th>Ut</th>
          <!-- <th>Rediger</th> -->
        </tr>
      </thead>
      <!-- <tr>
        <td><input v-model="newAcData.in" class="rounded" type="text" placeholder="Inn"></td>
        <td><input v-model="newAcData.out" class="rounded" type="text" placeholder="Ut"></td>
        <td><a @click="addAc">➕</a></td>
      </tr> -->
      <tbody>
        <tr class="bb" v-for="ac in filteredAcs.slice(0, limit)" :key="ac.id" @dblclick="editAc(ac.id, $event)">
          <!-- <td>{{ ac.id }}</td> -->
          <td><input class="p3 ct i" type="text" name="ac.in" disabled :value="ac.in"></td>
          <td><input class="p3 ct i" type="text" name="ac.out" disabled :value="ac.out"></td>
          <!-- <td>
            <a class="l tdn" @click="editAc(ac.id, $event)">✏️</a>
            <a class="l tdn" @click="deleteAc(acList.id, ac.id)">🗑️</a>
          </td> -->
        </tr>
      </tbody>
    </table>
    <div class="mv3" v-if="filteredAcs.length - limit > 0">
        ({{ filteredAcs.length - limit }} flere)
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
    editAc(id, event) {
      // var element = this.acs[index]
      console.log('changing ', id, ' event: ', event)
    },
    deleteAc(listId, acId) {
      console.log('Deleting: ', listId, ' - ', acId)
      this.$store.commit('deleteAc', {listId, acId})
    }
  }
}
</script>

<style scoped>
* {
  color: #aaa;
  border-color: #111;
}
tbody tr:hover {
  background: #222;
}
tbody tr:last-child {
  border-bottom: none;
}
/* #AcTable {
  border: 1px solid red;
} */
/* table {
  border: 1px solid red;
} */
/* #AcTable table {
  color: white;
}
table, td, th {
  border: 1px solid;
  text-align: center;
}
table .field {
  width: 100%;
  height: 100%;
  padding: 5px;
  background: none;
  font-size: 14px;
  border: 1px solid red;
}
table .field:disabled {
  border: none;
  text-align: center;
}
tr:nth-child(odd) {
  border-bottom: 1px solid #333;
} */
/* tr:hover {
  background: #272525;
} */
/* tr input {
  width: 100%;
  padding: 5px;
  background: none;
  border: none;
} */
/* tr input:hover {
  border: 1px solid #999;
} */
/* tr:hover aside {
  display: block;
} */
/* tr aside {
  position: absolute;
  margin-left: -50px;
} */
/* tr a {
  text-decoration: none;
  cursor: pointer;
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
  white-space: nowrap;
}
#actions input {
  flex: auto;
}
#actions .filter {
  flex: 100%;
} */
</style>