<template>
  <v-container>

  </v-container>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "BookingTable",
  data() {
    return {}
  },

  computed: {
    ...mapState[{ListBookingTable: state => state.ListBookingTable}]
  }
}
</script>

<style scoped>

</style>