<template>
  <div id="navbar">
    <div class="logo-box">
      <div class="icon-nav sidebar icon-side"></div>
      <div class="logo"></div>
    </div>
    <div class="navbar-box">
      <router-link to="/admin/bookings" class="navbar-item" tag="div" active-class="active-click">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-clipboard-edit-outline
        </v-icon>
        <div class="navbar-text">
          Đặt Bàn
        </div>
      </router-link>
      <router-link class="navbar-item" to="/admin/customers" tag="div" active-class="active-click">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-account-details
        </v-icon>
        <div class="navbar-text">
          Khách Hàng
        </div>
      </router-link>
      <router-link to="/admin/foods" class="navbar-item" tag="div" active-class="active-click">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-basket
        </v-icon>
        <div class="navbar-text">
          Món Ăn
        </div>
      </router-link>
      <router-link class="navbar-item" to="/admin/sales" tag="div" active-class="active-click">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-file-export-outline
        </v-icon>
        <div class="navbar-text">
          Chương trình khuyến mại
        </div>
      </router-link>
      <router-link to="/admin/payments" class="navbar-item" tag="div" active-class="active-click">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-file-send
        </v-icon>
        <div class="navbar-text">
          Danh sách nạp tiền
        </div>
      </router-link>
      <router-link to="/admin/exports" class="navbar-item" tag="div" active-class="active-click">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-download
        </v-icon>
        <div class="navbar-text">
          Xuất báo cáo
        </div>
      </router-link>
      <router-link to="/" class="navbar-item" tag="div">
        <v-icon color="grey lighten-5" class="pl-5">
          mdi-account-arrow-right-outline
        </v-icon>
        <div class="navbar-text" @click="logOutAdmin">
          Đăng Xuất
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "AdminNavbar",
  methods: {
    ...mapActions({
      logOut: 'logOutAdmin'
    }),
    logOutAdmin() {
      this.logOut()
    }
  }
}
</script>

<style scoped>
@import "../../../style/layout/navbar.css";
.active-click{
  background-color: #2CA01C;
  padding: 15px 35px;
}
</style>