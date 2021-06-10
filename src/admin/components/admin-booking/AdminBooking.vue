<template>
  <b-container>
    <div class="content-hea">
      <div class="content-title">Quản lý đặt bàn</div>
      <div class="employee-table">
        <div class="grid">
          <table id="tblEmployee" class="table text-center" width="100%" border="0">
            <thead>
            <tr>
              <th>Số thứ tự</th>
              <th>Mã Đặt Bàn</th>
              <th>Thời Gian Đặt Bàn</th>
              <th>Tiền Cọc</th>
              <th>Tiền Phải Thanh Toán</th>
              <th>Trang Thái</th>
              <th>Chi Tiết</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="list in getBookingTables" :key="list.stt">
              <td>{{ list.stt }}</td>
              <td>{{ list.bookingId }}</td>
              <td>{{ list.bookingTime }}</td>
              <td>{{ list.deposit }}</td>
              <td>{{ list.moneyPay }}</td>
              <td>{{ list.bookingStatus }}</td>
              <td>
                <router-link :to="{name:'booking-detail', params:{bookingId: list.bookingId}}"
                             class="btn btn-primary btn-sm" tag="a">
                  Chi Tiết
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminBooking",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getBookingTables'])
  },
  methods: {
    ...mapActions({
      getListBookingTables: 'getBookingTables'
    }),
    handleGetListBookingTables() {
      this.getListBookingTables()
    },
  },
  created() {
    this.handleGetListBookingTables()
  }


}
</script>

<style scoped>
@import "../../../style/layout/content.css";

.content-title {
  color: red;
  margin: 0 auto;
  text-transform: uppercase;
}
</style>