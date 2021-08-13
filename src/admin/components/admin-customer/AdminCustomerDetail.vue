<template>
  <v-container>
    <v-card>
      <v-card-title>
        Chi Tiết Khách Hàng
      </v-card-title>
      <v-row>
        <v-col cols="3" sm="3">
          <v-card-title>
            <v-img :src="customerDetail.image" max-width="200px">
            </v-img>
          </v-card-title>
        </v-col>
        <v-col cols="9" sm="9">
          <v-row>
            <v-col cols="4" sm="4">
              <v-text-field label="Tên Khách Hàng " v-bind:value="customerDetail.fullName"></v-text-field>
            </v-col>
            <v-col cols="4" sm="4">
              <v-text-field label="Email Khách Hàng " v-bind:value="customerDetail.email"></v-text-field>
            </v-col>
            <v-col cols="4" sm="4">
              <v-text-field label="Giới Tính" v-bind:value="convertSex(customerDetail.sex)"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" sm="4">
              <v-text-field label="Phân Quyền" v-bind:value="customerDetail.role"></v-text-field>
            </v-col>
            <v-col cols="4" sm="4">
              <v-text-field label="Trạng Thái Tài Khoản" v-bind:value="customerDetail.status"></v-text-field>
            </v-col>
            <v-col cols="4" sm="4">
              <v-text-field label="Phân Cấp Bậc" v-bind:value="customerDetail.level"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="6">
              <v-text-field label="Ngày Sinh" v-bind:value="customerDetail.dateOfBirth"></v-text-field>
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field label="Tổng Tiền " v-bind:value="customerDetail.totalMoney"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn color="primary" class="ml-4" @click="handleChanrge">
            <v-icon class="mr-3">
              mdi-bank-plus
            </v-icon>
            NẠP TIỀN
          </v-btn>
        </v-card-actions>
        <v-card-actions v-if="customerDetail.status ==='Đã bị khóa'">
          <v-btn color="error" class="ml-4" disabled>
            <v-icon class="mr-3">
              mdi-delete
            </v-icon>
            Khóa Tài Khoản
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn color="error" class="ml-4" @click="handleOpenLock">
            <v-icon class="mr-3">
              mdi-delete
            </v-icon>
            Khóa Tài Khoản
          </v-btn>
        </v-card-actions>
        <v-card-actions v-if="customerDetail.status ==='Đang hoạt động'">
          <v-btn color="success" class="ml-4" disabled>
            <v-icon class="mr-3">
              mdi-delete
            </v-icon>
            Mở Tài Khoản
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn color="success" class="ml-4" @click="handleDialogOpenAccount">
            <v-icon class="mr-3">
              mdi-delete
            </v-icon>
            Mở Tài Khoản
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mr-5">
          <router-link :to="{name:'admin-customers'}">
            <v-btn color="primary" class="ml-4">
              <v-icon class="mr-3">
                mdi-arrow-left-thin-circle-outline
              </v-icon>
              QUAY LẠI
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-row>
    </v-card>
    <v-dialog v-model="dialogInput" max-width="400px" transition>
      <v-card elevation="10">
        <v-card-text>
          <span>Nạp Tiền Cho Khách Hàng {{ customerDetail.fullName }}</span>
        </v-card-text>
        <v-card-subtitle>
          <v-text-field label="SỐ TIỀN" v-model.number="money"></v-text-field>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="primary ml-5" @click="handlePayment(email,money)">
            <v-icon class="mr-2">
              mdi-checkbox-marked-circle
            </v-icon>
            Nạp Tiền
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error mr-8" @click="handleCloseDialog">
            <v-icon class="mr-2">
              mdi-minus-circle
            </v-icon>
            HỦY NẠP TIỀN
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogLockAccount" max-width="300px" transition>
      <v-card elevation="10">
        <v-card-text>
          <h3>Khóa tài khoản khách hàng {{ customerDetail.fullName }}</h3>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary ml-5" @click="handleLockAccount">
            <v-icon class="mr-2">
              mdi-checkbox-marked-circle
            </v-icon>
            Khóa
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error mr-8" @click="handleCloseLock">
            <v-icon class="mr-2">
              mdi-minus-circle
            </v-icon>
            Hủy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogOpenAccount" max-width="300px" transition>
      <v-card elevation="10">
        <v-card-text>
          <h3>Mở tài khoản khách hàng {{ customerDetail.fullName }}</h3>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary ml-5" @click="handleOpenAccount">
            <v-icon class="mr-2">
              mdi-checkbox-marked-circle
            </v-icon>
            Mở
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error mr-8" @click="handleCloseDialogOpenAccount">
            <v-icon class="mr-2">
              mdi-minus-circle
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
  name: "AdminCustomerDetail",
  data() {
    return {
      email: this.$route.params.email,
      money: 0,
      dialogInput: false,
      dialogLockAccount: false,
      dialogOpenAccount: false,
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route'(to, from) {
      this.email = to.params.email
      this.paymentMoney(this.email)

    },
    handleGetCustomerDetailByEmail() {
      this.handleGetCustomerDetailByEmail()
    }
  },
  methods: {
    ...mapActions({
      customerDetailByEmail: 'getCustomerDetail',
      paymentMoney: 'paymentMoneyForCustomer',
      lockAccount: 'lockAccountCustomerByEmail',
      openAccount: 'enableCustomerByEmail'
    }),
    handleOpenLock() {
      this.dialogLockAccount = true
    },
    handleCloseLock() {
      this.dialogLockAccount = false
    },
    handleLockAccount() {
      console.log('email lock : ', this.email)
      this.lockAccount(this.email)
      this.dialogLockAccount = false
    },
    handleDialogOpenAccount() {
      this.dialogOpenAccount = true
    },
    handleCloseDialogOpenAccount() {
      this.dialogOpenAccount = false
    },
    handleOpenAccount() {
      console.log('email open : ', this.email)
      this.openAccount(this.email)
      this.handleCloseDialogOpenAccount()
    },
    handlePayment(email, money) {
      email = this.email
      money = this.money
      console.log('email : ' + email + ' money : ' + money)
      this.paymentMoney({email, money})
      this.dialogInput = false
      this.money = ''
    },
    handleGetCustomerDetailByEmail() {
      this.customerDetailByEmail(this.email)
    },
    convertSex(sex) {
      if (sex === 1) {
        return "Nam"
      } else if (sex === 0) {
        return "Nữ"
      } else {
        return "Không xác định"
      }
    },
    handleChanrge() {
      this.dialogInput = true
    },
    handleCloseDialog() {
      this.dialogInput = false
    }

  },
  computed: {
    ...mapGetters({
      customerDetail: 'getCustomerDetail'
    })
  },
  created() {
    this.handleGetCustomerDetailByEmail()
  }
}
</script>
<style scoped>

</style>