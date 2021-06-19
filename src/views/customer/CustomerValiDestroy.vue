<template>
  <v-dialog v-model="dialogNoti" width="370px" height="170px">
    <div id="Noti-Customer">
      <div class="noti-text">
        <v-icon large class="mb-1 px-3" color="red">mdi-alert</v-icon>
        <div class="text-noti">Bạn có muốn hủy đặt bàn này ?</div>
      </div>
      <div class="footer-noti">
        <button class="btn-default" @click="destroyBooking()">Có</button>
        <button class="btn-default" @click="closeBooking()">không</button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "customer-dialognoti",
  data() {
    return {
        base_url: process.env.VUE_APP_BASE_URL,
    };
  },
  props: {
    dialogNoti: {
      type: Boolean,
      default: true,
    },
    cNoti: {
        type: Object,
      default: null,
    }
  },
  methods: {
    destroyBooking() {
     axios({
        method: "post",
        url: `${this.base_url}/api/customer/cancel-booking`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
        data: {
            bookingId: this.cNoti.bookingId
          },
      })
        .then((response) => {
          if (response.status == 200) {
            this.$emit("closeCNoti", response.data.message)
            console.log(this.cNoti.bookingId);
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$emit("closeCNoti", error.response.data.message)
        });
    },
    closeBooking() {
        this.$emit("closeCNotiHide")
    }
  },
};
</script>

<style>
#Noti-Customer {
  height: 170px;
  width: 370px;
  background-color: #ffffff;
}
.noti-text {
  width: 100%;
  height: 110px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.text-noti {
  justify-content: center;
  margin: auto 0px;
}
.footer-noti {
  height: 60px;
  background-color: #dedede;
}
.footer-noti button {
  float: right;
  /* padding: 10px; */
  margin: 10px;
  height: 38px !important;
  line-height: 38px !important;
}
</style>