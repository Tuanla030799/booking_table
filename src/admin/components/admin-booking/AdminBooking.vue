<template>
  <v-container class="booking">
    <v-card elevation="10">
      <v-card-title>
        Danh sách bàn đặt
        <v-spacer></v-spacer>
        <!--        <v-text-field-->
        <!--            v-model="search"-->
        <!--            append-icon="mdi-magnify"-->
        <!--            label="Search"-->
        <!--            single-line-->
        <!--            hide-details-->
        <!--        ></v-text-field>-->
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="listBooking"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.bookingId">
            <td>{{ item.bookingId }}</td>
            <td>{{ item.deposit }}</td>
            <td>{{ item.moneyPay }}</td>
            <td>{{ item.bookingStatus }}</td>
            <td>{{ item.bookingTime }}</td>
            <td>{{ item.refund }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td>
              <v-btn
                  color="info"
                  dark
                  @click="handleGetBookingDetail(item.bookingId)"
              >
                <v-icon dark>
                  mdi-clipboard-edit-outline
                </v-icon>

              </v-btn>
            </td>
          </tr>
          </tbody>

        </template>

      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" max-width="70%">
      <v-container>
        <v-card elevation="10">
          <v-card-title>
            Chi Tiết Đặt Bàn
            <v-spacer></v-spacer>
            <v-btn color="error" @click="handleCloseDialog">
              <v-icon>
                mdi-close-circle-outline
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
                <v-row>
                  <v-col cols="3" sm="3">
                    <v-text-field
                        readonly
                        rounded
                        label="Mã Đặt Bàn"
                        v-model="bookingDetail.bookingId"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="3" sm="3">
                    <v-text-field
                        label="Bàn"
                        rounded
                        v-model="bookingDetail.tableName"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="3" sm="3">
                    <v-text-field
                        rounded
                        label="Tổng Số Người"
                        v-model="bookingDetail.totalSet"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="3" sm="3">
                    <v-text-field
                        rounded
                        label="Tiền Đặt Cọc"
                        v-model="bookingDetail.deposit"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" sm="3">
                    <v-text-field
                        rounded
                        label="Phần Trăm"
                        v-model="bookingDetail.percentSale"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="3" sm="3">
                    <v-text-field
                        rounded
                        label="Tổng Tiền Món Ăn "
                        v-model="bookingDetail.sumMoneyFood"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="3" sm="3">
                    <v-text-field
                        rounded
                        label="Tổng Tiền"
                        v-model="bookingDetail.totalMoney"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="3" sm="3">
                    <v-text-field
                        rounded
                        label="Thời Gian Thanh Toán"
                        v-model="bookingDetail.payDate"
                    >
                    </v-text-field>
                  </v-col>
<!--                  <v-col cols="3" sm="3">-->
<!--                    <v-text-field-->
<!--                        rounded-->
<!--                        label="Trạng Thái"-->
<!--                        v-model="bookingDetail.status"-->
<!--                    >-->
<!--                    </v-text-field>-->
<!--                  </v-col>-->
                  <v-col cols="3" sm="3">
                    <v-text-field
                        rounded
                        class="test"
                        label="Thời Gian Đặt Bàn"
                        v-model="bookingDetail.bookingTime"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-container>
                      <template v-if="bookingDetail.listFoodInBookings && bookingDetail.listFoodInBookings.length===0 ">
                        <v-row >
                          <v-col cols="10" sm="10">
                            <v-card-title>
                              KHÁCH HÀNG CHƯA ĐẶT MÓN ĂN
                            </v-card-title>
                          </v-col>
                          <v-col cols="2" sm="2">
                            <v-btn color="info">
                              <v-icon>
                                mdi-tag-plus
                              </v-icon>
                              THÊM MÓN ĂN
                            </v-btn>
                          </v-col>
                        </v-row>
                      </template>
                      <template v-else>
                        <v-row>
                          <v-col cols="10" sm="10">
                            <v-card-title>
                              DANH SÁCH MÓN ĂN
                            </v-card-title>
                          </v-col>
                          <v-spacer></v-spacer>
                          <v-col cols="2" sm="2">
                            <v-btn color="info">
                              <v-icon>
                                mdi-tag-plus
                              </v-icon>
                              THÊM MÓN ĂN
                            </v-btn>
                          </v-col>
                        </v-row>
                        <v-data-table
                            :headers="headerFoods"
                            :items="bookingDetail.listFoodInBookings"
                            class="scroll-y-transition"
                        >
                          <template v-slot:body="{items}">
                            <tbody>
                            <tr v-for="item in items" :key="item.foodId">
                              <td>{{ item.stt }}</td>
                              <td>{{ item.foodName }}</td>
                              <td>{{ item.price }}</td>
                              <td>{{ item.set }}</td>
                              <td>{{ item.money }}</td>
                            </tr>
                            </tbody>
                          </template>
                        </v-data-table>
                      </template>
                    </v-container>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="" sm="2">
                    <v-btn color="error" left @click="handleOpenCancelBooking">
                      <v-icon dark>
                        mdi-cancel
                      </v-icon>
                      HỦY ĐẶT BÀN
                    </v-btn>
                  </v-col>
                  <v-col cols="2" sm="2">
                    <v-btn color="info">
                      <v-icon>
                        mdi-checkbox-marked-circle
                      </v-icon>
                      THANH TOÁN
                    </v-btn>
                  </v-col>
                </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </v-dialog>
    <v-dialog v-model="dialogCancel" max-width="300px" class="dialog_cancel">
      <v-card>
        <v-card-title>
          XÁC NHẬN HỦY ĐẶT BÀN
        </v-card-title>
        <v-card-actions >
          <v-btn color="error"
                 @click="handleCancelBookingByBookingId(bookingDetail.bookingId)">
            <v-icon>
              mdi-checkbox-marked-circle
            </v-icon>
            XÁC NHẬN
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info"
                 @click="handleCloseCancelBooking">

            <v-icon>
              mdi-minus-circle
            </v-icon>
            HỦY
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminBooking",
  data() {
    return {

      dialog: false,
      dialogCancel: false,
      headerFoods: [
        {text: 'Số Thứ Tự', value: 'stt'},
        {text: 'Tên Món Ăn', value: 'foodName'},
        {text: 'Giá Món Ăn', value: 'price'},
        {text: 'Số Lượng', value: 'set'},
        {text: 'Thành Tiền', value: 'money'},
      ],
      headers: [
        {text: 'Mã Đặt Bàn', value: 'bookingId'},
        {text: 'Tiền Đặt Cọc', value: 'deposit'},
        {text: 'Tiền Đã Thanh Toán', value: 'moneyPay'},
        {text: 'Trạng Thái', value: 'bookingStatus'},
        {text: 'Thời Gian Đặt Bàn', value: 'bookingTime'},
        {text: 'Hoàn Tiền', value: 'refund'},
        {text: 'Email Khách Hàng', value: 'email'},
        {text: 'Số Điện Thoại', value: 'phoneNumber'},
        {text: 'Chi Tiết', value: 'actions', sortable: false},
      ],
    }
  },
  computed: {
    ...mapGetters({
      listBooking: 'getBookingTables',
      bookingDetail: 'getBookingDetail'
    }),
  },
  methods: {
    ...mapActions({
      getListBookingTables: 'getBookingTables',
      getBookingDetails: 'getBookingTableById',
      cancelBookingByBookingId: 'cancelBookingById'
    }),
    handleCancelBookingByBookingId(bookingId) {
      this.dialogCancel = false
      this.dialog = false
      this.cancelBookingByBookingId({bookingId})
      this.loadPage()
    },
    handleGetListBookingTables() {
      this.getListBookingTables()
    },
    async handleGetBookingDetail(bookingId) {
      this.dialog = true
      await this.getBookingDetails(bookingId)
    },
    loadPage() {
      location.reload()
    },
    handleOpenCancelBooking() {
      this.dialogCancel = true
    },
    handleCloseCancelBooking() {
      this.dialogCancel = false
    },
    handleCloseDialog() {
      this.dialog = false
    },
    handleRestForm() {
      this.bookingDetail.deposit = ''
      this.bookingDetail.bookingTime = ''
      this.bookingDetail.totalSet = ''
      this.bookingDetail.totalMoney = ''
    }
  },
  created() {
    this.handleGetListBookingTables()
  }


}
</script>

<style scoped>
@import "../../../style/layout/content.css";

.booking {
  margin: 0 auto;
  width: 90%;

}

.ct__datban {
  text-transform: uppercase;
}

.v-dialog > * {
  width: 100%;
  background-color: #FAFAFA;
}

</style>