<template>
  <li
    class="f br2 m3 ac"
    v-bind:class="{ highlight: active }"
  >
    <input
      class="acIn i input p3 fa"
      type="text"
      name="ac.in"
      v-model="acData.in"
      @keyup="save"
      @focus="activate"
      @blur="deactivate"
    >

    <input
      class="acOut i input p3 fa"
      type="text"
      name="ac.out"
      v-model="acData.out"
      @keyup="save"
      @focus="activate"
      @blur="deactivate"
    >
    <a
      class="p3"
      @click="deleteAc"
      tabindex="-1"
    >✕</a>
  </li>
</template>

<script>
export default {
  name: 'Ac',
  props: {
    acData: Object,
    listId: String
  },
  data: () => {
    return {
      active: false
    }
  },
  methods: {
    activate() {
      // console.log(this.$refs.li)
      this.active = true
    },
    deactivate() {
      this.active = false
    },
    save() {
      // TODO: update date for last list change
      this.$store.commit('saveState')
    },
    deleteAc() {
      this.$store.commit(
        'deleteAc',
        {
          listId: this.listId,
          acId: this.acData.id,
      })
    }
  }

}
</script>

<style scoped>
.ac {
  transition: all 0.4s ease-out;
  border: 1px solid #333;
  overflow: hidden;
}
.ac:hover {
  background: #222;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.ac input {
  border: 1px solid #151515;
}
.input {
  outline: none;
}
.input:focus {
  /* border: 1px solid rgb(247, 5, 255) */
  box-shadow: 0 0 6px rgba(15, 154, 189, 0.8) inset;
}
.acIn {
  border-radius: 3px 0 0 3px;
}
.acOut {
  border-radius: 0 3px 3px 0;
}
.highlight {
  background: #222;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  transform: scale(1.03);
  border: 3px solid rgb(15, 154, 189);
}
a {
  color: #555;
  flex: 1 0 fit-content;
  text-decoration: none;
  display: block;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
}
a:hover {
  color: white;
}
</style>