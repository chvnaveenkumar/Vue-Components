import Vue from 'vue'
import App from './App.vue'
import header from './Header.vue'
import Footer from './Footer.vue';
import Servers from './Servers.vue';
import ServerDetails from './ServerDetails.vue';

Vue.component('app-headers',header);
Vue.component('app-servers',Servers);
Vue.component('app-footer',Footer);
Vue.component('app-server-details',ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
})
