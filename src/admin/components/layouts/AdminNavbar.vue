<template>
  <div id="navbar">
    <div class="logo-box">
      <div class="icon-nav sidebar icon-side"></div>
      <div class="logo"></div>
    </div>
    <div class="navbar-box">
      <router-link to="/admin/booking" class="navbar-item" tag="div">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-clipboard-edit-outline
        </v-icon>
        <div class="navbar-text">
          Đặt Bàn
        </div>
      </router-link>
      <router-link class="navbar-item" to="/admin/customers" tag="div">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-account-details
        </v-icon>
        <div class="navbar-text">
          Khách Hàng
        </div>
      </router-link>
      <router-link to="/admin/foods" class="navbar-item" tag="div">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-basket
        </v-icon>
        <div class="navbar-text">
          Món Ăn
        </div>
      </router-link>
        <router-link class="navbar-item" to="/admin/customers" tag="div">
          <v-icon color="grey lighten-5" class="pl-5">
            mdi-file-export-outline
          </v-icon>
          <div class="navbar-text">
            Báo Cáo
          </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminNavbar"
}
</script>

<style scoped>
@import "../../../style/layout/navbar.css";
</style>