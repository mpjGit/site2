<script setup>
const { t, locale } = useI18n() // 获取I18n函数
const title = `${t('brand')} - ${t('slogan')}`
const description = t('SEO.description')
console.log(title, description)
useSeoMeta({
  title: title,
  ogTitle: title,
  ogImage: '/og-image.jpg',
  description: description,
  ogDescription: description,
})
useHead({ htmlAttrs: { lang: locale } }) // 设置 html lang 属性
// const runtimeConfig = useRuntimeConfig()
// const appConfig = useAppConfig()
// console.log('runtimeConfig', runtimeConfig)
// console.log('appConfig', appConfig)
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>