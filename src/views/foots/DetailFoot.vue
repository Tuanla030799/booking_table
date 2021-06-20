<template>
  <v-dialog v-model="detailFoot" scrollable>
    <div id="foodDetail">
      <div class="image-food">
          <v-img :src="Id.foodImage" width="440px" height="290px" class="rounded-sm"></v-img>
      </div>
      <div class="infor-food">
        <div class="food-name"> {{ Id.foodName }} </div>
        <div class="food-text"> - {{ Id.describes }}... </div>
        <div class="food-price">{{ Id.foodPrice }}</div>
        <div class="button-food">
            <button class="btn-default">Đặt bàn Ngay</button>
            <button class="btn-default" @click="closeDetailFood()">Đóng</button>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "detail-food",
  created() {
  },
  props: {
    detailFoot: {
      Type: Boolean,
      default: true,
    },
    Id: {
        Type: Object,
        default: {}
    }
  },
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
    };
  },
  methods: {
      closeDetailFood() {
          this.$emit("closeDetailFood")
      },
  }
};
</script>

<style  scoped>
#foodDetail {
  position: fixed;
  left: 26%;
  top: 160px;
  height: 320px;
  /* max-height: 320px; */
  width: 700px;
  background-color: #ffffff;
  z-index: 20;
  box-shadow: 0 3px #ccc;
  box-shadow: 0 0 2px 2px rgb(0 0 0 / 10%) !important;
  border: 2px solid #ccc;
  display: flex;
  padding: 10px;
}
.image-food {
  width: 450px;
  height: 300px;
  border: 1px solid #ccc;
  padding: 5px;
}
.infor-food {
  width: 250px;
  height: 300px;
  border: 1px solid #ccc;
  padding-left: 10px;
}
.food-name {
  width: 100%;
  height: 50px;
  /* border: 1px solid #ccc; */
  text-align: center;
  font-size: larger;
  padding: 10px 0px;
  color: red;
}
.food-text {
  width: 100%;
  height: 150px;
  /* border: 1px solid #ccc; */
}
.food-price {
  width: 100%;
  height: 50px;
  /* border: 1px solid #ccc; */
  text-align: center;
  font-size: small;
  color: red;
}
.button-food{
  width: 100%;
  height: 50px;
  display: flex;
  float: right;
  /* border: 1px solid #ccc; */
  justify-content: center;
  align-items: center;
}
.btn-default {
    height: 32px;
    line-height: 32px;
    padding-left: 10px ;
    padding-right: 10px;
    margin: 0px 10px;
}
</style>