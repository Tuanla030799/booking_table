<template>
 <v-app>
   <AdminHeader>
   </AdminHeader>
   <AdminNavbar>
   </AdminNavbar>
   <button v-on:click="handleGetListBooking" class="btn btn-primary">GET</button>
 </v-app>
</template>

<script>
import AdminHeader from "../layout/AdminHeader";
import AdminNavbar from "../layout/AdminNavbar";
import { mapGetters, mapActions} from "vuex";

export default {
  name: "AdminPage",
  components: {AdminNavbar, AdminHeader},
  computed:{
    ...mapGetters(["listBooking"])
  },
  methods:{
    ...mapActions(["getListBooking"]),
    handleGetListBooking(){
      console.log("list Booking: ", this.getListBooking())
      return this.getListBooking()
    }
  }

}
</script>

<style scoped>

</style>