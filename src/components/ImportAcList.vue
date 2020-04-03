<template>
  <div id="ImportAcList">
    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h3>Importer autokorrekturliste</h3>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="application/json" class="input-file">
            <p v-if="isInitial">
              Trekk filer hit<br> eller klikk for å velge fil
            </p>
            <p v-if="isSaving">
              Uploading {{ fileCount }} files...
            </p>
        </div>
      </form>
  </div>
</template>

<script>
// import AcList from './AcList'

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    name: 'ImportAcList',
    components: {
      // AcList
    },
    data() {
      return {
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'acList',
        uploadData: {}
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
        this.uploadedFiles = []
        this.uploadError = null
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
        this.save(formData)
        this.reset()
      }
    },
    mounted() {
      this.reset();
    },
  }
</script>

<style scoped>
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>