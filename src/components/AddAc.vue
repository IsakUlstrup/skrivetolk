<template>
  <div id="AddAutoCorrect">
    <strong>Legg til</strong>
    <br>
    <input class="rounded input" v-model="formData.in" type="text" placeholder="Inn" name="in" v-on:keyup.enter="add">
    <input class="rounded input" v-model="formData.out" type="text" placeholder="Ut" name="out" v-on:keyup.enter="add">
    <input class="rounded input" type="button" value="Legg Til" :disabled="this.formData.in === '' || this.formData.out === ''" @click="add">
  </div>
</template>

<script>
export default {
  name: 'AddAutoCorrect',
  props:{
    list: Object
  },
  data () {
    return {
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
        listId: this.list.id
      }
      if (this.formData.in !== '' && this.formData.out !== '') {
        // add ac to store
        this.$store.commit('addAc', ac)
        // reset data
        this.formData.in = ''
        this.formData.out = ''
      }
    }
  }
}
</script>

<style scoped>
</style>