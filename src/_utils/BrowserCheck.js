export default function Browser () {
  if (window.navigator.userAgent.match(/MicroMessenger/i)) {
    return true
  } else {
    return false
  }
}
