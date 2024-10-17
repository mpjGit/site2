<script setup>
onMounted(() => {
  commonScrollReveal('.block-title-shell, .video')
})
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/banner-3.jpg" alt="banner">
    <div class="container">
      <div class="text animate__animated animate__fadeInDown">
        <p class="text-1">
          基于物流信息科技的新质生产力
        </p>
        <p class="text-2">一起送，在一起</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="block-title-shell">
      <block-title desc="从发运到签收，实现货物在全球范围内，全程可视化、可控化、可追溯" title="自由芯®智能跟踪设备" />
      <p class="block-title-info">通过自主研发IoT智能硬件设备 — 自由芯®，实现电子回单ePOD功能，赋能运输全程可视化，以货物为中心随时掌握运输位置和状态，实现物流发货方、承运方、收货方对各个作业环节的透明化管控，从而推动无纸化绿色供应链发展。</p>
    </div>
    <video class="video" src="@/assets/video/home-1.mp4" autoplay loop playsinline webkit-playsinline muted></video>
  </div>
  <img class="illustration" src="@/assets/img/locate-1.png" alt="4pl">
</template>

<style lang="scss" scoped>
.block-title-shell {
  margin-top: 80px;
}

.block-title-info{
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 100px;
}

.video{
  width: 100%;
}

.illustration {
  margin-top: 100px;
  margin-bottom: -200px;
  z-index: -1;
  position: relative;
  padding: 0 30px;
}

// 移动端
@media screen and (max-width: 865px) {}
</style>