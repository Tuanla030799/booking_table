<template>
  <v-dialog v-model="dialognotification" width="370px" height="170px">
    <div id="notification-Customer">
      <div class="noti-text">
        <v-icon large class="mt-1 pr-3" color="red">mdi-message-question</v-icon>
        <div class="text-noti">{{ notification }}</div>
      </div>
      <div class="footer-noti">
        <button class="btn-default" @click="okCloseOnClick">Ok</button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "customer-notification",
  data() {
    return {
    };
  },
  props: {
    dialognotification: {
      type: Boolean,
      default: true,
    },
    notification: {
        type: String,
      default: "",
    }
  },
  methods: {
    okCloseOnClick() {
        this.$emit("closeNotification")
    }
  },
};
</script>

<style>
#notification-Customer {
  height: 170px;
  width: 370px;
  background-color: #ffffff;
}
.noti-text {
  width: 100%;
  height: 110px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.text-noti {
  justify-content: center;
  margin: auto 0px;
}
.footer-noti {
  height: 60px;
  background-color: #dedede;
}
.footer-noti button {
  float: right;
  /* padding: 10px; */
  margin: 10px;
  height: 38px !important;
  line-height: 38px !important;
}
</style>