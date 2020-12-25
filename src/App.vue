<template>
  <div id="app" class="container">
    <div class="header-container d-flex justify-content-between">
      <h1 class="text-left heading mt-4">
        <span style="color: #ffa000">Pizza</span>
         <span style="color: #ffb300"> Tracker</span>
      </h1>
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/1404/1404945.svg"
        alt=""
        height="100rem"
      />
    </div>
    <div
      class="card-container"
      v-for="orderInfo in ordersInfo"
      :key="orderInfo.orderId"
    >
      <TrackerCard :orderInfo="orderInfo" />
    </div>
  </div>
</template>

<script>
import TrackerCard from "./components/TrackerCard.vue";

export default {
  name: "App",
  components: {
    TrackerCard,
  },
  data() {
    return {
      ordersInfo: [
        {
          orderId: "0",
          orderStatus: 0,
          customerName: "Clark Kent",
          orderQuantity: 4,
          totalAmount: "32",
        },
        {
          orderId: "1",
          orderStatus: 0,
          customerName: "John Wick",
          orderQuantity: 2,
          totalAmount: "12",
        },
        {
          orderId: "2",
          orderStatus: 0,
          customerName: "Bruce Wayne",
          orderQuantity: 1,
          totalAmount: "6",
        },
        {
          orderId: "3",
          orderStatus: 0,
          customerName: "Barry Allen",
          orderQuantity: 12,
          totalAmount: "74",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
