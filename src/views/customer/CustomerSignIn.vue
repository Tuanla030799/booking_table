<template>
  <div id="Signin">
    <div class="login">
      <div class="loginFrom">

        <!-- dialog -->

        <v-dialog  width="500px">
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
          class="input username"
          placeholder="Username or SDT"
          v-model="customerLogin.email"
        />
        <input
          type="password"
          class="input passwd"
          placeholder="Password"
          v-model="customerLogin.password"
        />
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "customer-signin",
  created() {},
  methods: {
    btnOnClickLogin() {
      axios
        .post("http://b85db928f598.ngrok.io/api/auth/login", this.customerLogin)
        .then((response) => {
          const token = response.data.token
          if (response.status == 200) {
            localStorage.setItem('token',token)
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  data() {
    return {
      customerLogin: {
        email: "",
        password: "",
        dialog: false,
      },
    };
  },
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
</style>