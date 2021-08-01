<template>
  <div class="NotiMsg" :class="{ 'dialog-hide': !hideinforBookingFoot }">
    <div class="model"></div>
    <div class="bookingfoot">
      <div class="bfoot-title">Thông Tin Đặt Bàn</div>
      <div class="bfoot-content">
        <div class="bfoot-item">Thời gian đặt bàn: {{ bookingDateTime(InforBookingFoot.bookingTime) }}</div>
        <div class="bfoot-item">Số người: {{ InforBookingFoot.totalSeats }} </div>
        <div class="bfoot-item">Ghi Chú: {{ InforBookingFoot.note }} </div>
        <div class="bfoot-item">Số tiền phải trả: {{ InforBookingFoot.priceBooking }}</div>
      </div>
      <div class="bfoot-text">Bạn có đồng ý với số tiền đặt cọc này?</div>
      <div class="bfoot-footer">
        <button class="btn-default btn-dTable" @click="hideBookingFootonClick()">
          Hủy
        </button>
        <!-- <router-link class="cFoot" to="/choose-foot"> -->
          <button class="btn-default btn-bTable" @click="BookingFootOnClick()">
            Đồng ý
          </button>
        <!-- </router-link> -->
      </div>
      <div class="bfoot-footer-title">Hoặc gọi tới <span>19000009</span></div>
      <div class="bfoot-footer-title">để đặt chỗ và được tư vấn</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "infor-booking-foot",
  props: {
    hideinforBookingFoot: {
      type: Boolean,
      default: false,
    },
    InforBookingFoot: {
        type: Object,
        default: null
    }
  },
  data() {
    return {
      bookingId: "",
      base_url: process.env.VUE_APP_BASE_URL,
    };
  },
  methods: {
    hideBookingFootonClick() {
      this.$emit("hideBookingFoot");
    },
    BookingFootOnClick() {
      axios({
        method: "post",
        url: `${this.base_url}/api/customer/booking`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get('token')}`,
        },
        data: {
          bookingTime:  this.bbookingTime,
          totalSeats: this.InforBookingFoot.totalSeats,
        },
      })
        .then((response) => {
          if (response.status == 200 && response.data.statusCode == 'SUCCESS') {
            this.bookingId = response.data.message;
            this.$emit("bookingId" , this.bookingId)
            console.log(this.bookingId);
            this.$router.push({ name: "Chọn món ăn" }).catch((err) => {
              return err;
            });
            this.$emit("ChooseFootBooking");
          }
        })
        .catch((error) => {
          console.log(error.response);
         // console.log(this.abookingTime);
        });
      
    },
    bookingDateTime (datetime) {
      let a = datetime
      let b = a.slice(0,10)
      let c = a.slice(11,16)
      return b + " " + c +":00"
    }
  },
  computed: {
    bbookingTime () {
      let a = this.InforBookingFoot.bookingTime
      let b = a.slice(0,10)
      let c = a.slice(11,16)
      return b + " " + c +":00"
    }
  }
};
</script>

 <style scoped>
.bookingfoot {
  padding: 5px;
  position: fixed;
  top: 30%;
  left: 40%;
  width: 400px;
  height: 450px;
  border-radius: 4px;
  background-color: #ffffff;
  align-items: center;
}
.model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.4;
}
.bfoot-title {
  width: 100%;
  height: 50px;
  text-align: center;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  padding-top: 10px;
}
.bfoot-text {
  width: 100%;
  height: 30px;
  text-align: center;
  color: #808080;
  font-size: 13px;
}
.bfoot-content {
  width: 100%;
  height: 240px;
}
.bfoot-item {
  width: 100%;
  height: 60px;
  align-items: center;
  padding: 12px 47px;
  margin-left: 10px;
  font-size: small;
}
.dialog-input {
  width: 272px !important;
  height: 32px !important;
}

.bfoot-footer {
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.btn-default {
  height: 34px !important;
  line-height: 34px !important;
  margin: 40px;
}
.bfoot-footer-title {
  width: 100%;
  height: 30px;
  color: #888787;
  font-size: 13px;
  text-align: center;
  align-items: center;
}
.bfoot-footer-title span {
  color: #d02028;
  font-size: 18px;
}
</style>