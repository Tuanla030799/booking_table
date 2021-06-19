<template>
  <v-dialog-transition v-model="SearchFootActive" hide-overlay scrollable >
    <div id="Search-foot" :class="SearchFootActive">
      <!-- <router-link to="/register" class="dish-search"> -->
        <div class="dish" v-for="listFoot in listFoots" :key="listFoot.foodName">
          <div class="dish-image">
              <v-img 
              :src="listFoot.foodImage"
              width="70px"
              height="70px"
              class="rounded-sm"
              ></v-img>
          </div>
          <div class="dish-right">
            <div class="dish-title"> {{ listFoot.foodName }} </div>
            <div class="dish-price">{{ listFoot.foodPrice }}</div>
          </div>
        </div>
      <!-- </router-link>  -->
    </div>
  </v-dialog-transition>
</template>

<script>
export default {
  name: "search-foot",
  props: {
    SearchFootActive: {
      Type: String,
      default: "",
    },
    listFoots: {
      Type: Array,
      default: []
    }
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
#Search-foot {
  position: fixed;
  left: 37.8%;
  top: 100px;
  max-height: 320px;
  /* max-height: 320px; */
  width: 400px;
  background-color: #ffffff;
  z-index: 20;
  box-shadow: 0 3px #ccc;
  box-shadow: 0 0 2px 2px rgb(0 0 0 / 10%) !important;
  border: 2px solid #ccc;
  overflow-y: scroll;
  overflow-x: hidden;
}
.dish {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 5px 10px;
  
}
.dish-image {
  width: 70px;
  height: 70px;
  /* border: 1px solid #ccc; */
}
.dish-right {
  margin-left: 10px;
  width: 290px;
  height: 70px;
  
}
.dish-title {
  padding: 10px 5px;
  width: 290px;
  height: 40px;
  /* border: 1px solid #ccc; */
}
.dish-title:hover {
  color: red;
}
.dish-price {
  padding: 10px 5px;
  width: 290px;
  height: 30px;
  font-size: small;
  color: red;
  /* font-size: initial; */
}
.dish-search:hover {
  background-color: #dedede;
  display: flex;
}
</style>