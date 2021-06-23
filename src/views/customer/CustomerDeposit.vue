<template>
  <v-dialog v-model="depositDialog" width="400px" height="250px">
    <div id="CustomerDeposit">
      <div class="depo">
        <div class="deposi-text">Nạp Tiền Online</div>
        <div class="from-deposit">
          <div class="text-depo">Số điện thoại:</div>
          <div class="input-deposit">
            <input type="text" class="input-deposit" v-model="dataObj.phoneNumber">
          </div>
        </div>
        <div class="from-deposit">
          <div class="text-depo">Mã code:</div>
          <div class="input-deposit">
            <input type="text" class="input-deposit">
          </div>
        </div>
      </div>
      <div class="footer-noti">
        <button class="btn-default" @click="depositOnclick()">Nạp</button>
        <button class="btn-default" @click="CloseOnClick()">Hủy</button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "customer-deposit",
  data() {
    return {};
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
</style>