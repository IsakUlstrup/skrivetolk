<template>
  <form class="ImportAcList" enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
    <input
      type="button"
      class="p3 i br3"
      value="↑"
    >
    <input
      type="file"
      multiple
      :disabled="isSaving"
      @change="filesChange('acList', $event.target.files)"
      accept="application/json" class="input-file"
    >
  </form>
</template>

<script>
// import AcList from './AcList'
// TODO: handle multiple files

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    name: 'ImportAcList',
    components: {
      // AcList
    },
    data() {
      return {
        uploadError: null,
        currentStatus: null
      }
    },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      }
    },
    methods: {
      reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL
        this.uploadError = null
      },
      save2(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING

        formData.getAll('acList').forEach(list => {
          const fReader = new FileReader()
          fReader.onload = () => {
            try {
              var listData = JSON.parse(fReader.result)
            } catch(error) {
              console.log(`JSON parse error: ${error}\n\tfile: ${list.name}`)
              return
            }
            this.$store.commit('addList', listData)
          }
          fReader.readAsText(list)
        })
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING

        const fReader = new FileReader()
        fReader.onload = () => {
          this.uploadData = JSON.parse(fReader.result)
          this.$store.commit('addList', this.uploadData)
        }

        fReader.readAsText(formData.getAll('acList')[0])
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        // save it
        this.save2(formData)
        this.reset()
      }
    },
    mounted() {
      this.reset();
    },
  }
</script>

<style scoped>
.ImportAcList {
  position: relative;
  overflow: hidden;
  display: inline-block;
}
input[type=file] {
  font-size: 999px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
/* .dropbox {
    outline: 2px solid grey;
    min-height: 50px;
    position: relative;
    cursor: pointer;
  } */

  /* .input-file {
    opacity: 0;
    height: 200px;
    position: absolute;
    cursor: pointer;
  } */

  /* .dropbox:hover {
    background: rgb(134, 134, 134);
  } */

  /* .dropbox p {
    text-align: center;
  } */
</style>