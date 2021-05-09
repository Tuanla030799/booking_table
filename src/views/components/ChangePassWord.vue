<template>
  <div>
    <div class="change-password">
      <div class="container">
        <div class="main-content" style="padding-right: 30px;">
          <div class="page-content">
            <div class="box-title box-title-fix">
              <form action="#" @submit.prevent="handleChangePass">
                <div class="float-right">
                  <button
                    type="submit"
                    style="font-size: 13px; background-color: red;"
                  >
                    Đổi mật khẩu
                  </button>
                </div>
                <input v-model="oldPass" type="text" />
                <input v-model="newPass" type="text" />
              </form>
            </div>
            <!-- InstanceEndEditable -->
          </div>
          <!-- container-fluid -->
        </div>
      </div>
    </div>
            <!-- -------change password------- -->
        <!-- <b-modal id="bv-modal-example-4" hide-footer hide-header >
            <b-col class="iconLogout" style="padding:0px; padding-top: 5px;">
            <div class="mb-img mb-4">
                        <span><img src="../assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 22px;">Đổi mật khẩu thành công</h3>
        <div class="mb-text ">
                        <p style="font-size: 13px;" >Bạn đã đổi mật khẩu thành công<br/>Vui lòng đăng nhập lại</p>
                    </div>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/">
        <button class="buttonOK mt-3"  style="font-size: 13px;">OK</button>
        </router-link>
        </div>
        </b-modal> -->
        <!-- -------end change password------- -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "change-password",
  data() {
    return {
      oldPass: "",
      newPass: "",
      base_url: process.env.VUE_APP_BASE_URL,
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    handleChangePass() {
      console.log(this.oldPass);
      console.log(this.newPass);
      axios({
        method: "put",
        url: `${this.base_url}/api/user/change-password`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          newPass: this.newPass,
          oldPass: this.oldPass,
        },
      })
        .then((response) => {
          console.log(response.data.statusCode);
          if (response.status == 200 && response.data.statusCode != 'SUCCESS') {
            alert(response.data.message)
            // this.$bvModal.show('bv-modal-example-4')
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
<style></style>
