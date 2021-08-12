<template>
  <v-container fluid>
    <v-card elevation="10">
      <v-card-title>
        DANH SÁCH ĐẶT BÀN
      </v-card-title>
      <v-data-table class="elevation-1"
                    :headers="headers"
                    :items="listBooking"
                    :items-per-page="5"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.bookingId">
            <td>{{ item.bookingId }}</td>
            <td>{{ item.deposit }}</td>
            <td>{{ item.moneyPay }}</td>
            <td :style="styleColorStatus(item.bookingStatus)">{{ item.bookingStatus }}</td>
            <td>{{ item.bookingTime }}</td>
            <td>{{ item.refund }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td :style="styleColorConfirm(item.confirmBooking)">{{ confirmBookingChange(item.confirmBooking) }}</td>
            <td >
              <v-btn
                  color="success"
                  v-if="item.confirmBooking === 1"
                  disabled
              >
                Xác nhận
              </v-btn>
              <v-btn
                  color="success"
                  @click="handleConfirmBooking(item.bookingId)"
                  v-else
              >
                Xác nhận
              </v-btn>
            </td>
            <td>
              <router-link :to="{name:'booking-detail', params:{bookingId:item.bookingId}}" tag="div">
                <v-btn
                    color="info"
                    dark
                >
                  <v-icon dark>
                    mdi-clipboard-edit-outline
                  </v-icon>
                </v-btn>
              </router-link>

            </td>
          </tr>
          </tbody>

        </template>

      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminBooking",
  data() {
    return {
      headers: [
        {text: 'Mã Đặt Bàn', value: 'bookingId'},
        {text: 'Tiền Đặt Cọc', value: 'deposit'},
        {text: 'Tiền Đã Thanh Toán', value: 'moneyPay'},
        {text: 'Trạng Thái', value: 'bookingStatus'},
        {text: 'Thời Gian Đặt Bàn', value: 'bookingTime'},
        {text: 'Hoàn Tiền', value: 'refund'},
        {text: 'Email Khách Hàng', value: 'email'},
        {text: 'Số Điện Thoại', value: 'phoneNumber'},
        {text: 'Position', value: 'confirmBooking'},
        {text: 'Xác Nhận', value: 'actions', sortable: false},
        {text: 'Chi Tiết', value: 'actions', sortable: false},
      ],
    }
  },
  computed: {
    ...mapGetters({
      listBooking: 'getBookingTables',
    }),
  },

  methods: {
    ...mapActions({
      getListBookingTables: 'getBookingTables',
      confirmBooking: 'confirmCustomer'
    }),
    handleConfirmBooking(bookingId) {
      console.log('booking confirm : ', bookingId)
      this.confirmBooking(bookingId)
    }
    ,
    handleGetListBookingTables() {
      this.getListBookingTables()
    },
    confirmBookingChange(value) {
      if (value === 1) {
        return 'Khách đến cửa hàng'
      } else {
        return 'Khách chưa đến '
      }

    },
    styleColorConfirm(value) {
      if (value === 1) {
        return this.color = "color:blue"
      } else {
        return this.color = "color:red"
      }
    },
    styleColorStatus(status) {
      if (status === 'Chờ admin xác nhận') {
        return this.color = "color:black"
      } else if (status === 'Chưa thánh toán') {
        return this.color = 'color:green'
      } else if (status === 'Đã thanh toán') {
        return this.color = 'color:blue'
      } else if (status === 'Đã hủy') {
        return this.color = 'color:red'
      } else {
        return this.color = 'color:yellow'
      }
    }
  },
  created() {
    this.handleGetListBookingTables()
  }
}
</script>

<style scoped>
@import "../../../style/layout/content.css";

.v-dialog > * {
  width: 100%;
  background-color: #FAFAFA;
}

.elevation-1 tbody td {
  font-size: smaller !important;
}
</style>