<template>
  <div class="cHistory-bum">
    <div class="CustomerHistory">
      <div class="history-text">
        <router-link to="Home" style="text-decoration: none">
          <span class="text-home">Trang chủ</span>
        </router-link>
        <span> > </span>
        <span style="color: red">Thông tin tài khoản</span>
      </div>
      <div class="cHistory">
        <div class="cHistory-table">
          <div class="grid-table">
            <table id="tblHistory" class="table" width="100%" border="0">
              <thead>
                <tr>
                  <th>Stt</th>
                  <th>Mã đặt bàn</th>
                  <th>Thời gian đặt</th>
                  <th>Tiền cọc</th>
                  <th>Tổng hóa đơn</th>
                  <th>Trạng thái</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="listHistory in ListHistorys"
                  :key="listHistory.BookingId"
                >
                  <td>{{ listHistory.stt }}</td>
                  <td>{{ listHistory.bookingId }}</td>
                  <td>{{ listHistory.bookingTime }}</td>
                  <td>{{ listHistory.deposit }}</td>
                  <td>{{ listHistory.moneyPay }}</td>
                  <td :style="colorStatus(listHistory.bookingStatus)">
                    {{ listHistory.bookingStatus }}
                  </td>
                  <!-- <td>
                    <div class="Edit">
                      <div class="btn-edit">
                        <button
                          class="button-text button-table-text"
                          @click="btnEditClick(employee.employeeId)"
                        >
                          Sửa
                        </button>
                        <div
                          class="icon-nav arrow-icon icon-arrow-up"
                          @click="showEditClick(employee.employeeId)"
                        ></div>
                      </div>
                      <div
                        class="editDialog"
                        :class="{
                          'dialog-hide': !checkEdit(employee.employeeId),
                        }"
                      >
                        <div class="dialogEdit">
                          <button class="btn-edittable btn-mul">
                            Nhân bản
                          </button>
                          <button
                            class="btn-edittable btn-delete"
                            @click="btnDeleteCode()"
                          >
                            Xóa
                          </button>
                          <button class="btn-edittable btn-use">
                            Ngừng sử dụng
                          </button>
                        </div>
                      </div>
                    </div>
                  </td> -->
                  <td>
                    <button
                      @click="
                        clickOnDetail(
                          listHistory.bookingId,
                          listHistory.bookingStatus,
                          listHistory.listFoodInBookings
                        )
                      "
                      class="btn-detail"
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <customer-history-detail
      :dialog="dialogdetail"
      @closeDialog="closeDialog"
      :cHistoryDetail="historyDetailId"
      :statusBooking="bookingStatus"
      :PayBillBooking="BillBooking"
      @payBill="payBill"
      @bookingFoot="bookingFoot"
      @cDialogNoti="cDialogNoti"
      @payBillSuss="payBillSuss"
      @payBillError="payBillError"
    />
    <CustomerValiDestroy
      :dialogNoti="notiDialog"
      @closeCNoti="closeCNoti"
      :cNoti="historyDetailId"
      @closeCNotiHide="closeCNotiHide"
    />
    <Customernotification
      :dialognotification="notificationDialog"
      :notification="notificationMessage"
      @closeNotification="closeNotification"
    />
  </div>
</template>

