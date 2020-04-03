<template>
  <div id="AddAutoCorrect">
    <p>Legg til</p>
    <input class="rounded input" v-model="formData.in" type="text" placeholder="Inn" name="in">
    <input class="rounded input" v-model="formData.out" type="text" placeholder="Ut" name="out">
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
      // this.$store.commit('addAc', )
      this.$store.commit('addAc', ac)
      // this.$emit('add', this.formData)

      // reset data
      this.formData.in = ''
      this.formData.out = ''
    }
  }
}
</script>

<style scoped>
#AddAutoCorrect {
  margin-top: 20px;
}
input {
  width: 96%;
  margin: 10px 0;
  padding: 2%;
  border: 1px solid #eee;
  box-sizing: content-box;
}
</style>