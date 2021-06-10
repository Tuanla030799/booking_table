<template>
  <b-container>
    <div class="content-hea">
      <div class="content-title">Quản lý khách hàng</div>
      <div class="employee-table">
        <div class="grid">
          <table id="tblEmployee" class="table text-center " width="100%" border="0">
            <thead>
            <tr>
              <th>Số thứ tự</th>
              <th>Email</th>
              <th>Tên Khách Hàng</th>
              <th>Số Điện Thoạir</th>
              <th>Tổng Tiền</th>
              <th>Phân Quyền</th>
              <th>Trạng Thái</th>
              <th>Chi Tiết</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(list,index) in getListCustomer" :key="index">
              <td>{{ index }}</td>
              <td>{{ list.email }}</td>
              <td>{{ list.fullName }}</td>
              <td>{{ list.phoneNumber }}</td>
              <td>{{ list.totalMoney }}</td>
              <td>{{ list.role }}</td>
              <td>{{ list.status }}</td>
              <td>
                <router-link :to="{name:'customer-detail' , params: {email: list.email}}" class="btn btn-primary btn-sm"
                             tag='a'>
                  Chi Tiết Khách Hàng
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </b-container>

</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminCustomer",
  computed: {
    ...mapGetters(["getListCustomer"])
  },
  methods: {
    ...mapActions({
      getCustomers: 'getListCustomer'
    }),
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

</style>