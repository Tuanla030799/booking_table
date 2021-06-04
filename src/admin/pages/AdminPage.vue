<template>
  <div id="admin">
    <AdminHeader></AdminHeader>
    <AdminNavbar></AdminNavbar>
    <AdminContent></AdminContent>
  </div>
</template>

<script>
import AdminHeader from "../components/layouts/AdminHeader";
import AdminNavbar from "../components/layouts/AdminNavbar";
import AdminContent from "../components/layouts/AdminContent";
import {mapActions} from "vuex"

export default {
  name: "AdminPage",
  components: {AdminContent, AdminNavbar, AdminHeader},
  methods: {
    ...mapActions({
      getListBooking: "getBookingTables",
      getListCustomer: "getListCustomer",
      getListFoods:"getListFoods"
    })
  },
  created() {
    this.getListBooking()
    this.getListCustomer()
    this.getListFoods()
  }
}
</script>

<style scoped>

</style>