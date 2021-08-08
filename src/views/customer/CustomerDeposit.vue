<template>
  <v-dialog v-model="depositDialog" width="400px" height="250px">
    <div id="CustomerDeposit">
      <div class="depo">
        <div class="deposi-text">Nạp Tiền Online</div>
        <div class="from-deposit">
          <div class="text-depo">Số điện thoại:</div>
          <div class="input-deposit">
            <input type="text"
             class="inputType input-deposit" 
             v-model="dataObj.phoneNumber">
          </div>
        </div>
        <div class="from-deposit">
          <div class="text-depo">Mã code:</div>
          <div class=" input-deposit">
            <input 
            type="text" 
            class="inputType input-deposit" 
            v-model="code" 
            ref="txtCode">
          </div>
        </div>
      </div>
      <!-- <div class="text-tutorial">Mã code là: SR + số tiền muốn nạp</div> -->
      <div class="footer-noti">
        <button class="btn-default" @click="depositOnclick()">Nạp</button>
        <button class="btn-default" @click="CloseOnClick()">Hủy</button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "customer-deposit",
  data() {
    return {
      code: "",
      base_url: process.env.VUE_APP_BASE_URL,
      phone: "0969346205"
    };
  },
  props: {
    depositDialog: {
      type: Boolean,
      default: true,
    },
    dataObj: {
      type: Object,
      default: null
    }
  },
  methods: {
    CloseOnClick() {
      this.$emit("closeDeposit");
    },
    depositOnclick() {
      axios({
        method: "post",
        url: `${this.base_url}/api/customer/charging`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
        data: {
          phoneNumber: this.dataObj.phoneNumber,
          code: this.code
        }
      })
        .then((response) => {
          if (response.status == 200) {
            alert(response.data.message)
            console.log(this.phoneNumber);
            console.log(this.code);
            this.$emit("closeDeposit");
          }
        })
        .catch((error) => {
          alert(error.response.data.message)
        });
    }  
  },
  watch: {
    depositDialog: function () {
     // if (val) {
        this.$nextTick(function () {
          this.$refs.txtCode.focus();
        });
     // }
    },
  },
};
</script>

<style scoped>
#CustomerDeposit {
  width: 400px;
  height: 250px;
  background-color: #ffffff;
}
.depo {
  width: 400px !important;
  height: 200px !important;
  padding: 10px;
  overflow: hidden;
}
.deposi-text {
  width: 400px !important;
  height: 40px !important;
  text-align: center;
  padding: 10px 0px;
  color: red;
  
}
.from-deposit {
  margin-top: 10px;
  display: flex;
  width: 400px;
  padding: 10px 25px;
}
.text-depo {
  width: 110px;
  margin-top: 3px;
}
.input-deposit {
  height: 32px !important;
  font-size: small !important;
}
.footer-noti {
  height: 50px;
  background-color: #dedede;
}
.footer-noti button {
  float: right;
  /* padding: 10px; */
  margin: 10px;
  height: 32px !important;
  line-height: 32px !important;
}
.text-tutorial {
  width: 100%;
  text-align: center;
  font-size:smaller;
  color: red;
  margin-bottom: 15px;
}
</style>