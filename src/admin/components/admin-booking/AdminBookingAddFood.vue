<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" sm="4">
        <v-card>
          <v-card-title>
            Danh sách món ăn {{ bookingDetail.tableName }}
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
      </v-col>
      <v-col cols="8" sm="8">
        <v-card>
          <v-card-title>
            Danh Sách Món Ăn Của Nhà Hàng
          </v-card-title>
          <v-container>
            <v-row >
              <v-col cols="3" v-for="item in listFoods" :key="item.foodId">
                <v-card>
                  <v-img
                      :src="item.foodImage"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="150px"
                  >
                    <v-card-title v-text="item.foodName">
                    </v-card-title>
                  </v-img>
                  <v-card-actions>
                    <v-btn color="primary" @click="handleGetFoodDetailByFoodId(item.foodId)">
                      <v-icon class="mr-2">
                        mdi-cart-arrow-down
                      </v-icon>
                      THÊM
                    </v-btn>
                    <v-card-text v-text="item.foodPrice"></v-card-text>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogAdd" max-width="400px">
      <v-card>
        <v-card-title>
          Thêm Món ăn
        </v-card-title>
        <v-card >
          <v-card-text>
            <v-text-field label="Số Lượng" v-model.number="quantity"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
                @click="handleAddFoodToBooking(bookingId, foodDetail.foodId,quantity)">
              XÁC NHẬN
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AdminBookingAddFood",
  data() {
    return {
      dialogAdd: false,
      headerFoods: [
        {text: 'Số Thứ Tự', value: 'stt'},
        {text: 'Tên Món Ăn', value: 'foodName'},
        {text: 'Giá Món Ăn', value: 'price'},
        {text: 'Số Lượng', value: 'set'},
        {text: 'Thành Tiền', value: 'money'},
      ],
      bookingId: this.$route.params.bookingId,
      foodId: '',
      quantity: ''
    }
  },
  computed: {
    ...mapGetters({
      bookingDetail: 'getBookingDetail',
      listFoods: 'getListFoods',
      foodDetail: 'getFoodDetail'
    }),
  },
  methods: {
    ...mapActions({
      getBookingDetails: 'getBookingTableById',
      getListFoods: 'getListFoods',
      getFoodDetail: 'getFoodDetail',
      addFoodToBooking: 'addFoodToBookingByBookingId'
    }),
    handleGetBookingDetailByBookingId() {
      console.log('bookingId food : ', this.bookingId)
      this.getBookingDetails(this.bookingId)
      this.getListFoods()
    },
    handleGetFoodDetailByFoodId(foodId) {
      console.log('foodId: ', foodId)
      this.foodId = foodId
      console.log('foodId page: ', foodId)
      this.dialogAdd = true
      this.getFoodDetail(foodId)
    },
    handleAddFoodToBooking(bookingId, foodId, quantity) {
      bookingId = this.bookingId
      console.log('booking id : ', bookingId)
      foodId = this.foodId
      console.log('foodId ', foodId)
      quantity = this.quantity
      console.log('quantity ', quantity)
      this.addFoodToBooking({bookingId, foodId, quantity})
    }
  },
  created() {
    this.handleGetBookingDetailByBookingId()
  }
}
</script>

<style scoped>

</style>