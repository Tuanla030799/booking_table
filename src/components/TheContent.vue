<template>
  <div class="content">
    <!-- <h1>content</h1> -->

    <v-container>
      <div class="header-title">
        <div class="title">Bộ Sưu Tập</div>
        <div class="title-text">
          Booking Table là web đặt bàn uy tín chất lượng với nhiều ưu đãi hấp
          dẫn.
        </div>
      </div>
      <v-layout row wrap>
        <v-col
        class="col"
          cols="12"
          md="3"
          xs12
          sm6
          md4
          lg3
          v-for="(foot) in listFootss"
          :key="foot.foodId"
          
        >
          <a href="#" @click="foodDetailClick(foot.foodId)">
            <v-card class="card">
            <v-img
              :src="foot.foodImage"
              max-width="266px"
              height="288px"
              class="rounded-sm"
            >
              <!-- <a href="">
                <img :src="foot.foodImage" alt="" />
              </a> -->
            </v-img>
            <v-card-text>
              <div class="title-foot">
                <a href="#" class="text-decoration-none" >{{ foot.foodName }}</a>
              </div>
            </v-card-text>
          </v-card>
          </a>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "the-content",
  created() {
    this.loadFoots();
  },
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
      // token: localStorage.getItem("token"),
      listFootss: [],
      listFoot: {}
    };
  },
  methods: {
    loadFoots() {
      axios({
        method: "get",
        url: `${this.base_url}/api/sunshine/home`,
      })
        .then((response) => {
          this.listFootss = response.data.foodHomeRes;
          //  console.log(response.data.foodHomeRes);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    foodDetailClick(Id) {
      axios({
        method: "get",
        url: `${this.base_url}/api/sunshine/get-food/${Id}`,
      })
        .then((response) => {
          this.listFoot = response.data;
          console.log(this.listFoot);
        })
        .catch((error) => {
          console.log(error.response);
        });
      this.$emit("foodDetail" , this.listFoot)
    }
  },
};
</script>

<style>
.content {
  position: relative;
  top: 15px;
  left: 10%;
  width: 80%;
  background: #ffffff;
  margin-bottom: 10px;
  /* max-height: 1000px; */
}

@media only screen and (max-width: 1200px) {
  /* For mobile phones: */

  .content {
    left: 1%;
  }
  .content {
    right: 1%;
  }
  .content {
    width: 98%;
  }
}

.header-title {
  display: flex;
  align-items: center;
  padding: 10px;
}

.header-title .title {
  padding-right: 5px;
  /* border-right: 3px solid #333333; */
}
.header-title .title-text {
  padding-left: 10px;
  color: red;
  border-left: 2px solid #555555;
}
.title-foot {
  text-align: center;
}
.title-foot a:hover {
  color: red;
}
.card {
  padding-left: 3px !important;
  padding-top: 3px !important;
}
.col:hover{
  cursor: pointer;
}
</style>