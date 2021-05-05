<template>
  <div id="forgotPassword">
    <div class="forgotFrom">
      <div class="text-header">Nhập email đăng kí của bạn</div>
      <br />
      <input type="text" 
      id="txtforgot" class="input" 
      placeholder="Email" 
      v-model="this.customerForgot.email"/>
      <button class="btn-login btn-default " @click="btnClickForgotPass">Lấy lại mật khẩu</button>
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
      customerForgot: {
        email: ''
      }
    }
  },
  methods: {
    btnClickFormatPass() {
      axios.post("" ,this.customerForgot)
      .then((res)=>{
        console.log(res)

      })
      .catch((res)=>{
        console.log(res)
      })
    }
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