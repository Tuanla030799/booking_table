<template>
    <div class="CustomerInformation">
      <div class="Information">
        <div class="infor-text">
          <router-link to="Home" style="text-decoration: none">
            <span class="text-home">Trang chủ</span>
          </router-link>
          <span> > </span>
          <span style="color: red">Thông tin tài khoản</span>
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
                <!-- <button type="file" class="btn-default" @change="onFileChange">Chọn ảnh</button> -->
                <!-- <label>
                  <input type="file" @change="onFileChange" />
                  "chọn ảnh"
              </label> -->
                <form ref="uploadForm" @submit.prevent="submit">
                  <input
                    type="file"
                    ref="uploadImage"
                    @change="onFileChange"
                    class="inputfile"
                    id="file"
                    
                  />
                  <label for="file">Chọn ảnh</label>
                </form>
              </div>
              <div class="infor-notfix">
                <div class="infor-notEmail">
                  <span>Email: </span>{{ setEmail(this.Customer.email) }}
                </div>
                <div class="infor-notEmail">
                  <span>Level: </span>{{ this.Customer.level }}
                </div>
                <div class="infor-notEmail">
                  <span>Status: </span>{{ this.Customer.status }} 
                  <v-icon x-small class="" color="green">mdi-circle-slice-8</v-icon>
                </div>
                <div class="infor-notEmail">
                  <span>Price: </span>{{ this.Customer.totalMoney }}
                </div>
                <div class="deposit">
                  <button class="btn-default btn-deposit" @click="depositOnClick()">Nạp tiền</button>
                </div>
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
            <router-link
              class="nav-history"
              to="/customer-history-payment"
              style="text-decoration: none"
            >
              <div class="cInfor2">
                <v-icon dense class="mb">mdi-credit-card-outline</v-icon>
                <span>Lịch sử nạp tiền</span>
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
            <div class="InforAccount">THÔNG TIN TÀI KHOẢN</div>
            <div class="inputGroupAccout">
              <div class="input-group">
                <div class="text-input">Họ Tên:</div>
                <input
                  type="text"
                  class="inputType Infor-input"
                  v-model="Customer.fullName"
                />
              </div>

              <div class="input-group">
                <div class="text-input">Số điện thoại:</div>
                <input
                  type="text"
                  class="inputType Infor-input"
                  v-model="Customer.phoneNumber"
                />
              </div>

              <div class="input-group">
                <div class="text-input">Ngày sinh:</div>
                <input
                  type="date"
                  class="inputType Infor-input"
                  v-model="Customer.dateOfBirth"
                />
              </div>
              <div class="input-group">
                <div class="text-input sex">Giới tính:</div>
                <div class="radio-input">
                  <input
                    type="radio"
                    id="nam"
                    name="gender"
                    value="1"
                    v-model="Customer.sex"
                  />
                  <label for="nam">Nam</label>
                  <input
                    type="radio"
                    id="nu"
                    name="gender"
                    value="0"
                    class="genderNu"
                    v-model="Customer.sex"
                  />
                  <label for="nam">Nữ</label>
                </div>
              </div>
            </div>
            <div class="UpdateInfor">
              <button class="btn-default" @click="updateCustomer()">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
        <customer-deposit 
        :depositDialog="isDeposit"
        @closeDeposit="closeDeposit"
        :dataObj="Customer"
        />
      </div>

    </div>

  <!-- </v-app> -->
</template>

<script>
import CustomerDeposit from "../customer/CustomerDeposit.vue"
import axios from "axios";
export default {
  name: "c-information",
  components: {
    CustomerDeposit
  },
  created() {
    this.loadCustomer();
  },
  data() {
    return {
      url: null,
      formData: null,
      Customer: {},
      base_url: process.env.VUE_APP_BASE_URL,
      File: null,
      isDeposit: false,
      showMessageError: "d-block",
      color: "color:green"
    };
  },
  methods: {
    onFileChange(e) {
      const fileUp = e.target.files[0];
      this.url = URL.createObjectURL(fileUp);
      // console.log("D:/HocTap/" + file.name);
      let file = this.$refs.uploadImage.files[0];
      this.File = file;
      // console.log(file);
      // console.log(this.File);
      
      
      // console.log(this.formData);
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
    updateCustomer() {
      this.$emit("isLoader")
      this.formData = new FormData();
      if ( this.File == null) {
      this.formData.append("dateOfBirth", this.Customer.dateOfBirth);
      this.formData.append("fullName", this.Customer.fullName);
      this.formData.append("sex", this.Customer.sex);
      this.formData.append("phoneNumber", this.Customer.phoneNumber);
      } else {
        this.formData.append("file", this.File);
      this.formData.append("dateOfBirth", this.Customer.dateOfBirth);
      this.formData.append("fullName", this.Customer.fullName);
      this.formData.append("sex", this.Customer.sex);
      this.formData.append("phoneNumber", this.Customer.phoneNumber);
      }
      //this.$emit("isLoadder")
      axios({
        method: "put",
        url: `${this.base_url}/api/user/update-user`,
        headers: {
          Accept: "application/json",
          "Content-Type": "mutipart/form-data",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
        data: this.formData
          // sex: this.Customer.sex,
          // dateOfBirth: this.Customer.dateOfBirth,
          // // file: this.formData,
          // phoneNumber: this.Customer.phoneNumber,
          // fullName: this.Customer.fullName,
          
      })
        .then((response) => {
          if (response.status == 200) {
            // alert(response.data.message)
            localStorage.setItem("message",response.data.message);
            localStorage.setItem("isIcon", "susccess");
            this.$emit("showMessage", this.showMessageError)
            this.loadCustomer()
          }
        })
        .catch((error) => {
          console.log(error.response);
          localStorage.setItem("message",error.response.data.message);
          localStorage.setItem("isIcon", "error");
          this.$emit("showMessage", this.showMessageError)
        });
        
    },
    depositOnClick() {
      this.isDeposit = true
    },
    closeDeposit() {
      this.isDeposit =false
    },
    setEmail(email) {
      if (email.length > 22) {
        let e = `${email.slice(0,17)}...`
        return e
      } else {
        return email
      }
    }
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
  width: 330px;
  height: 434px;

  border: 1px solid #ccc;
}
.cInfor-left .cInfor1 {
  width: 100%;
  height: 180px;
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
  width: 250px;
  height: 156px;
  /* border: 1px solid #ccc; */
  align-items: center;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.infor-notEmail {
  /* margin-top: 10px; */
  padding: 5px 0px;
  font-size: 12px;
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
  margin-left: 19px;
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
  width: 150px;
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
.btn-deposit{
  margin-top: 4px;
  color: #fff !important;
  padding: 0px 5px !important; 
  height: 27px;
  line-height: 27px;
  background-color: #3d7ff8 !important;
  text-align: center !important;
}
.btn-deposit:hover {
  background-color: #4d9ff9 !important;
}
.sex {
  margin-left: 34px;
}
</style>