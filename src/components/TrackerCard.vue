<template>
  <div class="card mt-5">
    <div class="card-header d-flex justify-content-between">
      <CustomTracker :orderStatus="orderInfo.orderStatus" />
      <button
        class="btn btn-primary"
        @click="updateStatus"
        :disabled="orderInfo.orderStatus === 2"
      >
        Update Status
      </button>
    </div>
    <div class="card-body d-flex justify-content-between">
      <div class="customer-info-container">
        <div class="title h6">Customer Name</div>
        <div class="info mt-3">{{ orderInfo.customerName }}</div>
      </div>
      <div class="customer-info-container">
        <div class="title h6">Order Quantity</div>
        <div class="info mt-3">{{ orderInfo.orderQuantity }}</div>
      </div>
      <div class="customer-info-container">
        <div class="title h6">Total Amount</div>
        <div class="info mt-3">${{ orderInfo.totalAmount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTracker from "./CustomTracker";

export default {
  name: "TrackerCard",
  components: {
    CustomTracker,
  },
  props: {
    orderInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    updateStatus() {
      this.orderInfo.orderStatus++;
      if (this.orderInfo.orderStatus === 2) {
        this.$toast.open({
          message: `${this.orderInfo.customerName}'s order is ready`,
          type: "success",
          duration: 2000,
          position: "top-left",
          dismissible: true,
        });
      }
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card {
  /* background-color: grey; */
  height: 10rem;
  border-radius: 12px;
}
.card-header {
  background-color: none !important;
}
</style>
