<template>
  <v-dialog v-model="dialog">
    <div id="hoadon">
      <div class="hoadon-model"></div>
      <div class="hoadon-content">
        <!-- <div class="hoadon-logo">
                <div class="logo-hoadon">
                    <div class="logo"></div>
                    <div class="logo-title">Nhà hàng xây dựng</div>
                </div>

                <div class="hoadon-infor">
                    <div class="infor sdt">0969 345 202</div>
                    <div class="infor diachi">Số 55-Giải Phóng-Hai Bà Trưng-Hà Nội</div>
                </div>
                
            </div> -->

        <div class="hoadon-text">
          <div class="text-title">CHI TIẾT ĐẶT BÀN</div>
          <div class="text-top">
            <div class="c-text-hoadon sophieu">
              Mã hóa đơn: <span> {{ this.cHistoryDetail.bookingId }}</span>
            </div>
            <div class="c-text-hoadon hoten">
              Số người: <span> {{ this.cHistoryDetail.totalSet }}</span>
            </div>
            <div class="c-text-hoadon tenban">
              Bàn số: <span> {{ this.cHistoryDetail.tableName }}</span>
            </div>
          </div>
          <div class="text-top">
            <div class="c-text-hoadon ngay">
              Ngày đặt: <span> {{ this.cHistoryDetail.bookingTime }}</span>
            </div>
            <div class="c-text-hoadon nhanvien">
              Ngày thanh toán: <span> {{ this.cHistoryDetail.payDate }}</span>
            </div>
          </div>
        </div>
        <div class="hoadon-table">
          <table id="table-hoadon">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Món</th>
                <th>Đơn Giá</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(listFoodInBooking, index) in this.cHistoryDetail
                  .listFoodInBookings"
                :key="index"
              >
                <td>{{ listFoodInBooking.stt }}</td>
                <td>{{ listFoodInBooking.foodName }}</td>
                <td>{{ listFoodInBooking.price }}</td>
                <td>{{ listFoodInBooking.set }}</td>
                <td>{{ listFoodInBooking.money }}</td>
              </tr>
              <!-- <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr> -->
            </tbody>
          </table>
        </div>
        <div class="hoadon-detail">
          <div class="text-hoadon">
            Tổng:
            <div class="text-money">{{ this.cHistoryDetail.sumMoneyFood }}</div>
          </div>
          <div class="text-hoadon">
            Đặt cọc:
            <div class="text-money">{{ this.cHistoryDetail.deposit }}</div>
          </div>
          <div class="text-hoadon giamgia">
            Giảm giá:
            <div class="text-money">
              <span style="color: red">{{
                this.cHistoryDetail.percentSale
              }}</span>
            </div>
          </div>
          <div class="text-hoadon">
            Tổng thu:
            <div class="text-money">{{ this.cHistoryDetail.totalMoney }}</div>
          </div>
        </div>
        <div class="button-bot">
          <button
            class="btn-default btn-destroy"
            :class="statusBooking"
            @click="destroyOnClick()"
          >
            Hủy đặt bàn
          </button>
          <button
            class="btn-default btn-bill"
            :class="PayBillBooking"
            @click="payBillOnClick()"
          >
            Thanh Toán
          </button>
          <button
            class="btn-default btn-bookingfoot"
            :class="statusBooking"
            @click="bookingFootOnClick()"
          >
            Đặt món
          </button>
          <button class="btn-default btn-close" @click="btnCloseOnClick()">
            Đóng
          </button>
          <!-- <button class="btn-default">Đóng</button> -->
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "customer-history-detail",
  created() {
    //   this.loadData()
  },
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
      customerHistoryDetail: {},
    };
  },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    cHistoryDetail: {
      type: Object,
      default: null,
    },
    statusBooking: {
      type: String,
      default: "d-block",
    },
    PayBillBooking: {
      type: String,
      default: "d-block",
    },
  },
  methods: {
    btnCloseOnClick() {
      this.$emit("closeDialog");
      console.log(this.cHistoryDetail);
    },
    payBillOnClick() {
      axios({
        method: "post",
        url: `${this.base_url}/api/customer/pay-bill`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
        data: {
          bookingId: this.cHistoryDetail.bookingId,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            this.$emit("payBill");
            this.$emit("payBillSuss" , response.data.message)
            //console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$emit("payBill");
          this.$emit("payBillError" , error.response.data.message)
        });
    },
    destroyOnClick() {
      this.$emit("cDialogNoti");
    },
    bookingFootOnClick() {
      this.$emit("bookingFoot", this.cHistoryDetail.bookingId);
    },
  },
};
</script>

<style scoped>


.hoadon-model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.1;
  min-height: 760px;
}

.hoadon-content {
  position: absolute;
  top: 20px;
  left: 30%;
  width: 40%;
  bottom: 20px;
  min-height: 500px;
  background-color: #ffffff;
}
@media only screen and (max-width: 1200px) {
  /* For mobile phones: */

  .hoadon-content {
    left: 20%;
  }
  /* .CustomerHistory{
    right: 0.1%;
  } */
  .hoadon-content {
    width: 607px;
  }
  .hoadon-table {
    width: 537px !important;
  }
  table {
    width: 527px !important;
  }
}
.hoadon-infor {
  font-size: medium;
  font-weight: 500;
  font-style: italic;
}

.infor {
  padding-top: 10px;
  padding-left: 10px;
}
.sdt {
  text-align: center;
}

/* thông tin hóa đơn 
//
//*/
.hoadon-text {
  position: absolute;
  top: 25px;
  left: 40px;
  right: 40px;
  height: 150px;
}

.text-title {
  font-size: large;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.text-top {
  display: flex;
}
.text-hoadon {
  font-size: small;
  text-align: left;
  padding: 10px;
}

.c-text-hoadon {
  font-size: small;
  text-align: left;
  padding: 10px 5px;
}
.sophieu {
  width: 48%;
}
.ngay {
  width: 48%;
}
.hoten {
  width: 100px;
  /* margin-left: 20%; */
}
.tenban {
  width: 100px;
  margin-left: 50px;
}
.nhanvien {
  /* margin-left: calc(20% + 20px); */
  width: 48%;
}

.giamgia {
  border-bottom: 1px solid #ccc;
}

/* table 
//
//*/

.hoadon-table {
  position: relative;
  top: 175px;
  left: 40px;
  width: 484px;
  height: 241px;
  margin-top: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}

.hoadon-detail {
  position: relative;
  top: 180px;
  left: 40px;
  right: 40px;
  height: 150px;
  width: calc(100% - 80px);
  margin-top: 10px;
}

table {
  border-collapse: collapse;
  width: 474px;
  font-size: small;
}

table tr {
  border-bottom: 1px solid #bbb;
  height: 48px !important;
}
/* table thead tr{
    border-top: 2px solid #bbb;
} */
table thead th {
  text-align: center;
  position: relative !important;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #bbb;
  box-shadow: 0 1px 1px -1px #bbb;
  background-color: #fcf54c;
}

table thead {
  border-bottom: 1px solid #bbb;
}

th,
td {
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

th:first-child,
th:last-child,
td:first-child,
td:last-child {
  padding-left: 5px;
}

table tr {
  cursor: pointer;
  height: 32px;
}
table tr:hover {
  background-color: #f0f0f0;
}
.text-money {
  float: right;
  margin-right: 7px;
}
.button-bot {
  position: relative;
  top: 190px;
  right: 0px;
  height: 50px;
  left: 0px;
  display: flex;
  justify-content: center;
  /* margin-top: 10px; */
}
.btn-default {
  margin: 0 5px;
}
</style>