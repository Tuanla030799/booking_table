<template>
  <div id="navbar">
    <div class="logo-box">
      <div class="icon-nav sidebar icon-side"></div>
      <div class="logo"></div>
    </div>
    <div class="navbar-box">
      <router-link to="/admin/booking" class="navbar-item" tag="a">
        <div class="icon-nav navbar-icon icon-tongquan"></div>
        <div class="navbar-text">Booking Table</div>
      </router-link>
      <router-link to="/admin/foods" class="navbar-item" tag="a">
        <div class="icon-nav navbar-icon icon-tienmat"></div>
        <div class="navbar-text">Food</div>
      </router-link>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-tiengui"></div>
        <div class="navbar-text">Customer</div>
      </a>
      <a class="navbar-item">
        <div class="icon-nav navbar-icon icon-muahang"></div>
        <div class="navbar-text">Export</div>
      </a>
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-banhang"></div>-->
<!--        <div class="navbar-text">Bán hàng</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-hoadon"></div>-->
<!--        <div class="navbar-text">Quản lí hóa đơn</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-kho"></div>-->
<!--        <div class="navbar-text">Kho</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-dungcu"></div>-->
<!--        <div class="navbar-text">Công cụ dụng cụ</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon  icon-taisan"></div>-->
<!--        <div class="navbar-text">Tài sản cố định</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-thue"></div>-->
<!--        <div class="navbar-text">Thuế</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-giathanh"></div>-->
<!--        <div class="navbar-text">Giá thành</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-tonghop"></div>-->
<!--        <div class="navbar-text">Tổng hợp</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-ngansach"></div>-->
<!--        <div class="navbar-text">Ngân sách</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-baocao"></div>-->
<!--        <div class="navbar-text">Báo cáo</div>-->
<!--      </a>-->
<!--      <a class="navbar-item">-->
<!--        <div class="icon-nav navbar-icon icon-taichinh"></div>-->
<!--        <div class="navbar-text">Phân tích tài chính</div>-->
<!--      </a>-->

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