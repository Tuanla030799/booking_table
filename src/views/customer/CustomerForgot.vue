<template>
  <div id="forgotPassword">
    <div class="forgotFrom">
      <div class="text-header">Nhập email đăng kí của bạn</div>
      <br />
      <input type="text" 
      id="txtforgot" class="inputType input" 
      placeholder="Email" 
      v-model="email"/>
      <button class="btn-login btn-default " @click="btnClickFormatPass()">Lấy lại mật khẩu</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'customer-register',
  created() {
    
  },
  data() {
    return {
      email: '',
      base_url: process.env.VUE_APP_BASE_URL,
      showMessageError: "d-block"
    }
  },
  methods: {
    btnClickFormatPass() {
      axios({
        method: "get",
        url: `${this.base_url}/api/user/forgot-password/${this.email}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status == 200) {
           // alert(`${Mật khẩu đã gửi về email của bạn`)
          localStorage.setItem("message", `Mật khẩu đã gửi về email của bạn`);
          localStorage.setItem("isIcon", "susccess");
          this.$emit("showMessage", this.showMessageError)
            this.$router.push({ name: "Đăng nhập" }).catch((err) => {
              return err;
            });
          }
        })
        .catch((error) => {
          //alert(error.response.data.message)
          localStorage.setItem("message", error.response.data.message);
          localStorage.setItem("isIcon", "error");
          this.$emit("showMessage", this.showMessageError)
        });
    },
  },
};
</script>

<style>
#forgotPassword {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
}
.forgotFrom {
  position: fixed;
  top: 120px;
  left: calc(50% - 370px);
  width: 680px;
  height: 80%;
  border-radius: 4px;
  background-color: #ffffff;
}
</style>