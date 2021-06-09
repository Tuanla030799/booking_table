<template>
  <div>
    <div>
      <div class="content-hea">
        <div class="content-title">Food</div>
        <div class="content-button-add">
          <button class="btn-default btn-add">
            Thêm Mới Món ăn
          </button>
        </div>
      </div>
      <div class="employee-table">
        <div class="grid">
          <table id="tblEmployee" class="table text-center" width="100%" border="0">
            <thead>
            <tr>
              <th>ID</th>
              <th>Food Name</th>
              <th>Description</th>
              <th>Food Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Detail</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="foods in getListFoods" :key="foods.stt">
              <td>{{ foods.foodId }}</td>
              <td>{{ foods.foodName.toUpperCase() }}</td>
              <td>{{ foods.describes }}</td>
              <td>
                <v-img v-bind:src="foods.foodImage" width="150px" height="100px"></v-img>
              </td>
              <td>{{ foods.foodPrice }}</td>
              <td>{{ foods.quantity }}</td>
              <td>
                <router-link
                    :to="{name:'food-detail', params:{foodId:foods.foodId}}"
                    tag='a'
                >
                  Food Detail
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "AdminFood",
  computed: {
    ...mapGetters(["getListFoods"])
  }
}
</script>

<style scoped>
@import "../../../style/layout/content.css";
</style>