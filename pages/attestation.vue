<script setup>
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
onMounted(() => {
  commonScrollReveal('.info-list .item, .attestation-swiper-title, .attestation-swiper')
})
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/banner-7.jpg" alt="banner">
    <div class="container">
      <div class="text animate__animated animate__fadeInDown">
        <p class="text-1">
          头部企业正在使用的数字化物流平台提供商
        </p>
        <p class="text-2">一起送，在一起</p>
      </div>
    </div>
  </div>
  <div class="attestation-swiper-shell">
    <div class="container">
      <h1 class="attestation-swiper-title">
        来自客户与行业的肯定
        <br>持续不断更新并完善的管理体系认证
      </h1>
    </div>
    <swiper :speed="2000" :effect="'coverflow'" :loop="true" :grabCursor="true" :centeredSlides="true"
      :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,
      }" :modules="[EffectCoverflow, Pagination, Autoplay]" class="attestation-swiper">
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/1.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/2.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/3.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/4.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/5.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/6.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/7.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/8.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/9.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/10.jpg" alt="attestation">
      </swiper-slide>
      <swiper-slide class="attestation-swiper-slide">
        <img class="attestation-swiper-img" src="@/assets/img/attestation/11.jpg" alt="attestation">
      </swiper-slide>
    </swiper>
  </div>
  <div class="container">
    <div class="info-list">
      <div class="item">
        <div class="number">53</div>
        <div class="line"></div>
        <div class="text">软件著作权</div>
      </div>
      <div class="item">
        <div class="number">10</div>
        <div class="line"></div>
        <div class="text">国家级认可专利</div>
      </div>
      <div class="item">
        <div class="number">19</div>
        <div class="line"></div>
        <div class="text">知识产权局<br>审理中的专利</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.attestation-swiper-shell {
  padding: 80px 0 50px;
  background: linear-gradient(0deg, #333333 0%, #000000 100%);
}

.attestation-swiper-title {
  font-size: 36px;
}

.attestation-swiper {
  padding: 80px 0;

  .attestation-swiper-slide {
    width: 80vw;
    height: 80vw;
    max-width: 800px;
    max-height: 800px;

    .attestation-swiper-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      
    }
  }
}

:deep() {
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid transparent;
  }
}

.info-list {
  display: flex;
  justify-content: space-around;
  padding: 80px 0;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .number {
      font-size: 130px;
      background: linear-gradient(0deg, #32DCEC 0%, #2106DB 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .line {
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, #33E2ED 0%, #2000DA 100%);
    }

    .text{
      font-size: 24px;
      text-align: center;
      margin-top: 20px;
    }
  }
}

// 移动端
@media screen and (max-width: 865px) {}
</style>