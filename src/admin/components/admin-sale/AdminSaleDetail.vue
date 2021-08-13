<template>
  <v-container>
    <v-card max-width="900px">
      <v-row>
        <v-col cols="3" sm="3" class="pr-2 border-1">
          <v-img :src="saleDetail.saleImage" max-width="300px" max-height="600px">
          </v-img>
        </v-col>
        <v-col cols="9" sm="9">
          <v-row>
            <v-card-text>
              <h2>{{ saleDetail.saleTitle }}</h2>
            </v-card-text>
            <v-card-subtitle>
              <h4>Mô tả chương trình khuyến mại</h4>
              <div>{{ saleDetail.saleDetail }}</div>
            </v-card-subtitle>
            <v-card-subtitle>
              <h4>Giảm Giá : {{ saleDetail.percentDiscount }}</h4>
            </v-card-subtitle>
            <v-card-subtitle>
              <h4>Đối tượng áp dụng </h4>
              <span>{{ saleDetail.beneficiary }}</span>
            </v-card-subtitle>
            <v-card-subtitle>
              <h4>Trạng Thái </h4>
              <span>{{ saleDetail.status }}</span>
            </v-card-subtitle>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="2" sm="2">
          <v-btn color="error" @click="handleOpenDialogCancel" v-if="saleDetail.status === 1">
            <v-icon class="mr-2">
              mdi-cancel
            </v-icon>
            HỦY
          </v-btn>
          <v-btn color="error" disabled v-else>
            <v-icon class="mr-2">
              mdi-cancel
            </v-icon>
            HỦY
          </v-btn>
        </v-col>
        <v-col cols="2" sm="2" class="mr-5">
          <router-link :to="{name:'sales'}" tag="p">
            <v-btn color="info">
              <v-icon class="mr-2">
                mdi-arrow-left
              </v-icon>
              Quay lại
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-card>
    <v-dialog v-model="dialogCancel" max-width="350px" transition open-delay="2">
      <v-card>
        <v-card-text>
          <h3> Xác nhận hủy chương trình khuyến mại !</h3>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" class="ml-5" @click="handleRemoveSaleForAdmin">
            <v-icon class="mr-2">
              mdi-check
            </v-icon>
            Xác nhận
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info" class="mr-10" @click="handleCloseDialogCancel">
            <v-icon class="mr-2">
              mdi-cancel
            </v-icon>
            Hủy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AdminSaleDetail",
  data() {
    return {
      dialogCancel: false,
      saleId: this.$route.params.saleId,
    }
  },
  methods: {
    ...mapActions({
      saleDetailForAdmin: 'getSaleDetailForAdmin',
      remove: 'removeSaleInSunshine'
    }),
    handleGetSaleDetailForAdmin() {
      console.log('saleId : ', this.saleId)
      this.saleDetailForAdmin(this.saleId)
    },
    handleRemoveSaleForAdmin() {
      this.remove(this.saleId)
      this.dialogCancel = false
    },
    handleOpenDialogCancel() {
      this.dialogCancel = true
    },
    handleCloseDialogCancel() {
      this.dialogCancel = false
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route'(to, from) {
      this.saleId = to.params.saleId
      this.handleGetSaleDetailForAdmin()
    }
  },
  computed: {
    ...mapGetters({
      saleDetail: 'getSaleDetail'
    })
  },
  created() {
    this.handleGetSaleDetailForAdmin()
  }

}
</script>

<style scoped>

</style>