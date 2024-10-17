/**
 * demo
 * @param {*} email 
 * @returns 
 */
export const demo = (params) => {
  return getFetchData({
    url: '/demo',
    params
  })
}
