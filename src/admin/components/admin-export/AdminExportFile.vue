<template>
  <v-container fluid>
    <v-card max-width="900px" class="form-export">
      <v-card-title>Xuất File Báo Cáo</v-card-title>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="form-main"
      >
        <v-row>
          <v-col cols="6">
            <v-text-field
                v-model.number="year"
                :counter="10"
                label="Nhập năm xuất file báo cáo"
                class="ml-5"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
                v-model.lazy="fileType"
                :items="items"
                :rules="[v => !!v || 'File is required']"
                label="Chọn Định Dạng File"
                class="mr-5"
            ></v-select>

          </v-col>

        </v-row>
        <v-row>
          <v-col cols="6">
            <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Gửi email đến các admin khác ? "
                required
                class="ml-5"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">

          </v-col>

        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn
                :disabled="!valid"
                color="success"
                class="ml-5"
                @click="handleOpenDialogExport"
            >
              Xuất File
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
                color="error"
                class="mr-4"
                @click="reset"
            >
              Reset Form
            </v-btn>
          </v-col>

        </v-row>
      </v-form>
    </v-card>
    <v-dialog v-model="dialogAccept" max-width="300px">
      <v-card>
        <v-card-title>
          Xuất file báo cáo !
        </v-card-title>
        <v-card-actions>
          <v-btn color="error"
                 @click="handleExportFile">
            <v-icon>
              mdi-checkbox-marked-circle
            </v-icon>
            Xác nhận
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info"
                 @click="handleCloseExport">

            <v-icon>
              mdi-minus-circle
            </v-icon>
            Hủy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AdminExportFile",
  data: () => ({
    dialogAccept: false,
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
    handleOpenDialogExport() {
      this.dialogAccept = true;
    },
    handleCloseExport() {
      this.dialogAccept = false;
    },
    handleExportFile() {
      let year = this.year
      let fileType = this.fileType
      let confirmSendEmail = this.checkbox === true ? 'yes' : 'no'
      this.export({year: year, exportType: fileType, confirmSendEmail})
      this.dialogAccept = false
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
.form-export {
  margin: 100px 200px;
}

.form-main {
  background-color: #f5f5f0;
}
</style>