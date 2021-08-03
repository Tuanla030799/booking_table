<template>
  <v-container id="customer" fluid>
    <v-card elevation="10">
      <v-card-title>
        DANH SÁCH KHÁCH HÀNG
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="listCustomers"
          :items-per-page="5"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.email">
            <td>{{ item.fullName }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td :style="styleColorStatusCustomer(item.status)">{{ item.status }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.totalMoney }}</td>
            <td>
              <router-link :to="{name:'customer-detail', params:{email:item.email}}" tag="div">
                <v-btn
                    color="info"
                >
                  <v-icon dark>
                    mdi-clipboard-edit-outline
                  </v-icon>

                </v-btn>
              </router-link>
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
    }),
    handleGetListCustomer() {
      this.getCustomers()
    },
    styleColorStatusCustomer(status) {
      if (status === 'Đang hoạt động') {
        return this.color = 'color:blue'
      } else {
        return this.color = 'color:red'
      }
    }
  },
  created() {
    this.handleGetListCustomer()
  }
}
</script>

<style scoped>
#customer {
  margin: 0 auto;
}
</style>