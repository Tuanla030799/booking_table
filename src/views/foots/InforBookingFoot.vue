<template>
  <div class="NotiMsg" :class="{ 'dialog-hide': !hideinforBookingFoot }">
    <div class="model"></div>
    <div class="bookingfoot">
      <div class="bfoot-title">Thông Tin Đặt Bàn</div>
      <div class="bfoot-content">
        <div class="bfoot-item">Thời gian đặt bàn: {{ InforBookingFoot.bookingTime }}</div>
        <div class="bfoot-item">Số người: {{ InforBookingFoot.totalSeats }} </div>
        <div class="bfoot-item">Ghi Chú: {{ InforBookingFoot.note }} </div>
        <div class="bfoot-item">Số tiền phải trả:</div>
      </div>
      <div class="bfoot-text">Bạn có đồng ý với số tiền đặt cọc này?</div>
      <div class="bfoot-footer">
        <button class="btn-default btn-dTable" @click="hideBookingFootonClick()">
          Hủy
        </button>
        <router-link class="cFoot" to="/choose-foot">
          <button class="btn-default btn-bTable" @click="BookingFootOnClick()">
            Đồng ý
          </button>
        </router-link>
      </div>
      <div class="bfoot-footer-title">Hoặc gọi tới <span>19000009</span></div>
      <div class="bfoot-footer-title">để đặt chỗ và được tư vấn</div>
    </div>
  </div>
</template>

<script>
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
    return {};
  },
  methods: {
    hideBookingFootonClick() {
      this.$emit("hideBookingFoot");
    },
    BookingFootOnClick() {
      this.$emit("hideBookingFoot");
    },
  },
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