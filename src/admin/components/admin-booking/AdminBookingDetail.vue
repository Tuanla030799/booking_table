<template>
  <b-container>
    <div class="content-hea">
      <div class="content-title">Booking Detail</div>
      <div class="employee-table">
        <div class="grid">
          <v-container>
            <v-form readonly>
              <v-text-field
                  v-model="bookingDetail.bookingId"
                  label="Booking ID"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.tableName"
                  label="Table"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.bookingTime"
                  label="Booking Time"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.deposit"
                  label="Deposit"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.totalSeats"
                  label="Total Seats"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.point"
                  label="Point"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.moneyPay"
                  label="Money Pay"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.payDate"
                  label="PayDate"
              >
              </v-text-field>
              <v-text-field
                  v-model="bookingDetail.bookingStatus"
                  label="Booking Status"
              >
              </v-text-field>
              <v-btn v-on:click="handleCancelBookingById">
                Cancel Booking Table
              </v-btn>
              <v-btn class="ml-sm-10">
                <router-link :to="{name:'booking'}" tag="button">
                  Cancel
                </router-link>
              </v-btn>
            </v-form>
          </v-container>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminBookingDetail",
  data() {
    return {
      bookingId: this.$route.params.bookingId,
    }
  },
  computed: {
    ...mapGetters({
      bookingDetail: 'getBookingDetail'
    }),
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route'(to, from) {
      this.bookingId = to.params.id
      this.fetchDataGetBookingById()
    }
  },
  methods: {
    ...mapActions({
      getBookingTableById: 'getBookingTableById',
      cancelBooking: 'cancelBookingById'
    }),
    fetchDataGetBookingById() {
      this.getBookingTableById(this.bookingId)
    },
    handleCancelBookingById() {
      let data = {
        bookingId: this.bookingId
      }
      this.cancelBooking(data)
    },

  },
  created() {
    this.fetchDataGetBookingById()
  }
}
</script>

<style scoped>
@import "../../../style/layout/content.css";
</style>