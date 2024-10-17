<script setup>
onMounted(() => {
  commonScrollReveal('.block-title-shell, .text-box h2, .text-box p, .text-box .img')
})
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/banner-6.jpg" alt="banner">
    <div class="container">
      <div class="text animate__animated animate__fadeInDown">
        <p class="text-1">
          头部企业正在使用的数字化物流平台提供商
        </p>
        <p class="text-2">一起送，在一起</p>
      </div>
    </div>
  </div>
  <div class="container">
    
  </div>
  <!-- <img class="illustration" src="@/assets/img/ai-2.png" alt="ai"> -->
</template>

<style lang="scss" scoped>
.block-title-shell {
  margin-top: 80px;
}

.illustration {
  margin-top: 40px;
  margin-bottom: -160px;
  z-index: -1;
  position: relative;
  padding: 0 20px;
}

// 移动端
@media screen and (max-width: 865px) {}
</style>