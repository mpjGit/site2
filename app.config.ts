// 在构建时确定的公共令牌，网站配置（如主题变体、标题）以及不敏感的项目配置等
export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: false,
    colors: {
      primary: '#007bff'
    }
  }
})