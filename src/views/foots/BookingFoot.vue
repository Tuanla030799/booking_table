<template>
  <div class="NotiMsg" :class="{ 'dialog-hide': !hideBookingFoots }">
    <div class="model"></div>
    <div class="bookingfoot">
      <div class="bfoot-title">Đặt Bàn Với Nhiều Ưu Đãi!</div>
      <div class="bfoot-text">Nên đặt trước khi đến 30 phút</div>
      <div class="bfoot-content">
        <div class="bfoot-item">
          <input
              type="datetime-local"
              id="DateBooking"
              class="dialog-input"
              v-model="InforBooking.bookingTime"
        />
        </div>
        <div class="bfoot-item">
          <input
              type="text"
              id="NumberPeople"
              class="dialog-input"
              placeholder="Số lượng người"
              v-model="InforBooking.totalSeats"
            />
        </div>
        <!-- <div class="bfoot-item">
         <input
              type="text"
              id="NumberBank"
              class="dialog-input"
              placeholder="Số tài khoản"
            />
        </div> -->
        <div class="bfoot-item">
           <input
              type="text"
              id="txtNote"
              class="dialog-input note"
              placeholder="Ghi chú"
              v-model="InforBooking.note"
              
            />
        </div>
        
       
      </div>
      <div class="bfoot-footer">
        <button class="btn-default btn-dTable" @click="hideBookingonClick()">Hủy</button>
        <!-- <router-link class="cFoot" to="/choose-foot"> -->
          <button class="btn-default btn-bTable" @click="BookingFootOnClick()">Đặt bàn</button> 
        <!-- </router-link>     -->
      </div>
      <div class="bfoot-footer-title">Hoặc gọi tới <span>19000009</span></div>
      <div class="bfoot-footer-title">để đặt chỗ và được tư vấn</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "booking-foot",
  props: {
      hideBookingFoots: {
          type: Boolean,
          default: false
      },
  },
  data() {
    return {
      InforBooking: {
        bookingTime : "",
        totalSeats: "",
        note: "",
        priceBooking: ""
      },
      showMessageError: "d-block",
      base_url: process.env.VUE_APP_BASE_URL,
      //token: sessionStorage.getItem("token"),
    }
  },
  methods: {
    hideBookingonClick(){
      this.$emit("hideBooking")
      this.InforBooking = {}
    },
    BookingFootOnClick(){
     // console.log(this.token);
      axios({
        method: "post",
        url: `${this.base_url}/api/customer/get-deposit`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get('token')}`,
        },
        data: {
          bookingTime:  this.abookingTime,
          totalSeats: parseInt(this.InforBooking.totalSeats) ,
          note: this.InforBooking.note,
        },
      })
        .then((response) => {
          if (response.status == 200 && response.data.statusCode == 'SUCCESS') {
            this.InforBooking.priceBooking = response.data.message;
            console.log(this.InforBooking.priceBooking);
            this.$emit("hideBooking")
            this.$emit("showInforBooking", this.InforBooking)
            this.InforBooking = {}

          }
        })
        .catch((error) => {
          console.log(error.response.data);
          //alert(error.response.data.message)
          localStorage.setItem("message", error.response.data.message);
          localStorage.setItem("isIcon", "error");
          this.$emit("showMessage", this.showMessageError)
          //alert(error.response.data.message)

        });
      //console.log(url);
      
    }
  },
  computed: {
    abookingTime () {
      let a = this.InforBooking.bookingTime
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
  top: 25%;
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
  margin-top: 25px;
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
  color: #D02028;
  font-size: 18px;
}
.note {
  resize: none;
}
</style>