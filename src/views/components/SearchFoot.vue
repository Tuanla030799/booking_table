<template>
  <v-dialog-transition v-model="SearchFootActive" hide-overlay scrollable hide-on-leave>
    <div id="Search-foot" :class="SearchFootActive">
      <!-- <router-link to="/register" class="dish-search"> -->
        <div class="dish" v-for="listFoot in listFoots" :key="listFoot.foodId">
          <a href="#" @click="foodDetail(listFoot.foodId)">
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
          </a>
        </div>
      <!-- </router-link>  -->
    </div>
  </v-dialog-transition>
</template>

<script>
import axios from "axios";
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
      listFoot: {},
      base_url: process.env.VUE_APP_BASE_URL,
    };
  },
  methods: {
    foodDetail(Id) {
      axios({
        method: "get",
        url: `${this.base_url}/api/sunshine/get-food/${Id}`,
      })
        .then((response) => {
          this.listFoot = response.data;
          console.log(this.listFoot);
          this.$emit("DetailFood" , this.listFoot)
        })
        .catch((error) => {
          console.log(error.response);
        });
      
    }
  }
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
  cursor: pointer;
  
}
.dish a{
  display: flex;
  text-decoration: none;
}
.dish:hover {
  background-color: #dedede;
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