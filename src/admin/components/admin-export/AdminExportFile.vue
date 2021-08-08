<template>
  <v-container fluid>
    <v-card max-width="900px" class="form-export">
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
        <v-text-field
            v-model.number="year"
            :counter="10"
            label="Nhập năm xuất file báo cáo"
        ></v-text-field>
        <v-select
            v-model.lazy="fileType"
            :items="items"
            :rules="[v => !!v || 'File is required']"
            label="Chọn Định Dạng File"
        ></v-select>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Gửi email đến các admin khác ? "
            required
        ></v-checkbox>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="handleExportFile"
        >
          Xuất File
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
          Reset Form
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AdminExportFile",
  data: () => ({
    valid: true,
    year: 0,
    fileType: '',
    items: [
      'pdf',
      'excel'
    ],
    checkbox: false,
  }),

  methods: {
    ...mapActions({
      export: 'exportFile'
    }),
    handleExportFile() {
      let year = this.year
      let fileType = this.fileType
      let confirmSendEmail = this.checkbox === true ? 'yes' : 'no'

      this.export({year: year, exportType: fileType, confirmSendEmail})
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>
.form-export{
  margin: 50px 100px;
}
</style>