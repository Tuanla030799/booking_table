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
            <td :style="setColorStatus(item.status)">{{item.status}}</td>
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
                  @click="handleCancelPayment(item.id)"
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
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import axios from "axios";
import {ACCESS_TOKEN_ADMIN} from "../../../constants";

export default {
  name: "AdminPaymentCustomer",
  data() {
    return {
      idPay: '',
      dialogAcceptPay: false,
      dialogCancelPay: false,
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
      base_url: process.env.VUE_APP_BASE_URL
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
    handleCancelPayment(id) {
      this.idPay = id
      this.dialogCancelPay = true
    },
    handleCloseAcceptPay() {
      this.dialogAcceptPay = false
    },
    handleCloseCancelPay() {
      this.dialogCancelPay = false
    },
    handleAcceptPay() {
      axios({
        method: 'POST',
        url: `${this.base_url}/api/admin/confirm-charging?id=${parseInt(this.idPay)}&status=${parseInt(1)}`,
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_ADMIN)}`,
        },
      }).then((response) => {
        console.log('log accept: ', response)
        if (response.status === 200) {
          alert(response.data.message)
          this.handleGetPaymentForCustomer()
        }
      }).catch((error) => {
        alert(error.response.data.message)
        this.handleGetPaymentForCustomer()
      })
      this.dialogAcceptPay = false

    },
    setColorStatus(value) {
      if (value === 'Y/c xác nhận') {
        return this.color = "color:black"
      } else if (value === 'Thành công') {
        return this.color = "color:blue"
      } else if (value === 'Đã huỷ') {
        return this.color = 'color:red'
      } else {
        return this.color = 'color:red'
      }
    },
    handleCancelPay() {
      axios({
        method: 'POST',
        url: `${this.base_url}/api/admin/confirm-charging?id=${this.idPay}&status=2`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_ADMIN)}`,
        },
      }).then((response) => {
        console.log('log cancel: ', response)
        if (response.status === 200) {
          alert(response.data.message)
          this.handleGetPaymentForCustomer()
        }
      })
          .catch((error) => {
            alert(error.response.data.message)
            this.handleGetPaymentForCustomer()
          })
      this.dialogCancelPay = false
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