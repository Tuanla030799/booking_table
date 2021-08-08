<template>
  <div class="ChooseFoot-bum">
    <div class="ChooseFoot">
      <div class="ChooseFoot-title">Vui Lòng Chọn Món Ăn</div>
      <div class="ChooseFoot-text">
        Đặt món cho hóa đơn số: {{ this.bookingId }}
      </div>
      <div class="listfoots">
        <v-item-group multiple>
          <v-container>
            <v-row>
              <v-col
                  v-for="listFoot in listFoods"
                  :key="listFoot.stt"
                  cols="12"
                  md="4"
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
                        <div class="foot-text">{{ setDescription(listFoot.describes) }}</div>
                      </div>
                    </div>
                    <div class="foot-footer">
                      <div class="sub-quantity">
                        <button @click="subFood(listFoot.foodId)">-</button>
                      </div>
                      <div class="quantity">{{ listFoot.quantity }}</div>
                      <div class="add-quantity">
                        <button @click="addFood(listFoot.foodId)">+</button>
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
        <!-- <button class="btn-default btn-dTable">Đặt món sau</button> -->
        <!-- <router-link class="cFoot" to="/"> -->
          <button class="btn-default btn-bTable" @click="bookingFoods">
            Thêm món
          </button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ACCESS_TOKEN_ADMIN} from "../../../constants";

export default {
  name: "AdminBookingAddFood",
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
      bookingId: this.$route.params.bookingId,
      listFoods: [],
    }
  },
  methods: {
    setDescription(descriptions) {
      if (descriptions.length > 100) {
        let e = `${descriptions.slice(0, 90)}...`
        return e
      } else {
        return descriptions
      }
    },
    getListFoods() {
      axios({
        method: "get",
        url:
            `${this.base_url}/api/sunshine/get-list-food?bookingId=` +
            this.bookingId,
      })
          .then((response) => {
            console.log('result ', response)
            this.listFoods = response.data;
          })
          .catch((error) => {
            console.log(error.response);
          });
    },
    bookingFoods() {
      let chooseList = this.listFoods.filter((person) => person.quantity > 0).map((x) => {
        let list = {
          quantity: x.quantity,
          foodId: x.foodId
        }
        return list
      });
      let data = {
        bookingId: this.bookingId,
        foodList: chooseList
      }
      console.log('data: ', data)
      axios({
        method: "post",
        url: `${this.base_url}/api/admin/add-food-in-booking`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_ADMIN)}`,
        },
        data: {
          bookingId: `${this.bookingId}`,
          foodList: chooseList
        },
      }).then((response) => {
        if (response.status === 200 && response.data.statusCode === "ADD_FOOD_SUCCESS") {
          alert(response.data.message)
          this.$router.push({name:'booking-detail', params:{bookingId: this.bookingId}})
        }
      })
          .catch((error) => {
            console.log(this.bookingId)
            console.log(error)
          });
    },
    addFood(stt) {
      this.listFoods[stt - 1].quantity++
    },
    subFood(stt) {
      if (this.listFoods[stt - 1].quantity <= 0) {
        this.listFoods[stt - 1].quantity = 0
      } else {
        this.listFoods[stt - 1].quantity--
      }
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route'(to, from) {
      this.bookingId = to.params.bookingId
      console.log('bookingId add food to booking: ', this.bookingId)
    }
  }
  ,
  created() {
    this.getListFoods()
  }
}
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

.title-foot {
  text-align: center;
  font-weight: bold;
  border: 1px solid #dedede;
}

.foot-text {
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