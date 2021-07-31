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
      <input type="date" id="txtDateOfBirth" class="input" v-model="customerRegister.dateOfBirth"/>
      <div class="input-group">
        <div class="text-input">Giới tính:</div>
        <div class="radio-input">
          <input
            type="radio"
            id="nam"
            name="gender"
            value="1"
            class="genderNam"
            v-model="customerRegister.sex"
          />
          <label for="nam">Nam</label>
          <input
            type="radio"
            id="nu"
            name="gender"
            value="0"
            class="genderNu"
            v-model="customerRegister.sex"
          />
          <label for="nam">Nữ</label>
        </div>
      </div>
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
          localStorage.setItem("message", res.data.message);
          localStorage.setItem("isIcon", "susccess");
          this.$emit("showMessage", this.showMessageError)
          this.$router.push({ name: "Đăng nhập" }).catch((err) => {
              return err;
            });                   
        })
        .catch((error) => {
          console.log(error.response);
          localStorage.setItem("message", error.response.data.message);
          this.$emit("showMessage", this.showMessageError)
          localStorage.setItem("isIcon", "error");
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
        dateOfBirth: "",
        sex: null
      },
      showMessageError: "d-block"
    };
  },
};
</script>

<style scoped>
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
.input {
  margin-top: 2px;
}
.input-group {
  display: flex;
  height: 24px;
  align-items: center;
  margin-bottom: 25px;
  margin-left: 68px
}
.radio-input {
  width: 338px;
  display: flex;
  height: 40px;
  align-items: center;
}
.radio-input label {
  padding: 10px;
}
.radio-input .genderNu {
  margin-left: 20px;
}
.radio-input .genderNam {
  margin-left: 20px;
}
</style>