// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// <---- CSS ---->
require('./assets/css/bootstrap.css')
require('./assets/css/bootstrap-responsive.css')
require('./assets/css/style.css')

// <---- JS ---->
require('./assets/js/jquery-1.8.2.js')
require('./assets/js/bootstrap.js')
require('./assets/js/flexslider.js')
require('./assets/js/carousel.js')
require('./assets/js/jquery.cslider.js')
// require('./assets/js/slider.js')
require('./assets/js/custom.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
