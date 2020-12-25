import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueToast from 'vue-toast-notification';


import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueToast);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
