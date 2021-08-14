<template>
  <div class="header">
    <!-- <h1>the header</h1>
    <input type="file" @change="onFileChange" />

     <div id="preview">
      <img v-if="url" :src="url" />
    </div>  -->
    <div class="carousel">
      <v-app id="inspire">
        <v-carousel
          height="400px !important"
          cycle
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.newsImage"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-app>
    </div>
    <div class="infomation">
      <v-container>
        <div class="title-infomation">Thông tin khuyến mãi</div>
      <div class="lists-infomation">
        <div class="list-infomation" v-for="(info, i) in infomations" :key="i">
          <a href="#">
            <div class="image-info">
            <v-img :src="info.saleImage" width="83px" height="50px" class="rounded-sm"></v-img>
            <!-- <img :src="info.saleImage" alt="" /> -->
          </div>
          <div class="text-infor" >
            {{ info.saleDetail }}
          </div>
          </a>
        </div>
      </div>
      </v-container>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "the-header",
  created() {
    this.loadFoots();
  },
  data() {
    return {
      items: [
        // {
        //   src: "https://pasgo.vn/Upload/anh-slide-show/dai-le-30-4---1-5---an-gi--o-dau-10251519871.jpg",
        // },
        // {
        //   src: "https://pasgo.vn/Upload/anh-slide-show/xu-doong---khong-gian-am-thuc-dong-que-113883271378.jpg",
        // },
        // {
        //   src: "https://pasgo.vn/Upload/anh-slide-show/king-bbq---nguyen-van-cu---vua-nuong-han-quoc-16300165365.jpg",
        // },
        // {
        //   src: "https://pasgo.vn/Upload/anh-slide-show/buffet-hai-san-and-dimsum-cuu-van-long---buffet-hai-san-tuoi-song-157892331568.jpg",
        // },
      ],
      infomations: [
        // {
        //   title: "đại lễ 30/4 - 15 ăn ở đâu? ",
        //   src:
        //     "https://pasgo.vn/Upload/anh-slide-show/dai-le-30-4---1-5---an-gi--o-dau-200-10251519871.jpg",
        // },
        // {
        //   title: "đại lễ 30/4 - 15 ăn ở đâu? ",
        //   src:
        //     "https://pasgo.vn/Upload/anh-slide-show/dai-le-30-4---1-5---an-gi--o-dau-200-10251519871.jpg",
        // },
        // {
        //   title: "đại lễ 30/4 - 15 ăn ở đâu? ",
        //   src:
        //     "https://pasgo.vn/Upload/anh-slide-show/dai-le-30-4---1-5---an-gi--o-dau-200-10251519871.jpg",
        // },
        // {
        //   title: "đại lễ 30/4 - 15 ăn ở đâu? ",
        //   src:
        //     "https://pasgo.vn/Upload/anh-slide-show/dai-le-30-4---1-5---an-gi--o-dau-200-10251519871.jpg",
        // },
        // {
        //   title: "đại lễ 30/4 - 15 ăn ở đâu? ",
        //   src:
        //     "https://pasgo.vn/Upload/anh-slide-show/dai-le-30-4---1-5---an-gi--o-dau-200-10251519871.jpg",
        // },
      ],
      base_url: process.env.VUE_APP_BASE_URL,
    };
  },
  methods: {
    loadFoots() {
      axios({
        method: "get",
        url: `${this.base_url}/api/sunshine/home`,
      })
        .then((response) => {
          this.items = response.data.newsHomeRes;
          this.infomations = response.data.saleHomeRes;
          //console.log(this.items);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    // onFileChange(e) {
    //   const file = e.target.files[0];
    //   this.url = URL.createObjectURL(file);
    //   console.log("D:/HocTap/"+file.name)
    // }
  },
};
</script>

<style>
.header {
  position: relative;
  left: 10%;
  top: 5px;
  width: 80%;
  height: 410px;
  background: #ffffff;
}
@media only screen and (max-width: 1200px) {
  /* For mobile phones: */

  .header {
    left: 1%;
  }
  .header {
    right: 1%;
  }
  .header {
    width: 98%;
  }
  .lists-infomation {
    overflow: scroll;
  }
}
.carousel {
  width: 75%;
  height: 80%;
  /* background-color: aqua; */
}
#inspire {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}
.infomation {
  position: absolute;
  top: 0;
  height: 400px;
  padding-right: 5px;
  border-bottom: 1px solid #ccc;
  right: 0;
  left: 75.5%;
  width: 24%;

  /* border-bottom: 1px solid #ccc; */
}
.title-infomation {
  height: 40px;
  margin: 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: red;
  font-weight: 500;
}

.list-infomation {
  width: 100%;
  height: 65px;
  /* padding: 3px 0px !important; */
  /* border: 1px solid #ccc; */
  padding: 0 10px 0 10px;
  /* margin-top: 10px; */
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #ccc; */
  overflow: scroll;
}
.list-infomation a{
   display: flex;
   text-decoration: none;
}
.list-infomation:hover {
  background-color: #ccc;
  
}
.lists-infomation {
  height: 325px;
}
.image-info img {
  width: 83px;
  height: 50px;
  /* border: 1px solid #ccc; */
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  /* margin-top: 3px !important; */
}
.text-infor {
  margin-left: 10px;
  font-size: smaller !important;
  padding: 2px 2px 0 0;
  text-align: justify;
  height: 40px;
  overflow: hidden;
  -webkit-line-clamp: 2;
}
.text-infor:hover{
  color: red;
}
</style>