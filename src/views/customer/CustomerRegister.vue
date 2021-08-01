<template>
  <div id="register">
    <div class="fromRegister">
      <div class="text-header">Nhập thông tin đăng kí</div>
      <br />
      <input
        type="text"
        id="txtFullName"
        class="inputType input"
        placeholder="Full Name"
        v-model="customerRegister.fullName"
      />
      <input
        type="text"
        id="txtEmail"
        class="inputType input"
        placeholder="Email"
        v-model="customerRegister.email"
      />
      <input
        type="text"
        id="txtPhoneNumber"
        class="inputType input"
        placeholder="Phone Number"
        v-model="customerRegister.phoneNumber"
      />
      <div class="passW" >
        <input
          :type="typePassword"
          class="inputPass"
          placeholder="Password"
          v-model="customerRegister.password"
        />
        <v-icon small class="mb-1 ml-1" @click="iconPassOnClick()">{{ this.iconEye }}</v-icon>
      </div>
      <div class="passW" >
        <input
          :type="typeRePassword"
          class="inputPass"
          placeholder="retypePassword"
          v-model="customerRegister.retypePassword"
        />
        <v-icon small class="mb-1 ml-1" @click="iconRePassOnClick()">{{ this.iconReEye }}</v-icon>
      </div>

      <input
        type="date"
        id="txtDateOfBirth"
        class="inputType input"
        v-model="customerRegister.dateOfBirth"
      />
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
      if (
        this.customerRegister.password == this.customerRegister.retypePassword
      ) {
        axios
          .post("http://localhost:9000/api/auth/create", this.customerRegister)
          .then((res) => {
            console.log(res);
            localStorage.setItem("message", res.data.message);
            localStorage.setItem("isIcon", "susccess");
            this.$emit("showMessage", this.showMessageError);
            this.$router.push({ name: "Đăng nhập" }).catch((err) => {
              return err;
            });
          })
          .catch((error) => {
            console.log(error.response);
            localStorage.setItem("message", error.response.data.message);
            this.$emit("showMessage", this.showMessageError);
            localStorage.setItem("isIcon", "error");
          });
      } else {
        localStorage.setItem("message", "mật khẩu nhập lại không giống nhau!");
        this.$emit("showMessage", this.showMessageError);
        localStorage.setItem("isIcon", "error");
      }
    },
    iconPassOnClick() {
      if (this.iconEye == "mdi-eye-off") {
        this.iconEye = "mdi-eye"
        this.typePassword = "text"
      } else {
        this.iconEye = "mdi-eye-off"
        this.typePassword = "password"
      }
    },
    iconRePassOnClick() {
      if (this.iconReEye == "mdi-eye-off") {
        this.iconReEye = "mdi-eye"
        this.typeRePassword = "text"
      } else {
        this.iconReEye = "mdi-eye-off"
        this.typeRePassword = "password"
      }
    }
  },
  data() {
    return {
      customerRegister: {
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        dateOfBirth: "",
        sex: null,
        retypePassword: "",
      },
      showMessageError: "d-block",
      iconEye: "mdi-eye-off",
      iconReEye: "mdi-eye-off",
      typePassword: "password",
      typeRePassword: "password"
      
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
  font-size: small;
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
.input-group {
  display: flex;
  height: 24px;
  align-items: center;
  margin-bottom: 25px;
  margin-left: 68px;
}
.radio-input {
  width: 338px;
  display: flex;
  height: 40px;
  align-items: center;
  font-size: small;
}
.text-input {
  margin-left: 2px;
  font-size: small;
}
.radio-input label {
  padding: 10px;
  font-size: small;
}
.radio-input .genderNu {
  margin-left: 20px;
}
.radio-input .genderNam {
  margin-left: 20px;
}
.text-header {
  margin-top: 25px !important;
}
</style>