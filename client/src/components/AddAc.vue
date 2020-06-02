<template>
  <div class="AddAc br2 f m3"
  v-bind:class="{ highlight: active }"
  >
    <input
      class="input p3 fa"
      type="text"
      placeholder="inn"
      autocomplete=off
      name="newAc.in"
      v-model="formData.in"
      @focus="activate"
      @blur="deactivate"
    >

    <input
      class="input p3 fa"
      type="text"
      placeholder="Ut"
      autocomplete=off
      name="newAc.out"
      v-model="formData.out"
      @focus="activate"
      @blur="deactivate"
    >
    <a
      class="p3 fi"
      @click="add"
      tabindex="-1"
    >+</a>
  </div>
</template>

<script>
export default {
  name: 'AddAc',
  props:{
    acList: Object
  },
  data () {
    return {
      active: false,
      formData: {
        in: '',
        out: ''
      }
    }
  },
  methods: {
    add() {
      // console.log(this.list.id)
      var ac = {
        in: this.formData.in,
        out: this.formData.out,
        listId: this.acList.id
      }
      if (this.formData.in !== '' && this.formData.out !== '') {
        // add ac to store
        this.$store.commit('addAc', ac)
        // reset data
        this.formData.in = ''
        this.formData.out = ''
      }
    },
    activate() {
      this.active = true
    },
    deactivate() {
      this.active = false
    }
  }
}
</script>

<style scoped>
.AddAc {
  border: 1px solid #333;
  transition: all 0.4s ease-out;
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
.highlight {
  background: #222;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
  transform: scale(1.04);
  border: 3px solid var(--user-highlight-color);
}
a {
  color: #555;
  text-decoration: none;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
}
a:hover {
  color: white;
}
</style>