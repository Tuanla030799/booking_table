<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
@import "./style/base/button.css";
@import "./style/base/input.css";
@import "./style/base/icon.css";
@import "./style/base/dialog.css";
@import "./style/base/table.css";

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
