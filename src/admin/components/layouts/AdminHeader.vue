<template>
  <div id="header">
    <div class="header-select">
      <div class="icon-nav header-icon icon-stripes"></div>
      <select id="restaurian">
        <option value="biendong" selected>Admin</option>
      </select>
    </div>
    <div class="header-gmail">
      <div class="icon-nav header-icon icon-thongbao"></div>
      <div class="header-icon icon-avatar"></div>
      <div class="header-text">Admin</div>
      <div class="icon-nav header-icon icon-option"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeader"
}
</script>

<style scoped>
@import "../../../style/layout/header.css";
</style>