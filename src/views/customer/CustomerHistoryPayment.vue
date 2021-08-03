<template>
  <div class="cHistory-bum">
    <div class="CustomerHistory">
      <div class="history-text">
        <router-link to="Home" style="text-decoration: none">
          <span class="text-home">Trang chủ</span>
        </router-link>
        <span> > </span>
        <span style="color: red">Lịch sử nạp tiền</span>
      </div>
      <div class="cHistory">
        <div class="cHistory-table">
          <div class="grid-table">
            <table id="tblHistory" class="table" width="100%" border="0">
              <thead>
                <tr>
                  <th>Mã nạp tiền</th>
                  <th>Số điện thoại</th>
                  <th>Code</th>
                  <th>Số tiền nạp</th>
                  <th>Trạng thái</th>
                  <th>Ngày nạp</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="ListPaymentHistory in ListPaymentHistorys"
                  :key="ListPaymentHistory.id"
                >
                  <td>{{ ListPaymentHistory.id }}</td>
                  <td>{{ ListPaymentHistory.phoneNumber }}</td>
                  <td>{{ ListPaymentHistory.code }}</td>
                  <td>{{ listHistory.money }}</td>
                  <td :style="colorStatus(listHistory.status)">{{ listHistory.status }}</td>
                  <td>{{ listHistory.created }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.loadPaymentHistory();
  },
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
      dialogdetail: false,
      ListPaymentHistorys: [],
      historyDetailId: {},
      bookingStatus: "d-none",
      BillBooking: "d-none",
      notiDialog: false,
      notificationDialog: false,
      notificationMessage: "",
      showMessageError: "d-block",
      color: "color:red"
    };
  },
  methods: {
    loadPaymentHistory() {
      axios({
        method: "get",
        url: `${this.base_url}/api/customer/charging-history`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            this.ListPaymentHistorys = response.data;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    colorStatus(status) {
      if (status == "Y/c xác nhận") {
        return this.color = "color:blue"
      } else if (status == "Thành công") {
        return this.color = "color:green"
      }
       else {
        return this.color = "color:red"
      }
    }
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
