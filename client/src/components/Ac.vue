<template>
  <li
    class="f br2 ac m3"
    v-bind:class="{ highlight: active }"
  >
    <input
      class="acIn input p3 fa"
      type="text"
      autocomplete=off
      name="ac.in"
      v-model="acData.in"
      @keyup="save"
      @focus="activate"
      @blur="deactivate"
    >

    <input
      class="acOut input p3 fa"
      type="text"
      autocomplete=off
      name="ac.out"
      v-model="acData.out"
      @keyup="save"
      @focus="activate"
      @blur="deactivate"
    >
    <a
      class="p3 fi"
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
  /* overflow: hidden; */
}
.ac:hover {
  background: #222;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.input {
  outline: none;
  border: none;
  overflow: hidden;
  border-right: 1px solid #333;
}
.input:focus {
  box-shadow: 0 0 6px var(--user-highlight-color) inset;
}
.acIn {
  border-radius: 3px 0 0 3px;
}
.acOut {
  border-radius: 0 3px 3px 0;
}
.highlight {
  background: #222;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
  transform: scale(1.04);
  border: 3px solid var(--user-highlight-color);
}
a {
  color: #555;
  /* flex: 1 0 30px; */
  text-decoration: none;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
}
a:hover {
  color: white;
}
</style>