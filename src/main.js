// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import BrowserCheck from '@/_utils/BrowserCheck'
import WechatOAuthJump from '@/_utils/WechatOAuthJump'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (BrowserCheck()) {
    if (store.state.WXUserInfo) {
      next()
    } else {
      WechatOAuthJump(to, next)
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
