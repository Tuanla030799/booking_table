<template>
  <b-container>
    <div class="content-hea">
      <div class="content-title">Customer</div>
      <div class="employee-table">
        <div class="grid">
          <table id="tblEmployee" class="table text-center " width="100%" border="0">
            <thead>
            <tr>
              <th>STT</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Total Money</th>
              <th>Role</th>
              <th>Image</th>
              <th>status</th>
              <th>Detail</th>
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
              <td>
                <v-img v-bind:src="list.image" width="200px" height="100px"></v-img>
              </td>
              <td>{{ list.status }}</td>
              <td>
                <router-link :to="{name:'customer-detail' , params: {email: list.email}}" class="btn btn-primary btn-sm"
                             tag='a'>
                  Customer Detail
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
import {mapGetters} from "vuex"

export default {
  name: "AdminCustomer",
  computed: {
    ...mapGetters(["getListCustomer"])
  }
}
</script>

<style scoped>

</style>