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
    :Account="Acount"
    :logged="hidelogged"
    />
    <v-main>
      <!-- <button @click="aaaaa()">a</button> -->
      <router-view 
      @hideNav="hideNav"
      @appHeight="appHeight"
      @AcountEmail="Account"
      @loggedHide="loggedHide"
      @showMessage="showMessage"
      />
      
      <noti-msg 
      :hideNotiError="hideNoti" 
      @hideNotiError="hideNotiError"/>
      <booking-foot 
      :hideBookingFoots="showPopup" 
      @hideBooking="hideBooking"
      @showInforBooking="showInforBooking" 
      />
      <infor-booking-foot 
      :hideinforBookingFoot="hideinforBooking"
      :InforBookingFoot="InforBooking"
      @hideBookingFoot="hideBookingFoot" />
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import NotiMsg from "./views/components/NotiMsg.vue";
import BookingFoot from "./views/foots/BookingFoot.vue";
import InforBookingFoot from "./views/foots/InforBookingFoot.vue";
export default {
  name: "App",

  components: {
    TheNavbar,
    NotiMsg,
    BookingFoot,
    InforBookingFoot
  },

  methods: {
    showBookingTable() {
      this.showPopup = true;
    },
    showMessage(show) {
      //this.Message = message;
      this.hideNoti = show;
      console.log(this.hideNoti);
    },
    hideBooking() {
      this.showPopup = false;
      this.$router.push({ name: "Home" }).catch((err) => {
              return err;
            });
    },
    appHeight(aHeight) {
      this.aHeight = aHeight
    },
    hideNav() {
      this.hideNavbar = "d-none"
    },
    Account(emailAccount) {
      this.Acount = emailAccount
      console.log(emailAccount);
    },
    loggedHide(hide) {
      this.hidelogged = hide;
    },
    hideNotiError() {
      this.hideNoti = "d-none"
      console.log(this.hideNoti);
    },

    showInforBooking(Infor) {
      this.showPopup = false;
      console.log(Infor);
      this.InforBooking = Infor;
      this.hideinforBooking = true
    },
    hideBookingFoot(){
      this.hideinforBooking = false
      this.$router.push({ name: "Home" }).catch((err) => {
              return err;
            });
    },
    aaaaa() {
      // console.log(this.aHeight);
      // console.log(this.hideNavbar);
      console.log(this.hidelogged);
      //this.Account()
    }
  },
  data: () => ({
    showPopup: false,
    hideinforBooking: false,
    Message: "aaa",
    hideNoti: "d-none",
    aHeight: "100px",
    hideNavbar: "d-block",
    Acount: "Tài khoản",
    hidelogged: true,
    InforBooking: {}
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
