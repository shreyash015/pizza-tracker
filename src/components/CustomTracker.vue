<template>
  <div class="mt-auto">
    <div class="tracker d-flex justify-content-start">
      <div class="indicator rounded-circle border recieved-indicator"></div>
      <hr class="divider mt-2" />
      <div class="indicator rounded-circle border" :style="orderStatus >=1 ? 'background-color:#FFC000' : '' "></div>
      <hr class="divider mt-2" />
      <div class="indicator rounded-circle border" :style="orderStatus === 2 ? 'background-color:#45be20' : '' "></div>
    </div>
    <div class="order-info d-flex justify-content-between info-title">
      <div>Order Recieved</div>
      <div>Preparing</div>
      <div>Ready to Serve</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        orderStatus:{
            type: Number,
            default: 0,
        }
    },
}
</script>

<style  scoped>
hr {
  border-color: rgb(70, 67, 67);
}
.indicator {
  /* vertical-align: middle; */
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 1px solid rgb(70, 67, 67) !important;
}
.divider {
  width: 8rem;
  padding-left: 5px;
}
.indicator{
    transition: background-color 1s ease;
}
.tracker-title {
  font-size: 0.5rem;
}
.info-title {
  font-size: 8px;
}
.recieved-indicator{
    background-color:red;
}
</style>