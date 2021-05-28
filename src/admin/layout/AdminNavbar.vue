<template>
  <div id="navbar">
    <div class="logo-box">
      <div class="icon-nav sidebar icon-side"></div>
      <div class="logo"></div>
    </div>
    <div class="navbar-box">
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-tongquan"></div>
        <div class="navbar-text">BookingTable</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-tienmat"></div>
        <div class="navbar-text">Customer Order</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-tiengui"></div>
        <div class="navbar-text"></div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-muahang"></div>
        <div class="navbar-text">Mua hàng</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-banhang"></div>
        <div class="navbar-text">Bán hàng</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-hoadon"></div>
        <div class="navbar-text">Quản lí hóa đơn</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-kho"></div>
        <div class="navbar-text">Kho</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-dungcu"></div>
        <div class="navbar-text">Công cụ dụng cụ</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon  icon-taisan"></div>
        <div class="navbar-text">Tài sản cố định</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-thue"></div>
        <div class="navbar-text">Thuế</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-giathanh"></div>
        <div class="navbar-text">Giá thành</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-tonghop"></div>
        <div class="navbar-text">Tổng hợp</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-ngansach"></div>
        <div class="navbar-text">Ngân sách</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-baocao"></div>
        <div class="navbar-text">Báo cáo</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-taichinh"></div>
        <div class="navbar-text">Phân tích tài chính</div>
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
#navbar {
  width: 175px;
  height: 100vh;
  border-right: 1px solid #dedede;
  background-color: #38393D;
}

.logo-box {
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  cursor: pointer;
}

.logo-box .sidebar {
  margin-left: 26px;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  /* background-image: url(../../assets/img/toggle.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; */
}

.logo-box .logo {
  margin-left: 8px;
  width: 100%;
  height: 32px;
  flex-shrink: 0;
  background-image: url("../../assets/Logo_Module_TiengViet_White.66947422.svg");
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
}

.navbar-box {
  margin-top: 10px;
}

.navbar-box .navbar-item {
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0;
}

.navbar-box .navbar-item:hover {
  background-color: #555555;
  cursor: pointer;
}

.navbar-item .navbar-icon {
  margin-left: 16px;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  /* background-size: contain;
  background-repeat: no-repeat;
  background-position: center; */
}

.navbar-item .navbar-text {
  margin-left: 10px;
  color: #ffffff;
}

a.navbar-item:hover {
  cursor: pointer;
}

a.navbar-item:active {
  background-color: aquamarine;
}

</style>