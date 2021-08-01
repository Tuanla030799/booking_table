<template>
<v-dialog-transition>
  <div id="bv-modal-example-error-login" class="NotiMsg" :class="hideNotiError">
    <div class="model"></div>
    <div class="delete-content">
      <div class="dialog-body">
        <!-- <div class="icon-nav dialog-item icon-noti-delete"></div> -->
        <v-icon class="mb-4" x-large :color="iscolor">{{ this.iconnoti() }}</v-icon>
        <div class="dialog-text">
          {{ this.message() }}
        </div>
      </div>
      <div class="dialog-footer-delete">
        <div class="btn-dialog">
          <div
            id="btnSave"
            class="btn-default btn-commit"
            @click="hideNotiErrorOnClick()"
          >
            Đồng ý
          </div>
        </div>
      </div>
    </div>
  </div>
  </v-dialog-transition>


<!-- <b-modal id="bv-modal-example-error-login" hide-footer hide-header >
<b-col class="iconLogout mb-2">
<b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
</b-col>
<div class="d-block text-center" >
<h3 
style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">{{ message }}</h3>
</div>
<div class="buttonSubmitLogout">
<button class="buttonOK mt-3" @click="$bModal.hide('bv-modal-example-error-login')"  style="font-size: 13px;">OK</button>
</div>
</b-modal> -->
</template>

<script>
export default {
  name: "noti-msg",
  props: {
      hideNotiError: {
          type: String,
          default: 'd-none'
      },
  },
  data() {
    return {
      iscolor: "red"
    }
  },
  methods: {
    message() {
      let noti = localStorage.getItem("message")
      return noti
    },
    iconnoti() {
      let iconnotisuccess = localStorage.getItem("isIcon")
      if (iconnotisuccess == "susccess") {
        this.iscolor = "green"
        return "mdi-check-all"
      } else if (iconnotisuccess == "error") {
        this.iscolor = "red"
        return "mdi-alert-outline"
      }
      console.log(iconnotisuccess);
    },
    hideNotiErrorOnClick() {
      this.$emit("hideNotiError")
      // this.message =  ""
    }
  },
  //   beforeDestroy () {
  //   localStorage.removeItem('message');
  // },

};
</script>

 <style scoped>
.delete-content {
  padding: 32px;
  position: fixed;
  top: 38%;
  left: 40%;
  width: 380px;
  height: 159px;
  border-radius: 4px;
  background-color: #ffffff;
}
.model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.4;
}

.dialog-footer-delete {
  position: absolute;
  right: 0px;
  left: 0px;
  bottom: 0px;
  height: 60px;
}
.dialog-body {
  top: 32px !important;
  display: flex;
  height: 82px;
}
.dialog-body .dialog-item {
  width: 65px;
  height: 48px;
}
.dialog-body .dialog-text {
  margin-top: 24px;
  margin-left: 10px;
  font-weight: 600px !important;
  font-size: small !important
  /* margin-bottom: 64px; */
}
.btn-commit {
  margin-top: 10px;
  float: right;
}
.destroy {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #bbb;
}
.destroy:hover {
  background-color: #bbb;
}
.btn-dialog {
  align-items: center;
  justify-content: space-between !important;
  padding: 0 32px 0 32px;
}

.icon-noti-delete {
  background-position: -592px -456px !important;
}
</style>