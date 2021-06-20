<template>
  <nav>
    <v-app-bar light fixed app :height="apHeight" :class="hideNavbar">
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
                <v-list-item
                  three-line
                  right
                  style="float: right"
                  class="ml-10"
                >
                </v-list-item>
              </v-card>
            </div>
            <div class="navbar-item test">
              <button class="btn-account">
                <v-icon small>mdi-help</v-icon>
                Hỗ trợ
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
                      ></v-list-item-subtitle
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
            <div class="navbar-item test">
              <button class="btn-account">
                <v-icon small>mdi-account</v-icon>
                {{ this.isAccount }}
              </button>

              <v-card
                class="mx-auto d-none try-test"
                width="200"
                style="position: absolute !important; right: 0px"
                outlined
              >
                <v-list-item three-line class="accountFix">
                  <form action="/account" class="form-account">
                    <div
                      class="not-loggedIn"
                      :class="hideLogged(!checkLogged(this.isAccount))"
                    >
                      <router-link class="nav-signin" to="/signin">
                        <button class="btn-login">Đăng nhập</button>
                      </router-link>
                      <router-link
                        class="nav-signup"
                        to="/register"
                        style="padding: 15px 0px"
                      >
                        <button class="btn-login">Đăng Kí</button>
                      </router-link>
                    </div>
                    <div
                      class="loggedIn"
                      :class="hideLogged(checkLogged(this.isAccount))"
                    >
                      <ul>
                        <router-link
                          class="nav-information"
                          to="/information"
                          style="text-decoration: none"
                        >
                          <li>Quản lí tài khoản</li>
                        </router-link>
                        <router-link
                          class="nav-changepass"
                          to="/change-password"
                          style="text-decoration: none"
                        >
                          <li>Quản lí mật khẩu</li>
                        </router-link>
                        <router-link
                          class="nav-history"
                          to="/customer-history"
                          style="text-decoration: none"
                        >
                          <li>Lịch sử đặt chỗ</li>
                        </router-link>
                        <div class="logout">
                          <button class="btn-login" @click="btnOnClickLogout()">
                        Đăng xuất
                      </button>
                        </div>
                      </ul>
                    </div>
                  </form>
                </v-list-item>
              </v-card>
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
            ref="searchinput"
            placeholder="Tìm kiếm các món ăn..."
            width="40%"
            @input="FindFootOnClick($event)"
            @focus="SearchFootOnClick()"
          />
          <div class="btn-bookingtable">
            <button class="btn-default" @click="BookingTable()">Đặt bàn</button>
          </div>
        </div>

        <!-- <v-btn color="grey">
          Tai Khoan
          <v-icon>mdi-account</v-icon>
        </v-btn> -->
        <search-foot :SearchFootActive="SearchFootClick"
        :listFoots="Foots"
        @DetailFood="DetailFood" />
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
import SearchFoot from "../views/components/SearchFoot.vue";
import axios from "axios";
export default {
  name: "the-navbar",
  components: {
    SearchFoot,
  },
  created() {
    this.loadAccount();
    this.getData();
  },
  data() {
    return {
      active: false,
      logged: true,
      FindFoot: "",
      SearchFootClick: "d-none",
      base_url: process.env.VUE_APP_BASE_URL,
      footSearch: "",
      Foots: [],
      isAccount: "Tài khoản"
    };
  },
  props: {
    // isAccount: {
    //   type: String,
    //   default: "Tài khoản",
    // },
    apHeight: {
      type: String,
      default: "0px",
    },
    hideNavbar: {
      type: String,
      default: "",
    },
    // Account: {
    //   type: String,
    //   default: "Tài khoản",
    // },
    // logged: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  methods: {
    SearchFootOnClick() {
      this.SearchFootClick = "d-block";
    },
    FindFootOnClick(event) {
      this.footSearch = `${event.target.value}`;
    },
    onClickAccount() {
      this.$emit("hidePopup");
    },
    BookingTable() {
      if (this.isAccount == "Tài khoản") {
        this.$router.push({ name: "Đăng nhập" }).catch((err) => {
          return err;
        });
      } else {
        this.$emit("showBookingTable");
      }
    },
    hideLogged(hide) {
      if (hide) {
        return "d-block";
      } else {
        return "d-none";
      }
    },
    CheckAccout(accout) {
      if (accout) {
        return "Tài khoản";
      } else {
        return this.Account;
      }
    },
    checkLogged(accout) {
      if (accout == "Tài khoản") {
        return false;
      } else {
        return true;
      }
    },
    btnOnClickLogout() {
      //this.$cookie.delete("email");
      axios({
        method: "post",
        url: `${this.base_url}/api/auth/logout`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
      this.$router.push({ name: "Home" }).catch((err) => {
        return err;
      });
      this.isAccount = "Tài khoản";
    },
    loadAccount() {
      //let Email = this.$cookie.get("email");
      //console.log(Email);
      //this.isAccount = Email
      // if (this.Account == null){
      //   return "Tài Khoản"
      // } else {
      //   return this.Account
      // }
      axios({
        method: "get",
        url: `${this.base_url}/api/user/get-user-detail`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
      })
        .then((response) => {
          if (response.status == 200 && response.data.fullName != null) {
            // console.log(response.data.fullName);
            //  alert("ĐĂng nhập thành công")
            this.isAccount = response.data.email;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.isAccount = "Tài khoản";
        });
    },
    getData() {

        axios
          .get(
            `${this.base_url}/api/sunshine/search-food/${this.footSearch}`
          )
          .then((res) => {
            this.Foots = res.data
          })
          .catch((res) => {
            console.log(res);
          });
      },
    // click food detail
    DetailFood(listFoot) {
      this.SearchFootClick = "d-none"
      this.$emit("detailFood", listFoot)
    }
  },
  computed: {
    hideLoggedIn: function () {
      return this.hideLogged();
    },
  },
  watch: {
    footSearch: function() {
      this.getData()
    }
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
  justify-content: space-between;
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
.form-account .btn-login {
  margin: 10px;
}
.accountFix form {
  align-items: center;
  text-align: center;
}
.loggedIn ul {
  list-style-type: none;
  margin-right: 20px;
  margin-top: 10px;
}
.loggedIn ul li {
  padding: 10px 0px;
  color: #3a77e5;
}
.loggedIn ul li:hover {
  color: red;
  cursor: pointer;
}
.btn-bookingtable {
  float: right;
}
.input-search {
  /* padding: 16px 0px !important; */
  width: 400px;
}
.search-nav {
  width: 400px;
}
</style>