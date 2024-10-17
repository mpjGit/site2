/**
 * 睡眠
 * @param {number} timeout - 睡眠时间
 * @returns 
 */
export const sleep = (timeout = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

/**
 * 节流
 * @param {function} func - 方法
 * @param {number} delay - 延迟时间
 */
export function throttle(func, delay = 500) {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastTime > delay) {
      func.apply(this, args)
      lastTime = now
    }
  }
}

/**
 * 确认弹窗
 * @param {string} content - 提示内容
 * @param {string} title - 标题
 */
export const showConfirm = (content = '', title = 'Warning') => {
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
}

/**
 * value 转换 Label
 * @param {string | number} value 
 * @param {array} dict 
 */
export const value2Label = (value, dict = []) => {
  const item = dict.filter(item => item.value == value)[0]
  return item ? item.label : value
}

/**
 * 校验邮箱
 * @param {string} email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 对象的深拷贝 
 * @param {object} obj 
 */
export const cloneDeep = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj; // 基本类型直接返回
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime()); // 日期对象
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags); // 正则表达式
  }
  // 初始化返回值
  let clone;
  if (Array.isArray(obj)) {
    clone = []; // 数组
  } else {
    clone = {}; // 普通对象
  }
  // 递归复制所有属性
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = cloneDeep(obj[key]);
    }
  }
  return clone;
}

// 数字添加千分位
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 通用页面元素显示动画
export const commonScrollReveal = (elements) => {
  ScrollReveal().reveal(elements, {
    reset: true,
    origin: 'bottom',
    easing: 'ease-in-out',
    distance: '50px',
    opcity: 0.5,
  })
}