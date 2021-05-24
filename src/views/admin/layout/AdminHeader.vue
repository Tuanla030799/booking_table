<template>
  <div id="header">
    <div class="header-select">
      <div class="icon-nav header-icon icon-stripes"></div>
      <select id="restaurian">
        <option value="biendong" selected>CÔNG TY TNHH SẢN SUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC</option>
        <!-- <option value="aaaaa">Nhà Hàng Biển Đông</option>
        <option value="bbbbb">Nhà Hàng Biển Đông</option>
        <option value="ccccc">Nhà Hàng Biển Đông</option> -->
      </select>
    </div>
    <div class="header-gmail">
      <div class="icon-nav header-icon icon-thongbao"></div>
      <div class="header-icon icon-avatar"></div>
      <div class="header-text">Nguyễn Văn Mạnh</div>
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