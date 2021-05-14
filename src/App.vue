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
    @hidePopup = "ShowPopupAccount"
    />
    <button @click="aaa()">aaa</button>
    <v-main>
      <router-view @showMessage ="showMessage" />
      <noti-msg 
      :hideNotiError="hideNoti"
      :notiTitle="Message"/>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import NotiMsg from "./views/components/NotiMsg.vue";
export default {
  name: "App",

  components: {
    TheNavbar,
    NotiMsg
  },

  methods: {
    ShowPopupAccount() {
      this.showPopup = !this.showPopup
    }
  },
  showMessage() {
    //this.Message = message;
    this.hideNoti = true;
    console.log(this.Message);
  },
aaa() {
console.log(this.Message)
},
  data: () => ({
    showPopup: false,
    Message: "aaa",
    hideNoti: true
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
