<template>
  <div class="ChooseFoot-bum">
    <div class="ChooseFoot">
      <div class="ChooseFoot-title">Vui Lòng Chọn Món Ăn</div>
      <div class="ChooseFoot-text">Đặt món cho hóa đơn số:</div>
      <div class="listfoots">
        <v-item-group multiple>
          <v-container>
            <v-row>
              <v-col
                v-for="(listFoot) in listFoots"
                :key="listFoot.stt"
                cols="12"
                md="4"
              >
                <v-item>
                  <v-card height="200px">
                    <div class="foot-header d-flex">
                      <div class="foot-img">
                        <v-img :src="listFoot.foodImage" width="150px" height="150px"  >
                          <!-- <a href="">
                            <img :src="listFoot.foodImage" alt="" />
                          </a> -->
                        </v-img>
                        <!-- <img :src="listFoot.foodImage" alt="" /> -->
                      </div>
                      <div class="foot-title">{{ listFoot.describes }}</div>
                    </div>
                    <div class="foot-footer">
                      <div class="sub-quantity"><button @click="subOnclick(listFoot.stt)">-</button></div>
                      <div class="quantity"> {{ listFoot.quantity }} </div>
                      <div class="add-quantity"><button @click="addOnclick(listFoot.stt)">+</button></div>
                    </div>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </div>
      <div class="footer">
        <button class="btn-default btn-dTable">Hủy</button>
        <router-link class="cFoot" to="/">
          <button class="btn-default btn-bTable">Đặt bàn</button>
        </router-link>
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
    };
  },
  methods: {
    loadListFoots() {
      axios({
        method: "get",
        url: `${this.base_url}/api/sunshine/get-list-food`,
      })
        .then((response) => {
          this.listFoots = response.data;
          //console.log(this.items);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },


    // loadFoot(stt) {
    //   axios({
    //     method: "get",
    //     url: `${this.base_url}/api/sunshine/get-food/
    //     ` + stt,
    //   })
    //     .then((response) => {
    //       this.quantity = response.data.quantity;
    //       //console.log(this.items);
    //     })
    //     .catch((error) => {
    //       console.log(error.response);
    //     });
    // },

    // thêm món
    addOnclick(stt){
      var a = stt - 1;
      //this.loadFoot(stt)
      // this.listFoots.forEach(element => {
        
      // });
      //console.log(a);
      this.listFoots[a].quantity++
    },
    //giảm món
    subOnclick(stt) {
      var a = stt - 1;
      this.listFoots[a].quantity--
    }
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
  height: 79% ;
  border: 1px solid #ccc;
  overflow-y: scroll;
}

.listfoots .foot-img {
  width: 150px;
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain ;

}

.listfoots .foot-title {
  padding: 5px;
  width: 213px;
  height: 150px;
}

.listfoots .foot-footer {
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
}

.foot-footer .sub-quantity button, .foot-footer .add-quantity button{
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