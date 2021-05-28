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

export default {
  name: "AdminPage",
  components: {AdminContent, AdminNavbar, AdminHeader}
}
</script>

<style scoped>

</style>