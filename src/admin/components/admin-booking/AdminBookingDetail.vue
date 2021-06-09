<template>
  <b-container>
    <div class="content-hea">
      <div class="content-title">Booking Table</div>
      <div class="employee-table">
        <div class="grid">

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
      bookingId: this.$route.params.bookingId
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
    ...mapActions(['getBookingTableById']),
    fetchDataGetBookingById() {
      this.getBookingTableById(this.bookingId)
    },
    parseJson(data){
      return JSON.parse(data)
    }
  },
  created() {
    this.fetchDataGetBookingById()
  }
}
</script>

<style scoped>
@import "../../../style/layout/content.css";
</style>