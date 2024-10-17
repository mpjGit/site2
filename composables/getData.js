import { useStore } from "@/stores"
let store = null
let loadingCount = 0;
export async function getFetchData({
  url,
  params,
  method = 'get', // 'get' | 'post'
  contentType = 'application/json', // 'application/x-www-form-urlencoded' | 'application/json'
  server = false, // true:客户端请求 | false:server
}) {
  // const config = useRuntimeConfig();
  if (!store) store = useStore()
  const localePath = useLocalePath() // 获取语言路径
  const router = useRouter()
  const _fetch = server ? useFetch : $fetch
  const response = await _fetch(url, {
    method,
    // ofetch库会自动识别请求地址，对于url已包含域名的请求不会再拼接baseURL
    // baseURL: config.public.apiBase,
    // onRequest相当于请求拦截
    onRequest({ request, options }) {
      // 设置请求头
      options.headers = {
        'Content-Type': contentType,
        'x-access-token': store.token
      };
      // 设置请求参数
      if (method === 'post') {
        options.body = params || {};
      } else {
        options.query = { ...params };
      }
      if (loadingCount === 0) {
        showLoadingToast({ duration: 0, forbidClick: false });
      }
      loadingCount++;
    },
    // onResponse相当于响应拦截
    onResponse({ response }) {
      const _data = response._data
      // 处理响应数据
      loadingCount--;
      if (loadingCount === 0) {
        closeToast();
      }
      if (!server) {
        if (_data.code === 401) {
          store.$reset()
          router.push(localePath('/login'))
        }
        if (!_data.suc) {
          ElMessage.error(_data.message)
        }
      }
    },
    onRequestError({ request, options, error }) {
      // 处理请求错误
      // console.warn('request error', error);
      showToast('Request Error');
    },
    onResponseError({ request, response, options }) {
      // 处理响应错误
      // console.warn('request error', response);
      showToast('Response Error');
    },
  });
  console.log('response-' + url, response)
  // 这里data本身是个ref对象，将其内部值抛出去方便调用时获得数据。
  if (server) {
    const value = response.data.value
    return value
  } else {
    return response
  }
}
