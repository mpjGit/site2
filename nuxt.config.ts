// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: '一起送',
      meta: [
        { charset: 'utf-8' },
        // { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'viewport', content: 'width=1920' },
        
        { name: 'keywords', content: "keywords" },
        { name: 'description', content: "description" },
      ],
      script: [
        { src: 'https://unpkg.com/scrollreveal' }
      ],
    }
  },

  // 需要在构建后使用环境变量指定的私有或公共令牌
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },

  // 全局样式
  css: [
    '~/assets/scss/global.scss'
  ],

  build: {},

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_preset.scss" as *; @use "@/assets/scss/element-variables.scss" as element;',
        }
      }
    }
  },

  elementPlus: { importStyle: 'scss' },

  modules: [
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    '@vant/nuxt',
    'nuxt-echarts',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    vueI18n: './nuxt-i18n.js'
  },
  // 图标配置 使用到的charts、components需要导入
  echarts: {
    renderer: ['svg', 'canvas'],
    charts: ['LineChart', 'ScatterChart', 'BarChart'],
    components: ['TitleComponent', 'TooltipComponent', 'LegendComponent', 'GridComponent']
  },
  
  // 服务器
  nitro: {
    // 该配置用于服务端请求转发
    routeRules: {
      '/front/**': {
        proxy: process.env.NUXT_PUBLIC_API_BASE + '/front/**'
      }
    }
  },

  compatibilityDate: '2024-07-22',
})