<script>
import axios from "axios";
import CustomerHistoryDetail from "../customer/CustomerHistoryDetail.vue";
import CustomerValiDestroy from "../customer/CustomerValiDestroy.vue";
import Customernotification from "../customer/Customernotification.vue";
export default {
  created() {
    this.loadBookingHistory();
  },
  components: {
    CustomerHistoryDetail,
    CustomerValiDestroy,
    Customernotification,
  },
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
      dialogdetail: false,
      ListHistorys: [],
      historyDetailId: {},
      bookingStatus: "d-none",
      BillBooking: "d-none",
      notiDialog: false,
      notificationDialog: false,
      notificationMessage: "",
      showMessageError: "d-block",
      color: "color:red",
    };
  },
  methods: {
    loadBookingHistory() {
      axios({
        method: "get",
        url: `${this.base_url}/api/customer/booking-history`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            this.ListHistorys = response.data;
            console.log(this.ListHistorys);
          }
        })
        .catch((error) => {
          //console.log(error.response.data);

          setTimeout(function () {
            this.$router.push({ name: "Home" }).catch((err) => {
              return err;
            });
          }, 2000);
          
          localStorage.setItem("message", error.response.data.message);
          localStorage.setItem("isIcon", "error");
          this.$emit("showMessage", this.showMessageError);
          location.reload();
        });
    },
    clickOnDetail(Id, Status, listFoot) {
      axios({
        method: "get",
        url: `${this.base_url}/api/customer/booking-history-detail/` + Id,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            this.historyDetailId = response.data;
            this.dialogdetail = true;
            // console.log(listFoot);
            //console.log(this.historyDetailId)'
            if (Status == "Chưa thánh toán") {
              this.bookingStatus = "d-block";
            } else {
              this.bookingStatus = "d-none";
            }
            if (Status == "Chưa thánh toán" && listFoot.length > 0) {
              this.BillBooking = "d-block";
            } else {
              this.BillBooking = "d-none";
            }
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });

      // this.historyDetailId = Id
      // console.log(this.historyDetailId);
    },
    closeDialog() {
      this.dialogdetail = false;
      this.$emit("isLoader");
      this.loadBookingHistory();
    },
    payBill() {
      this.dialogdetail = false;
      this.$emit("isLoader");
      this.loadBookingHistory();
    },
    cDialogNoti() {
      this.dialogdetail = false;
      this.notiDialog = true;
    },
    closeCNotiHide() {
      this.notiDialog = false;
    },
    closeCNoti(message) {
      this.notiDialog = false;
      this.notificationDialog = true;
      this.notificationMessage = message;
    },
    closeNotification() {
      this.notificationDialog = false;
      this.loadBookingHistory();
    },
    bookingFoot(Id) {
      this.dialogdetail = false;
      this.$emit("footBooking", Id);
      this.$router.push({ name: "Chọn món ăn" }).catch((err) => {
        return err;
      });
    },
    payBillSuss(BillSuss) {
      localStorage.setItem("message", BillSuss);
      localStorage.setItem("isIcon", "susccess");
      this.$emit("showMessage", this.showMessageError);
    },
    payBillError(BillErorr) {
      localStorage.setItem("message", BillErorr);
      localStorage.setItem("isIcon", "error");
      this.$emit("showMessage", this.showMessageError);
    },
    colorStatus(status) {
      if (status == "Chưa thánh toán") {
        return (this.color = "color:black");
      } else if (status == "Chờ admin xác nhận") {
        return (this.color = "color:blue");
      } else if (status == "Đã thanh toán") {
        return (this.color = "color:green");
      } else {
        return (this.color = "color:red");
      }
    },
  },
};
</script>

<style scoped>
.cHistory-bum {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: 0; */
  height: 660px;
  background: #eee;
}
.CustomerHistory {
  width: 80%;
  margin: 20px 10%;
  height: 600px;
  padding: 20px 50px;
  background: #ffffff;
}
@media only screen and (max-width: 1200px) {
  /* For mobile phones: */

  .CustomerHistory {
    margin: 0 0;
  }
  /* .CustomerHistory{
    right: 0.1%;
  } */
  .CustomerHistory {
    width: 99.8%;
  }
}
.history-text {
  width: 100%;
  padding: 5px;
  /* border: 1px solid #ccc; */
}
.history-text .text-home {
  color: #555555;
  cursor: pointer;
}
.history-text .text-home:hover {
  color: red;
}
.cHistory {
  display: flex;
  margin-top: 25px;
  width: 100%;
  height: 100%;
  /* border: 1px solid #ccc; */
}
.cHistory-table {
  margin-left: 1%;
  width: 98%;
  height: 481px;
  /* background: rgba(0, 0, 0, 0.02); */
}

.grid-table {
  width: 100%;
  height: 481px;
  overflow-y: auto;
  overflow-x: hidden;
  /* background-color: #F8F8F8; */
}
#tblHistory th {
  background-color: #f1f1f1;
  font-weight: 600;
}
#tblHistory td {
  border: 1px dashed #ddd;
  text-align: center;
  /* padding: 8px; */
}
#tblHistory tr:hover {
  background: #f7f7f7;
}
#tblHistory th {
  border-left: 1px solid #ddd;
}
.btn-detail:hover {
  color: red;
}
</style>>
