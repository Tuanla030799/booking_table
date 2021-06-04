<template>
  <div id="navbar">
    <div class="logo-box">
      <div class="icon-nav sidebar icon-side"></div>
      <div class="logo"></div>
    </div>
    <div class="navbar-box">
      <router-link to="/admin/booking" class="navbar-item" tag="a">
        <div class="icon-nav navbar-icon "></div>
        <div class="navbar-text">Booking Table</div>
      </router-link>
      <router-link to="/admin/foods" class="navbar-item" tag="a">
        <div class="icon-nav navbar-icon "></div>
        <div class="navbar-text">Food</div>
      </router-link>
      <router-link class="navbar-item" to="/admin/customers" tag="a">
        <div class="icon-nav navbar-icon "></div>
        <div class="navbar-text">Customer</div>
      </router-link>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon "></div>
        <div class="navbar-text">Export</div>
      </a>
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