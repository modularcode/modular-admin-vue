// External modules
import 'bootstrap/scss/bootstrap-reboot.scss';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ModularAdmin from './main.vue';
import router from './router';


// Common modules
import './_common';

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  template: '<ModularAdmin />',
  components: { ModularAdmin },
});
