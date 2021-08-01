<template>
  <div id="Signin">
    <div class="login">
      <div class="loginFrom">
        <!-- dialog -->

        <v-dialog width="500px">
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text> aaaaa </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <div class="text-header">Nhập thông tin đăng nhập</div>
        <br />
        <input
          type="text"
          class="inputType input username"
          placeholder="Username or SDT"
          required
          v-model="email"
          autocomplete="on"
        />
        <div class="passW" >
        <input
          :type="typePassword"
          id="txtPasswordRegister"
          class="inputPass"
          placeholder="Password"
          required
          v-model="password"
          autocomplete="on"
        />
        <v-icon small class="mb-1 ml-1" @click="iconPassOnClick()">{{ this.iconEye }}</v-icon>
      </div>
        <!-- <input
          type="password"
          class="inputType input passwd"
          placeholder="Password"
          required
          v-model="password"
          autocomplete="on"
        /> -->
        <button class="btn-login btn-default" @click="btnOnClickLogin()">
          Login
        </button>
        <div class="header-link">
          <router-link class="Signin-item" to="/register">
            <div class="Signin-text register"><p>register</p></div>
          </router-link>
          <router-link class="Signin-item" to="/forgotpass">
            <div class="Signin-text forgot"><p>forgot password</p></div>
          </router-link>
        </div>
      </div>
    </div>
    <noti-msg />
  </div>
</template>

<script>
import axios from "axios";
import NotiMsg from "../components/NotiMsg.vue";
import {ACCESS_TOKEN_ADMIN} from "../../constants";

export default {
  components: { NotiMsg },
  name: "customer-signin",
  created() {},
  methods: {
    iconPassOnClick() {
      if (this.iconEye == "mdi-eye-off") {
        this.iconEye = "mdi-eye"
        this.typePassword = "text"
      } else {
        this.iconEye = "mdi-eye-off"
        this.typePassword = "password"
      }
    },
    btnOnClickLogin() {
      localStorage.setItem("aHeight", this.appHeight);
      // axios
      //   .post(`http://localhost:9000/api/auth/login`, this.customerLogin)
      //   .then((res) => {
      //     const token = res.response.token
      //     //if (response.status == 200) {
      //       localStorage.setItem('token',token)
      //       console.log(res.token)
      //     //}
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //   });
      axios({
        method: "post",
        url: `${this.base_url}/api/auth/login`,
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${this.token}`,
        // },
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then((response) => {
          console.log(response);
          let token = response.data.token;
          let email = response.data.email
          if (response.status == 200) {
            // sessionStorage.setItem("token", token);
            this.$cookie.set('token',token);

            if (response.data.role == "USERS") {
              this.$cookie.set('email',email);
              localStorage.setItem('email',email)
              console.log(token);
              this.Account = response.data.email
              this.$emit("AcountEmail", this.Account)
              this.$emit("loggedHide", this.hideLoged)
              this.$router.push({ name: "Home" }).catch((err) => {
              return err;
            });
            location.reload()
            } else if (response.data.role == "ADMIN") {
              localStorage.setItem(ACCESS_TOKEN_ADMIN, token)
              this.$emit("appHeight", this.aHeight)
              this.$emit("hideNav")
              this.$router.push({ name: "bookings" }).catch((err) => {
              return err;
            });
            }
            //console.log(token);
          }
        })
        .catch((error) => {
          // this.message = error.response.data.message;
          if (error.response) {
            // this.$bvModal.show("bv-modal-example-error-login");
            // console.log(this.message);
            localStorage.setItem("message", error.response.data.message);
            localStorage.setItem("isIcon", "error");
            this.$emit("showMessage", this.showMessageError)
          }
        });
    },
  },
  //   beforeDestroy () {
  //   localStorage.removeItem('message');
  // },
  data() {
    return {
      email: "",
      password: "",
      dialog: false,
      base_url: process.env.VUE_APP_BASE_URL,
      //token: localStorage.getItem("token"),
      message: "",
      aHeight: "1px",
      Account: "",
      hideLoged: false,
      showMessageError: "d-block",
      iconEye: "mdi-eye-off",
      typePassword: "password",
    };
  },
  props: {},
};
</script>

<style>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
}
.login .loginFrom {
  position: fixed;
  top: 120px;
  left: calc(50% - 370px);
  width: 680px;
  height: 80%;
  border-radius: 4px;
  background-color: #ffffff;
}

.input {
  margin-left: 10%;
  margin-bottom: 20px;
  width: 80%;
  font-size: small;
}
.username {
  margin-top: 15%;
}
.btn-login {
  width: 80%;
  margin-left: 10%;
}
.header-link {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
}
.Signin-text {
  margin-top: 15px;
  color: red;
  font-size: 13px;
  font-weight: 500;
}
.Signin-text :hover {
  color: #000000;
}
.text-header {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin-top: 10%;
}
.passW {
  margin-left: 10%;
  width: 80%;
  margin-top: 2px;
  margin-bottom: 20px;
  font-size: small;
}
.inputPass {
  width: 92.62%;
}
</style>