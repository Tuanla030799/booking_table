<template>
  <v-app>
    <v-main>
      <!-- <button @click="aaaaa()"> bookingid</button> -->
      <!-- <the-navbar
        @showBookingTable="showBookingTable"
        :hideNavbar="hideNavbar"
        :apHeight="aHeight"
        :logged="hidelogged"
        @SearchFootOnClick="SearchFootOnClick"
        
      /> -->
      <the-navbar
        @showBookingTable="showBookingTable"
        :hideNavbar="hideNavbar"
        :apHeight="aHeight"
        :logged="hidelogged"
        @SearchFootOnClick="SearchFootOnClick"
        :isAccount="Acount"
        @foodDetail="foodDetail"
      />
      <!-- <search-foot 
      :SearchFootActive="SearchFoot"/> -->

      <router-view
        @hideNav="hideNav"
        @appHeight="appHeight"
        @AcountEmail="Account"
        @loggedHide="loggedHide"
        @showMessage="showMessage"
        :bookingFootId="idBooking"
        @footBooking="footBooking"
        @detailFood="detailFood"
      />

      <noti-msg 
      :hideNotiError="hideNoti" 
      @hideNotiError="hideNotiError" />
      <booking-foot
        :hideBookingFoots="showPopup"
        @hideBooking="hideBooking"
        @showInforBooking="showInforBooking"
        @showMessage="showMessage"
      />
      <infor-booking-foot
        :hideinforBookingFoot="hideinforBooking"
        :InforBookingFoot="InforBooking"
        @hideBookingFoot="hideBookingFoot"
        @ChooseFootBooking="ChooseFootBooking"
        @bookingId="bookingId"
        />
      <detail-foot 
      :detailFoot="footDetail"
      @closeDetailFood="closeDetailFood"
      :Id="IdFoodDetail"
      />
    </v-main>
  </v-app>
</template>
<script>
import TheNavbar from "../../components/TheNavbar.vue";
import NotiMsg from "./NotiMsg.vue";
import BookingFoot from "../foots/BookingFoot.vue";
import InforBookingFoot from "../foots/InforBookingFoot.vue";
import DetailFoot from "../foots/DetailFoot.vue"
// import SearchFoot from './SearchFoot.vue';
export default {
  created() {
    this.Acount;
  },
  name: "CustomerPage",
  components: {
    TheNavbar,
    NotiMsg,
    BookingFoot,
    InforBookingFoot,
    DetailFoot
    // SearchFoot,
  },

  methods: {
    showBookingTable() {
      this.showPopup = true;
    },
    showMessage(show) {
      //this.Message = message;
      this.hideNoti = show;
      this.showPopup = false;
      console.log(this.hideNoti);
    },
    hideBooking() {
      this.showPopup = false;
    },
    appHeight(aHeight) {
      this.aHeight = aHeight;
    },
    hideNav() {
      this.hideNavbar = "d-none";
    },
    Account(emailAccount) {
      this.Acount = emailAccount;
      console.log(emailAccount);
    },
    loggedHide(hide) {
      this.hidelogged = hide;
    },
    hideNotiError() {
      this.hideNoti = "d-none";
      console.log(this.hideNoti);
    },

    showInforBooking(Infor) {
      this.showPopup = false;
      console.log(Infor);
      this.InforBooking = Infor;
      this.hideinforBooking = true;
    },
    hideBookingFoot() {
      this.hideinforBooking = false;
      this.$router.push({ name: "Home" }).catch((err) => {
        return err;
      });
    },
    ChooseFootBooking() {
      this.hideinforBooking = false;
    },
    bookingId(id) {
      this.idBooking = id;
      console.log(id);
    },
    footBooking(Id) {
      this.idBooking = Id;
    },
    SearchFootOnClick(Find) {
      this.SearchFoot = true;
      console.log(Find);
    },
    // hide detail food 
    closeDetailFood() {
      this.footDetail = false
    },
    // show detailFood
    foodDetail(Id) {
      this.footDetail = true
      this.IdFoodDetail = Id
    },
    detailFood(Id) {
      console.log("A");
      this.footDetail = true
      this.IdFoodDetail = Id
    },
    aaaaa() {
      // console.log(this.aHeight);
      // console.log(this.hideNavbar);
      console.log(this.idBooking);
      //this.Account()
    },
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
    InforBooking: {},
    idBooking: "",
    SearchFoot: false,
    footDetail: false,
    IdFoodDetail: {}
  }),
};
</script>

<style>
</style>