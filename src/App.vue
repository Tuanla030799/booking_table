<template>
  <v-app>
    <!-- <div class="form-popup-account"
    :class="{ 'popup-hide': !showPopup }">
      <form action="/account" class="form-account">
      <router-link class="nav-signin" to="/signin">
        <button class="btn-login">Đăng nhập</button>
      </router-link>
      <router-link class="nav-signin" to="/change-password">
        <button class="btn-login">Đổi mật khẩu</button>
      </router-link>
      
      <router-link class="nav-signup" to="/register">
            <button class="btn-login">Đăng Kí</button>
      </router-link>
        
      </form>
    </div> -->
    <the-navbar 
    @showBookingTable="showBookingTable" 
    :hideNavbar="hideNavbar"
    :apHeight="aHeight"
    />
    <v-main>
      <!-- <button @click="aaaaa()">a</button> -->
      <router-view 
      @hideNav="hideNav"
      @appHeight="appHeight"
      />
      
      <noti-msg :hideNotiError="hideNoti" :notiTitle="Message" />
      <booking-foot :hideBookingFoots="showPopup" @hideBooking="hideBooking" />
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import NotiMsg from "./views/components/NotiMsg.vue";
import BookingFoot from "./views/foots/BookingFoot.vue";
export default {
  name: "App",

  components: {
    TheNavbar,
    NotiMsg,
    BookingFoot,
  },

  methods: {
    showBookingTable() {
      this.showPopup = true;
    },
    showMessage() {
      //this.Message = message;
      this.hideNoti = true;
      console.log(this.Message);
    },
    hideBooking() {
      this.showPopup = false;
    },
    appHeight(aHeight) {
      this.aHeight = aHeight
    },
    hideNav() {
      this.hideNavbar = "d-none"
    },
    aaaaa() {
      
      console.log(this.aHeight);
      console.log(this.hideNavbar);
    }
  },
  data: () => ({
    showPopup: false,
    Message: "aaa",
    hideNoti: true,
    aHeight: "100px",
    hideNavbar: "d-block"
  }),
};
</script>

<style>
@import "./style/base/button.css";
@import "./style/base/input.css";
@import "./style/base/icon.css";
@import "./style/base/dialog.css";

/* .form-popup-account {
  display: none;
  position: fixed;
  top: 39px;
  right: 10%;
  width: 200px;
  height: 100px;
  border: 1px solid #cecece;
  background: #ffffff;
  z-index: 99; 
  
} 
.form-account .btn-login {
  margin-top: 15px;
  margin-left: 25px;
}
.popup-hide{
  display: none;
} */
</style>
