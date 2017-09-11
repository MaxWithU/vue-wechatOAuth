export default function (name) {
  let r = window.location.search.substr(1).match(new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'))
  return r ? r[2] : null
}
