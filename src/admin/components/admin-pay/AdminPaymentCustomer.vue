<template>
  <v-container>
    <v-card elevation="10">
      <v-card-title>
        Danh sách yêu cầu nạp tiền
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="paymentDetail"
          :items-per-page="5"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.code">
            <td>{{ item.id }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.money }}</td>
            <td>{{ item.time }}</td>
            <td>
              <v-btn
                  v-bind:disabled="item.status !== 'Y/c xác nhận'"
                  color="info"
                  @click="handlePay(item.id)"
              >
                Xác Nhận
                <v-icon dark class="ml-4">
                  mdi-check-circle-outline
                </v-icon>

              </v-btn>
            </td>
            <td>
              <v-btn
                  v-bind:disabled="item.status !== 'Y/c xác nhận'"
                  color="error"
                  @click="handleCanclePayment(item.id)"
              >
                Hủy
                <v-icon dark class="ml-3">
                  mdi-cancel
                </v-icon>

              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialogAcceptPay" max-width="250px">
      <v-card>
        <v-card-text>
          <h3 class="align-content-center">Xác nhận nạp tiền !</h3>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info"
                 @click="handleAcceptPay"
          >
            <v-icon>
              mdi-check-circle-outline
            </v-icon>
            Nạp tiền
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error"
                 @click="handleCloseAcceptPay"
                 class="mr-3"
          >
            <v-icon>
              mdi-cancel
            </v-icon>
            Hủy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogCancelPay" max-width="250px">
      <v-card>
        <v-card-text>
          <h3 class="align-content-center">Xác nhận hủy nạp !</h3>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info"
                 @click="handleCancelPay"
          >
            <v-icon>
              mdi-check-circle-outline
            </v-icon>
            Xác nhận
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error"
                 @click="handleCloseCancelPay"
                 class="mr-3"
          >
            <v-icon>
              mdi-cancel
            </v-icon>
            Hủy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
        v-model="snackbar.status"
        top
        right
        color="success"
        absolute
        shaped
        :timeout="5000"
        transition="fab-transition"
        vertical
    >
      <h3>Nạp tiền thành công !</h3>

      <template v-slot:action="{ attrs }">
        <v-btn
            dark
            outlined
            v-bind="attrs"
            @click="snackbar.status = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
        v-model="snackbarCancel.status"
        top
        right
        color="success"
        :timeout="5000"
    >
      Hủy nạp tiền thành công !

      <template v-slot:action="{ attrs }">
        <v-btn
            dark
            text
            v-bind="attrs"
            @click="snackbarCancel.status = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AdminPaymentCustomer",
  data() {
    return {
      idPay: '',
      dialogAcceptPay: false,
      dialogCancelPay: false,
      snackbar: {status: false, text: '', color: ''},
      snackbarCancel: {status: false, text: '', color: ''},
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Mã nạp', value: 'code'},
        {text: 'Số điện thoại', value: 'phoneNumber'},
        {text: 'Trạng thái', value: 'status'},
        {text: 'Số tiền', value: 'money'},
        {text: 'Thời gian', value: 'time'},
        {text: 'Nạp Tiền', value: 'actions', sort: false},
        {text: 'Hủy Nạp', value: 'actions', sort: false},
      ],
    }
  },
  methods: {
    ...mapActions({
      getPaymentDetail: 'getListPayment',
      acceptPayForCustomer: 'acceptPay',
      cancelPayForCustomer: 'cancelPay'
    }),
    handleGetPaymentForCustomer() {
      this.getPaymentDetail()
    },
    handlePay(id) {
      this.idPay = id
      this.dialogAcceptPay = true

    },
    handleCanclePayment(id) {
      this.idPay = id
      this.dialogCancelPay = true
    },
    handleCloseAcceptPay() {
      this.dialogAcceptPay = false
    },
    handleCloseCancelPay() {
      this.dialogCancelPay = true
    },
    handleAcceptPay() {
      this.acceptPayForCustomer(this.idPay)
      this.dialogAcceptPay = false
      this.snackbar.status = true

    },
    handleCancelPay() {
      this.cancelPayForCustomer(this.idPay)
      this.dialogCancelPay = false
      this.snackbarCancel = true
    }
  },
  computed: {
    ...mapGetters({
      paymentDetail: 'getListPay'
    })
  },
  created() {
    this.handleGetPaymentForCustomer()
  }
}
</script>

<style scoped>

</style>