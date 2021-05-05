<template>
  <v-app>
    <div class="form-popup-account"
    :class="{ 'popup-hide': !showPopup }">
      <form action="/account" class="form-account">
      <router-link class="nav-signin" to="/signin">
        <button class="btn-login">Đăng nhập</button>
      </router-link>
      
      <router-link class="nav-signup" to="/register">
            <button class="btn-login">Đăng Kí</button>
      </router-link>
        
      </form>
    </div>

    <the-navbar 
    @hidePopup = "ShowPopupAccount"
    />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",

  components: {
    TheNavbar,
  },

  methods: {
    ShowPopupAccount() {
      this.showPopup = !this.showPopup
    }
  },

  data: () => ({
    showPopup: false,
  }),
};
</script>

<style>
@import "./style/base/button.css";
@import "./style/base/input.css";

.form-popup-account {
  /* display: none;  */
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
}
</style>
