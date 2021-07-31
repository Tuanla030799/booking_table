<template>
  <div class="CustomerInformation">
    <div class="Information">
      <div class="infor-text">
        <router-link to="Home" style="text-decoration: none">
          <span class="text-home">Trang chủ</span>
        </router-link>
        <span> > </span>
        <span style="color: red">Quản Lí Mật Khẩu</span>
      </div>
      <div class="cInfor">
        <div class="cInfor-left">
          <div class="cInfor1">
            <div class="cInfor-avatar">
              <div class="avatar-infor">
                <v-avatar color="#ccc" size="105">
                  <img v-if="url" :src="url" />
                  <img v-else :src="Customer.image" />
                </v-avatar>
              </div>
            </div>
            <div class="infor-notfix">
              <div class="infor-notEmail">
                <span>Email: </span>{{ this.Customer.email }}
              </div>
              <!-- <div class="infor-notEmail">
                <span>Level: </span>{{ this.Customer.level }}
              </div> -->
              <div class="infor-notEmail">
                <span>Status: </span>{{ this.Customer.status }}
              </div>
              <!-- <div class="infor-notEmail">
                <span>Price: </span>{{ this.Customer.totalMoney }}
              </div> -->
            </div>
          </div>
          <router-link
            class="nav-information"
            to="/information"
            style="text-decoration: none"
          >
            <div class="cInfor2">
              <v-icon dense class="mb-1">mdi-account</v-icon>
              <span>Thông tin tài khoản</span>
              <v-icon class="mb-1 float-right">mdi-chevron-right</v-icon>
            </div>
          </router-link>
          <router-link
            class="nav-changepass"
            to="/change-password"
            style="text-decoration: none"
          >
            <div class="cInfor2">
              <v-icon dense class="mb-1">mdi-camera-account</v-icon>
              <span>Quản lí mật khẩu</span>
              <v-icon class="mb-1 float-right">mdi-chevron-right</v-icon>
            </div>
          </router-link>
          <router-link
            class="nav-history"
            to="/customer-history"
            style="text-decoration: none"
          >
            <div class="cInfor2">
              <v-icon dense class="mb-1">mdi-history</v-icon>
              <span>Lịch sử đặt chỗ</span>
              <v-icon class="mb-1 float-right">mdi-chevron-right</v-icon>
            </div>
          </router-link>
          <router-link class="nav-home" to="/" style="text-decoration: none">
            <div class="cInfor2">
              <v-icon dense class="mb-1">mdi-exit-to-app</v-icon>
              <span>Thoát</span>
              <v-icon class="mb-1 float-right">mdi-chevron-right</v-icon>
            </div>
          </router-link>
        </div>
        <div class="cInfor-right">
          <div class="InforAccount">QUẢN LÍ MẬT KHẨU</div>
          <div class="inputGroupAccout">
            <div class="input-group">
              <div class="text-input">Mật khẩu cũ(<span>*</span>):</div>
              <input
                type="password"
                class="Infor-input"
                placeholder="Nhập mật khẩu cũ"
                v-model="oldPass"
              />
            </div>

            <div class="input-group">
              <div class="text-input">Mật khẩu mới(<span>*</span>):</div>
              <input
                type="password"
                class="Infor-input"
                placeholder="Nhập mật khẩu mới"
                v-model="newPass"
              />
            </div>

            <div class="input-group">
              <div class="text-input">Nhập lại mật khẩu(<span>*</span>):</div>
              <input
                type="password"
                class="Infor-input"
                placeholder="Nhập lại mật khẩu mới"
                v-model="newPassAgain"
              />
            </div>
          </div>
          <div class="UpdateInfor">
            <button class="btn-default" @click="handleChangePass()">
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "change-password",
  created() {
    this.loadCustomer();
  },
  data() {
    return {
      oldPass: "",
      newPass: "",
      newPassAgain: "",
      base_url: process.env.VUE_APP_BASE_URL,
      url: null,
      formData: null,
      Customer: {},
      File: null
    };
  },
  methods: {
    handleChangePass() {
     if (this.newPass == this.newPassAgain) {
        axios({
        method: "put",
        url: `${this.base_url}/api/user/change-password`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
        data: {
          newPass: this.newPass,
          oldPass: this.oldPass,
        },
      })
        .then((response) => {
          // console.log(response.data.statusCode);
          if (response.status == 200 && response.data.statusCode == 'SUCCESS') {
            alert("Đổi mật khẩu thành công")
            this.$cookie.set('token',response.data.message);
            this.newPassAgain = "",
            this.newPass = "",
            this.oldPass = ""
          }
        })
        .catch((error) => {
          console.log(error.data);
          // alert(error.data.message)
          alert(error.data.message)
        });
     } else {
       alert("Mật khẩu bạn vừa nhập không giống nhau")
     }
    },
    loadCustomer() {
      axios({
        method: "get",
        url: `${this.base_url}/api/user/get-user-detail`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            this.Customer = response.data;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>
<style scoped>
.CustomerInformation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: 0; */
  height: 660px;
  background: #eee;
}
.Information {
  width: 80%;
  margin: 20px 10%;
  height: 620px;
  padding: 20px 50px;
  background: #ffffff;
}
@media only screen and (max-width: 1200px) {
  .Information {
    width: 100%;
    margin: 20px 0;
  }
}
.infor-text {
  width: 100%;
  padding: 5px;
  /* border: 1px solid #ccc; */
}
.infor-text .text-home {
  color: #555555;
  cursor: pointer;
}
.infor-text .text-home:hover {
  color: red;
}
.cInfor {
  display: flex;
  margin-top: 5px;
  width: 100%;
  height: 92%;
  /* border: 1px solid #ccc; */
}
.cInfor-left {
  width: 33%;
  height: 332px;

  border: 1px solid #ccc;
}
.cInfor-left .cInfor1 {
  width: 100%;
  height: 130px;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.cInfor-avatar {
  width: 126px;
  height: 159px;
  /* border: 1px solid #ccc ; */
}
.avatar-infor {
  width: 125px;
  height: 125px;
  padding-right: 5px;
  /*     */
}
/* .btn-default {
  height: 32px !important;
  line-height: 32px !important;
  border-radius: 10px !important;
  padding: 0 15px !important;
  background: #3d7ff8;
  margin-left: 18px;
} */
.infor-notfix {
  
  width: 220px;
  height: 96px;
  /* border: 1px solid #ccc; */
  align-items: center;
  padding: 5px;
}
.infor-notEmail {
  /* margin-top: 10px; */
  margin-top: 10px;
  padding: 5px 0px;
  font-size: small;
  color: #000000;
}
.infor-notEmail span {
  color: #808080;
  /* font-weight: 500; */
  font-size: small;
}
.cInfor-left .cInfor2 {
  width: 100%;
  height: 50.5px;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding: 14px;
  border-bottom: 1px solid #ccc;
}
.cInfor2 span {
  margin-left: 5px;
  color: black;
  /* float: left; */
}
.cInfor-right {
  margin-left: 1%;
  width: 66%;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  font-size: 13px;
  color: white;
  background-color: #3d7ff8;
  display: inline-block;
  cursor: pointer;
  padding: 4px 5px;
  border-radius: 4px;
  margin-left: 25px;
}

.inputfile:focus + label,
.inputfile + label:hover {
  background-color: #4d9ff9;
}
/* .btn-cInfor2 {
  width: 100%;
  height: 100%;
}
.btn-cInfor2:hover,.icon-infor:hover {
  color: red;
} */
.nav-history:hover {
  color: red !important;
}

.InforAccount {
  text-align: center;
  padding: 40px 0;
  font-size: large;
  font-weight: 700;
  color: #000000;
  font-size: 20px;
}
.inputGroupAccout {
  padding: 30px;
  width: 100%;
  height: 325px;
  /* border: 1px solid red; */
}
.input-group {
  display: flex;
  height: 40px;
  align-items: center;
  margin-bottom: 40px;
  justify-content: center;
}
.input-group .text-input {
  /* margin-right: 40px; */
  color: #000000;
  width: 180px;
}
.input-group .text-input span {
  color: red;
}
.select-group {
  display: flex;
  height: 40px;
  align-items: center;
  margin-bottom: 40px;
}
.Infor-input {
  width: 50% !important;
  /* margin-right: 100px; */
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
.UpdateInfor {
  margin-top: 10px;
  width: 100%;
  height: 80px;
  text-align: center;
  padding: 20px;
}
</style>
