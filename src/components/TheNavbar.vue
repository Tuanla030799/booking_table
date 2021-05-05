<template>
  <nav>
    <v-app-bar light fixed app height="100px">
      <div class="navbar">
        <div class="navbar-header">
          <div class="navbar-header-left">
            <div class="navbar-text">Kết nối:</div>
            <a
              href="https://www.facebook.com/anhtuanlee.belowzero/"
              class="text-decoration-none ml-1"
            >
              <v-icon small>mdi-facebook</v-icon></a
            >
            <a
              href="https://www.instagram.com/iamtuaans__/"
              class="text-decoration-none ml-1"
            >
              <v-icon small>mdi-instagram</v-icon></a
            >
          </div>
          <div class="navbar-header-right">
            <div class="navbar-item test">
              <button class="btn-account">
                <v-icon small>mdi-bell</v-icon>
                Thông báo
              </button>
              <v-card
                class="mx-auto d-none try-test"
                max-width="344"
                style="position: absolute !important"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">OVERLINE</div>
                    <v-list-item-title class="headline mb-1">
                      Headline 5
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly
                      fonwderfully</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>
              </v-card>
            </div>
            <div class="navbar-item">
              <button class="btn-account">
                <v-icon small>mdi-help</v-icon>
                Hỗ trợ
              </button>
            </div>
            <div class="navbar-item">
              <button class="btn-account" @click="onClickAccount()">
                <v-icon small>mdi-account</v-icon>
                Tài Khoản
              </button>
            </div>
          </div>
        </div>

        <div class="navbar-content">
          <div class="navbar-title">
            <v-app-bar-title>
              <router-link class="text-decoration-none nav-home" to="/">
                <!-- <span class="font-weight-light">Booking</span> -->
                <span class="black--text">BookingTable</span>
              </router-link>
            </v-app-bar-title>
          </div>

          <input
            type="text"
            class="input-search"
            style="width: 40%"
            placeholder="Tìm kiếm các món ăn..."
          />

          <button class="btn-default">Đặt bàn</button>
        </div>

        <!-- <v-btn color="grey">
          Tai Khoan
          <v-icon>mdi-account</v-icon>
        </v-btn> -->
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "the-navbar",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    onClickAccount() {
      this.$emit("hidePopup");
    },
  },
};
</script>

<style>
.navbar {
  position: absolute;
  left: 10%;
  right: 10%;
  height: 100%;
}
.navbar .navbar-header {
  display: flex;
  height: 40px;
  /* background: #ffffff; */
  /* border-bottom: 1px solid #ccc; */
}
.navbar-header .navbar-header-left {
  display: flex;
  align-items: center;
}
.navbar-header .navbar-header-right {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
}

.navbar-item {
  padding-right: 10px;
}
.navbar-text {
  margin-top: 5px;
  font-weight: 400;
  font-size: 14px;
  /* padding-left: 10px;
  padding-right: 10px; */
}
.navbar-title {
  padding-top: 15px;
  padding-bottom: 15px;
}

.navbar-content {
  display: flex;
  align-items: center;
}

.navbar-content input {
  margin-left: 20%;
  margin-right: 20%;
}
.btn-account {
  font-weight: 600;
  font-size: 13px;
  border: none;
  outline: none;
  height: 39px;
  padding-left: 10px;
}
.test:hover .try-test {
  display: block !important;
}
</style>