import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state: {
    WXAppID: 'YOUR_WECHAT_APPID_HERE',
    WXUserInfo: JSON.parse(window.sessionStorage.getItem('WX_USER_INFO'))
  },
  strict: debug,
  mutations: {
    SaveWXUserInfo (state, obj) {
      window.sessionStorage.setItem('WX_USER_INFO', JSON.stringify(obj))
      state.WXUserInfo = obj
    },
    RemoveWXUserInfo (state) {
      window.sessionStorage.removeItem('WX_USER_INFO')
      state.WXUserInfo = {}
      window.location.reload()
    }
  },
  actions: {
  }
})
