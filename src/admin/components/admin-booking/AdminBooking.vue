<template>
  <b-container>
    <div class="content-hea">
      <div class="content-title">Booking Table</div>
      <div class="employee-table">
        <div class="grid">
          <table  id="tblEmployee" class="table" width="100%" border="0">
            <thead>
            <tr>
              <th>STT</th>
              <th>Booking ID</th>
              <th>Booking Time</th>
              <th>Deposit</th>
              <th>Money Pay</th>
              <th>Booking Status</th>
              <th>Detail</th>


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
                <router-link to="booking-detail" class="btn btn-primary btn-sm" >
                  Detail
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
import {mapGetters} from "vuex"

export default {
  name: "AdminBooking",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getBookingTables'])
  }

}
</script>

<style scoped>
@import "../../../style/layout/content.css";
</style>