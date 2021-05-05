<template>
  <div id="register">
    <div class="fromRegister">
      <div class="text-header">Nhập thông tin đăng kí</div>
      <br />
      <input
        type="text"
        id="txtFullName"
        class="input"
        placeholder="Full Name"
        v-model="customerRegister.fullName"
      />
      <input
        type="text"
        id="txtEmail"
        class="input"
        placeholder="Email"
        v-model="customerRegister.email"
      />
      <input
        type="text"
        id="txtPhoneNumber"
        class="input"
        placeholder="Phone Number"
        v-model="customerRegister.phoneNumber"
      />
      <input
        type="password"
        id="txtPasswordRegister"
        class="input"
        placeholder="Password"
        v-model="customerRegister.password"
      />
      <!-- <input
          type="password"
          id="txtPasswordAgain"
          class="input"
          placeholder="Password Again"
        /> -->
      <button class="btn-login btn-default" @click="btnOnClickRegister()">
        Đăng kí
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "customer-register",
  created() {},
  methods: {
    btnOnClickRegister() {
      axios
        .post("http://localhost:9000/api/auth/create", this.customerRegister)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  data() {
    return {
      customerRegister: {
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
      },
    };
  },
};
</script>

<style>
#register {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
}
.fromRegister {
  position: fixed;
  top: 120px;
  left: calc(50% - 370px);
  width: 680px;
  height: 80%;
  border-radius: 4px;
  background-color: #ffffff;
}
</style>