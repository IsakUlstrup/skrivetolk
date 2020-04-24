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

    <!-- <ul > -->
      <transition-group
      class="list w100 lsn"
      v-if="acList.acs.length > 0"
      name="list"
      tag="ul">
        <li
        class="f fw br2 m3"
        v-for="ac in filteredAcs.slice(0, limit)"
        :key="ac.id"
        >
          <input class="p3 i fa" type="text" name="ac.in" :disabled="!ac.editMode" v-model="ac.in">
          <input class="p3 i fa" type="text" name="ac.out" :disabled="!ac.editMode" v-model="ac.out">
          <a class="l toggleDetails" @click="editAc(ac)">⋮</a>
          <div class="details f p3" v-if="ac.editMode">
            <a class="l tdn mr3" v-if="!ac.editMode" @click="editAc(ac)">✏️</a>
            <a class="l tdn mr3" v-else @click="editAc(ac)">💾</a>

            <a class="l tdn" @click="deleteAc(acList.id, ac.id)">🗑️</a>
          </div>
        </li>
        </transition-group>
    <!-- </ul> -->

    <div class="mv3" v-if="filteredAcs.length - limit > 0">
        ({{ filteredAcs.length - limit }} flere)
      </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AcTable2',
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
    toggleDetails(ac) {
      // event.path[1].classList.toggle("showDetails")
      // console.log(event)
      ac.details = ! ac.details
    },
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
    editAc(obj) {
      // disable edit mode for other objects
      this.acList.acs.forEach(ac => {
        if (ac.id !== obj.id) {
          ac.editMode = false
        }
      })

      if (!obj.editMode) {
        // enable edit mode
        this.$set(obj, 'editMode', true);
      } else {
        // disable edit mode, save
        this.$set(obj, 'editMode', undefined)
        // var data = {
        //   listId: this.acList.id,
        //   id: obj.id,
        //   in: obj.in,
        //   out: obj.out
        // }
        this.acList.lastUpdate = moment().format()
        this.$store.commit('saveState')
      }
    },
    deleteAc(listId, acId) {
      console.log('Deleting: ', listId, ' - ', acId)
      this.$store.commit('deleteAc', {listId, acId})
    }
  }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all .4s ease-out;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}


ul li {
  transition: all 0.4s ease-out;
}
ul li:hover {
  background: #222;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  transform: scale(1.04);
}
input:disabled {
  border: 1px solid #282828;
}
.details {
  flex: 100%;
}
.toggleDetails {
  display: block;
  flex: 1;
}
.list {
  max-height: 300px;
  overflow-y: scroll;
}
.i:disabled {
  border: none;
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