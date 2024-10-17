/**
 * 监听页面触底
 * @param {*} fn 
 * @param {*} threshold - 触底阈值
 */
export async function onReachBottom(fn, threshold = 100) {
  let lock = false
  const scrollFn = () => {
    if (document.documentElement.scrollTop + document.documentElement.clientHeight >= (document.documentElement.scrollHeight - threshold)) {
      if(lock) return false
      console.log('页面触底')
      fn && fn()
      lock = true
    }else{
      lock = false
    }
  }
  onMounted(() => {
    window.addEventListener("scroll", scrollFn)
  })
  // 卸载resize事件
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollFn)
  })
}
