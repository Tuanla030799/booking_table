<template>
  <b-container>
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
          @hideBookingFoot="hideBookingFoot"/>
    </v-main>
  </b-container>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
import NotiMsg from "./components/NotiMsg";
import BookingFoot from "./foots/BookingFoot";
import InforBookingFoot from "./foots/InforBookingFoot";

export default {
  name: "CustomerPage",
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
      this.$router.push({name: "Home"}).catch((err) => {
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
    hideBookingFoot() {
      this.hideinforBooking = false
      this.$router.push({name: "Home"}).catch((err) => {
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
}
</script>

<style scoped>
@import "./../style/base/button.css";
@import "./../style/base/dialog.css";
@import "./../style/base/icon.css";
@import "./../style/base/input.css";
</style>