<template>
  <div class="ChooseFoot-bum">
    <div class="ChooseFoot">
      <div class="ChooseFoot-title">Vui Lòng Chọn Món Ăn</div>
      <div class="ChooseFoot-text">
        Đặt món cho hóa đơn số: {{ this.bookingFootId }}
      </div>
      <div class="listfoots">
        <v-item-group multiple>
          <v-container>
            <v-row>
              <v-col
                v-for="listFoot in listFoots"
                :key="listFoot.stt"
                cols="12"
                md="4"
                xs="1"
              >
                <v-item>
                  <v-card height="200px">
                    <div class="foot-header d-flex">
                      <div class="foot-img">
                        <v-img
                          :src="listFoot.foodImage"
                          width="140px"
                          height="115px"
                        >
                          <!-- <a href="">
                            <img :src="listFoot.foodImage" alt="" />
                          </a> -->
                        </v-img>
                        <div class="foot-price">{{ listFoot.foodPrice }}</div>
                        <!-- <img :src="listFoot.foodImage" alt="" /> -->
                      </div>
                      <div class="foot-title">
                        <div class="title-foot">{{ listFoot.foodName }}</div>
                        <div class="foot-text">{{ listFoot.describes }}</div>
                      </div>
                    </div>
                    <div class="foot-footer">
                      <div class="sub-quantity">
                        <button @click="subOnclick(listFoot.stt)">-</button>
                      </div>
                      <div class="quantity">{{ listFoot.quantity }}</div>
                      <div class="add-quantity">
                        <button @click="addOnclick(listFoot.stt)">+</button>
                      </div>
                    </div>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </div>
      <div class="footer">
        <button  class="btn-default btn-dTable" @click="bookingZerofootOnClick()" >Đặt món sau</button>
        <!-- <router-link class="cFoot" to="/"> -->
        <button  class="btn-default btn-bTable" @click="bookingfootOnClick()">
          Đặt món
        </button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "choose-foot",
  created() {
    this.loadListFoots();
  },
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
      listFoots: [],
      quantity: 0,
      list: [
        // "bookingtId" = `${this.bookingFootId}`,
        // {
        //   "footId": `${this.listFoot.stt}`,
        //   "quantity": `${this.listFoot.quantity}`
        // }
      ],
      isBtn: true,
      isFoots: []
    };
  },
  props: {
    bookingFootId: {
      type: String,
      default: "",
    },
  },
  methods: {
    loadListFoots() {
      axios({
        method: "get",
        url:
          `${this.base_url}/api/sunshine/get-list-food?bookingId=` +
          this.bookingFootId,
      })
        .then((response) => {
          this.listFoots = response.data;
          //console.log(this.items);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    bookingfootOnClick() {
      let chooseList = this.listFoots.filter((person) => person.quantity > 0);
      this.$emit("isLoader")
      axios({
        method: "post",
        url: `${this.base_url}/api/customer/order-food`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookie.get("token")}`,
        },
        data: {
          bookingId: `${this.bookingFootId}`,
          foodList: chooseList,
        },
      })
        .then((response) => {
          if (
            response.status == 200 &&
            response.data.statusCode == "ADD_FOOD_SUCCESS"
          ) {

            this.$router.push({ name: "lịch sử đặt bàn" }).catch((err) => {
              return err;
            });
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          alert(error.response.data.message);
        });
        console.log(chooseList);
    },
    bookingZerofootOnClick() {
      // axios({
      //   method: "post",
      //   url: `${this.base_url}/api/customer/order-food`,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${this.$cookie.get("token")}`,
      //   },
      //   data: {
      //     bookingId: `${this.bookingFootId}`,
      //     foodList: [],
      //   },
      // })
      //   .then((response) => {
      //     if (
      //       response.status == 200 &&
      //       response.data.statusCode == "ADD_FOOD_SUCCESS"
      //     ) {

            this.$router.push({ name: "lịch sử đặt bàn" }).catch((err) => {
              return err;
            });
          // }
      //   })
      //   .catch((error) => {
      //     console.log(error.response.data);
      //     alert(error.response.data.message);
      //   });
    },
    // thêm món
    addOnclick(stt) {
      var a = stt - 1;
      //this.loadFoot(stt)
      // this.listFoots.forEach(element => {

      // });
      //console.log(a);
      this.listFoots[a].quantity++;
      // this.isFoots.push("s")
    },
    //giảm món
    subOnclick(stt) {
      var a = stt - 1;
      if (this.listFoots[a].quantity <= 0) {
        this.listFoots[a].quantity = 0;
      } else {
        this.listFoots[a].quantity--;
      }
    },
    // hideBtn(isBtn) {
    //   if(isBtn == true) {
    //     return "d-block"
    //   } else {
    //     return "d-none"
    //   }
    // },
    // checkHideBtn() {
    //   this.isFoots = this.listFoots.filter((person) => person.quantity > 0);
    //   if(this.isFoots == []) {
    //     this.isBtn = false
    //   } else {
    //     this.isBtn = true
    //   }
    // }
  },
  watch: {
    // isFoots:function() {
    //   this.checkHideBtn()
    // }
  },
};
</script>

<style scoped>
.ChooseFoot-bum {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  background: #cccccc;
}
.ChooseFoot {
  position: absolute;
  left: 10%;
  top: 3px;
  width: 80%;
  bottom: 0;
  background: #ffffff;
  padding: 20px;
}
@media only screen and (max-width: 1200px) {
  /* For mobile phones: */

  .ChooseFoot {
    left: 0.1%;
  }
  .ChooseFoot {
    right: 0.1%;
  }
  .ChooseFoot {
    width: 99.8%;
  }
}

.ChooseFoot-title {
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 5px;
  font-family: initial;
  font-size: 18px;
  font-weight: 600;
}
.ChooseFoot-text {
  width: 100%;
  font-size: 13px;

  font-weight: 600;
}
.listfoots {
  margin-top: 10px;
  width: 100%;
  height: 79%;
  border: 1px solid #ccc;
  overflow-y: scroll;
}

.listfoots .foot-img {
  width: 150px;
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 5px;
}
.foot-img .foot-price {
  width: 140px;
  height: 20px;
  text-align: center;
  color: red;
  font-family: initial;
  font-weight: 600;
  font-size: 13px;
  margin-top: 5px;
}
.listfoots .foot-title {
  padding: 5px;
  width: 213px;
  height: 150px;
}
.title-foot{
  text-align: center;
  font-weight: bold;
  border: 1px solid #dedede;
}
.foot-text{
  font-size: medium;
  padding: 5px;
}
.listfoots .foot-footer {
  width: 100%;
  height: 50px;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
}

.foot-footer .sub-quantity button,
.foot-footer .add-quantity button {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
}

.foot-footer .quantity {
  width: 260px;
  height: 50px;
  text-align: center;
  margin-top: 22px;
}

.footer {
  position: relative;
  bottom: 10px;
  left: 0;
  right: 0;
  height: 45px;
  float: right;
}
.btn-default {
  float: right;
  margin-right: 10px;
}
.btn-bTable {
  margin-right: 40px;
}
</style>