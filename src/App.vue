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
    <router-view></router-view>

  </v-app>
</template>

<script>
export default {
  name: "App",


};
</script>

<style>

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
