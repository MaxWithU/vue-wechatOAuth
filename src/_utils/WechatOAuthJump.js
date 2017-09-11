import GetQueryString from '@/_utils/GetQueryString.js'
import store from '@/store'
export default function (to, next) {
  if (GetQueryString('code')) {
    const WECHATUSERINFO = {
      USERINFO: 'YOUR_WECHAT_USERINFO'
    } // 找服务器拉取用户信息
    store.commit('SaveWXUserInfo', WECHATUSERINFO)
    window.location.replace('/#' + to.path)
    next()
  } else {
    window.location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${store.state.WXAppID}&response_type=code&scope=snsapi_userinfo&redirect_uri=${encodeURIComponent(window.location.href)}`)
  }
}
