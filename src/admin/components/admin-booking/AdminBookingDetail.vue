<template>
  <b-container>
    <div class="content-hea">
      <div class="content-title">Booking Table</div>
      <div class="employee-table">
        <div class="grid">
          <div>Admin Booking Table</div>
          <form>

          </form>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "AdminBookingDetail",
  computed:{
    ...mapGetters(["getBookingTableById"])
  }
}
</script>

<style scoped>
@import "../../../style/layout/content.css";
</style>