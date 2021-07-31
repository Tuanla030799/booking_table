<template>
  <v-container fluid class="mt-0">
    <v-card elevation="10">
      <v-card-title>
        CHI TIẾT ĐĂT BÀN
      </v-card-title>
      <v-card>
        <v-row>
          <v-col cols="3" sm="3">
            <v-card-text>
              <v-form class="px-3">
                <v-text-field
                    readonly
                    rounded
                    label="Mã Đặt Bàn"
                    v-bind:value="bookingDetail.bookingId"
                >
                </v-text-field>
                <v-text-field
                    label="Bàn"
                    rounded
                    v-bind:value="bookingDetail.tableName"
                >
                </v-text-field>
                <v-text-field
                    rounded
                    label="Tổng Số Người"
                    v-bind:value="bookingDetail.totalSet"
                >
                </v-text-field>
                <v-text-field
                    rounded
                    label="Tiền Đặt Cọc"
                    v-bind:value="bookingDetail.deposit"
                >
                </v-text-field>
                <v-text-field
                    rounded
                    label="Phần Trăm"
                    v-bind:value="bookingDetail.percentSale"
                >
                </v-text-field>
                <v-text-field
                    rounded
                    label="Tổng Tiền Món Ăn "
                    v-bind:value="bookingDetail.sumMoneyFood"
                >
                </v-text-field>
                <v-text-field
                    rounded
                    label="Tổng Tiền"
                    v-bind:value="bookingDetail.totalMoney"
                >
                </v-text-field>
                <v-text-field
                    rounded
                    label="Thời Gian Thanh Toán"
                    v-bind:value="bookingDetail.payDate"
                >
                </v-text-field>
                <v-text-field
                    rounded
                    class="test"
                    label="Thời Gian Đặt Bàn"
                    v-bind:value="bookingDetail.bookingTime"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
          </v-col>
          <v-col cols="9" sm="9">
            <v-container>
              <template v-if="bookingDetail.listFoodInBookings && bookingDetail.listFoodInBookings.length===0 ">
                <v-card>
                  <v-card-title>
                    KHÁCH HÀNG CHƯA ĐẶT MÓN ĂN
                  </v-card-title>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <router-link tag="div" :to="{name:'booking-add-food', params:{bookingId:bookingDetail.bookingId}}">
                      <v-btn color="info"
                             v-bind:disabled="bookingDetail.status === 'Đã thanh toán' || bookingDetail.status === 'Đã hủy'">
                        <v-icon>
                          mdi-tag-plus
                        </v-icon>
                        THÊM MÓN ĂN
                      </v-btn>
                    </router-link>
                  </v-card-actions>
                </v-card>
              </template>
              <template v-else>
                <v-card>
                  <v-card-title>
                    DANH SÁCH MÓN ĂN
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <router-link tag="div"
                                   :to="{name:'booking-add-food', params:{bookingId:bookingDetail.bookingId}}">
                        <v-btn color="info"
                               v-bind:disabled="bookingDetail.status === 'Đã thanh toán' || bookingDetail.status === 'Đã hủy' || bookingDetail.status === 'Chờ admin xác nhận'">
                          <v-icon>
                            mdi-tag-plus
                          </v-icon>
                          THÊM MÓN ĂN
                        </v-btn>
                      </router-link>
                    </v-card-actions>
                  </v-card-title>
                  <v-data-table
                      :headers="headerFoods"
                      :items="bookingDetail.listFoodInBookings"
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
                </v-card>
              </template>
            </v-container>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" class="ml-5"
                 v-bind:disabled="bookingDetail.status === 'Đã thanh toán' || bookingDetail.status === 'Đã hủy'"
                 @click="handleOpenCancelBooking">
            <v-icon class="pr-3">
              mdi-cancel
            </v-icon>
            HỦY ĐẶT BÀN
          </v-btn>
          <v-btn color="info" class="ml-5" right
                 v-bind:disabled="bookingDetail.status === 'Đã thanh toán' || bookingDetail.status === 'Đã hủy'"
                 @click="handleOpenPayByBookingId"
          >
            <v-icon class="pr-3">
              mdi-checkbox-marked-circle
            </v-icon>
            THANH TOÁN
          </v-btn>
          <v-btn color="info" class="ml-5" right
                 v-bind:disabled="bookingDetail.status === 'Đã thanh toán' || bookingDetail.status === 'Đã hủy'"
                 @click="handleExportBill"
          >
            <v-icon class="pr-3">
              mdi-checkbox-marked-circle
            </v-icon>
            XUẤT HÓA ĐƠN
          </v-btn>
          <router-link :to="{name:'bookings'}" tag="div">
            <v-btn color="info" class="ml-5" right>
              <v-icon class="pr-3">
                mdi-arrow-left-thin-circle-outline
              </v-icon>
              QUAY LẠI
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-card>
    <v-dialog v-model="dialogCancel" max-width="300px" class="dialog_cancel">
      <v-card>
        <v-card-title>
          XÁC NHẬN HỦY ĐẶT BÀN
        </v-card-title>
        <v-card-actions>
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
    <v-dialog v-model="dialogPay" max-width="300px" class="dialog_cancel">
      <v-card>
        <v-card-title>
          XÁC NHẬN THANH TOÁN
        </v-card-title>
        <v-card-actions>
          <v-btn color="error"
                 @click="handlePayByBookingId(bookingDetail.bookingId)">
            <v-icon>
              mdi-checkbox-marked-circle
            </v-icon>
            XÁC NHẬN
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info"
                 @click="handleClosePayByBookingId">

            <v-icon>
              mdi-minus-circle
            </v-icon>
            HỦY
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
        v-model="snackbar.status"
        :timeout="snackbar.timeout"
        :color="snackbar.color"
        top
        right
        :transition="snackbar.transition"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            dark
            text
            v-bind="attrs"
            @click="snackbar.status = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminBookingDetail",
  data() {
    return {
      dialogCancel: false,
      dialogPay: false,
      dialogNotification: true,
      snackbar: {
        status: false,
        text: 'Huỷ đặt bàn thành công !',
        color: 'success',
        timeout: '5000',
        transition: 'fab-transition'
      },
      headerFoods: [
        {text: 'Số Thứ Tự', value: 'stt'},
        {text: 'Tên Món Ăn', value: 'foodName'},
        {text: 'Giá Món Ăn', value: 'price'},
        {text: 'Số Lượng', value: 'set'},
        {text: 'Thành Tiền', value: 'money'},
      ],
      bookingId: this.$route.params.bookingId
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route'(to, from) {
      this.bookingId = to.params.bookingId
      console.log('bookingID :: ', this.bookingId)
      this.getBookingDetailByBookingId(this.bookingId)
    }
  },
  computed: {
    ...mapGetters({
      bookingDetail: 'getBookingDetail',
      listFoods: 'getListFoodByBookingId'
    })
  },
  methods: {
    ...mapActions({
      getBookingDetailByBookingId: 'getBookingTableById',
      cancelByBookingId: 'cancelBookingById',
      payByBookingId: 'payBookingTableByBookingId',
      exportBill: 'exportBillForCustomerByBookingId'
    }),
    handleExportBill() {
      this.exportBill(this.bookingId)
    },
    handleOpenPayByBookingId() {
      this.dialogPay = true
    },
    handleClosePayByBookingId() {
      this.dialogPay = false
    },
    handlePayByBookingId() {
      this.payByBookingId(this.bookingId)
      this.dialogPay = false
    },
    handleOpenCancelBooking() {
      this.dialogCancel = true
    },
    handleCancelBookingByBookingId(bookingId) {
      this.cancelByBookingId({bookingId})
      this.snackbar.status = true
      this.dialogCancel = false
    },
    handleGetBookingDetailByBookingId() {
      this.getBookingDetailByBookingId(this.bookingId)
    },
    handleCloseCancelBooking() {
      this.dialogCancel = false
    }
  },
  created() {
    this.handleGetBookingDetailByBookingId()
  }
}
</script>

<style scoped>
.notification-enter-active {
  transition: all .3s ease;
}

.notification-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.notification-enter, .notification-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>