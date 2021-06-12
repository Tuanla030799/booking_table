<template>
  <v-container>
    <v-card class="customer-page" elevation="10">
      <v-card-title>
        DANH SÁCH KHÁCH HÀNG
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="listCustomers"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.email">
            <td>{{ item.fullName }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.totalMoney }}</td>
            <td>
              <v-btn
                  color="info"
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
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminCustomer",
  data() {
    return {
      headers: [
        {text: 'Tên Khách Hàng', value: 'fullName'},
        {text: 'Số Điện Thoại ', value: 'phoneNumber'},
        {text: 'Trạng Thái', value: 'status'},
        {text: 'Email', value: 'email'},
        {text: 'Tổng Tiền', value: 'totalMoney'},
        {text: 'Chi Tiết', value: 'actions', sortable: false}
      ],
      dialog: false
    }
  },
  computed: {
    ...mapGetters({
      listCustomers: 'getListCustomer'
    })
  },
  methods: {
    ...mapActions({
      getCustomers: 'getListCustomer',
      getCustomerDetail: 'getCustomerDetail'
    }),
    handleGetCustomerDetailByEmail(email) {
      this.dialog = true
      this.getCustomerDetail(email)
    }
    ,
    handleGetListCustomer() {
      this.getCustomers()
    }
  },
  created() {
    this.handleGetListCustomer()
  }
}
</script>

<style scoped>
.customer-page {
  max-width: 100%;
  margin: 0 auto;
}
</style>