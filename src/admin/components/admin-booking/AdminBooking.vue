<template>
  <v-container class="booking my-5" fluid>
    <v-card elevation="10">
      <v-card-title>
        DANH SÁCH ĐẶT BÀN
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="listBooking"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.bookingId">
            <td>{{ item.bookingId }}</td>
            <td>{{ item.deposit }}</td>
            <td>{{ item.moneyPay }}</td>
            <td>{{ item.bookingStatus }}</td>
            <td>{{ item.bookingTime }}</td>
            <td>{{ item.refund }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phoneNumber }}</td>
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
      getListBookingTables: 'getBookingTables'
    }),
    handleGetListBookingTables() {
      this.getListBookingTables()
    }
  },
  created() {
    this.handleGetListBookingTables()
  }
}
</script>

<style scoped>
@import "../../../style/layout/content.css";

.booking {
  margin: 0 auto;
  width: 100%;

}

.v-dialog > * {
  width: 100%;
  background-color: #FAFAFA;
}
</style>