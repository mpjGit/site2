<script setup>
const { tm } = useI18n() // 获取I18n函数
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
const textDisplay = ref([true, true, true, true, true, true, true, true])
const onSlideChangeTransitionStart = (swiper) => {
  textDisplay.value[swiper.activeIndex] = false
  nextTick(() => {
    textDisplay.value[swiper.activeIndex] = true
  })
}
onMounted(() => {
  commonScrollReveal('.home-block-1, .home-title, .customer .item, .map')
})
</script>

<template>
  <swiper :speed="2000" :spaceBetween="30" :effect="'fade'" :loop="true" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :modules="[EffectFade, Pagination, Autoplay]" class="home-swiper"
    @slideChangeTransitionStart="onSlideChangeTransitionStart">
    <swiper-slide>
      <div v-if="textDisplay[0]" class="home-swiper-slide">
        <div class="container">
          <div class="text animate__animated animate__fadeInDown">
            <h1>头部企业正在使用的数字化物流平台提供商</h1>
            <p>一起送，在一起</p>
          </div>
        </div>
        <video src="@/assets/video/home-1.mp4" autoplay loop playsinline webkit-playsinline muted></video>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div v-if="textDisplay[1]" class="home-swiper-slide">
        <div class="container">
          <div class="text animate__animated animate__fadeInDown">
            <h1>智驭绿色物流，共创高效生态</h1>
            <p>您的数字化物流专家</p>
          </div>
        </div>
        <img src="@/assets/img/home/8.jpg" alt="banner">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div v-if="textDisplay[2]" class="home-swiper-slide">
        <div class="container">
          <div class="text animate__animated animate__fadeInDown">
            <h1>领先的4PL服务商 不断革新运营与服务模式</h1>
            <p>一起送，在一起</p>
          </div>
        </div>
        <img src="@/assets/img/home/9.jpg" alt="banner">
      </div>
    </swiper-slide>
  </swiper>
  <div class="container">
    <div class="home-block-1">
      <div class="item">
        <icon size="110">
          <img src="@/assets/icon/home-icon-4.svg" alt="icon">
        </icon>
        <div class="title">全球视野</div>
        <div class="line"></div>
        <div class="desc">不断吸纳社会优质运力，辐射全国各个重点区域，积极布局海外网络，为客户的业务发展提供更全面的物流服务保障</div>
      </div>
      <div class="item">
        <icon size="110">
          <img src="@/assets/icon/home-icon-5.svg" alt="icon">
        </icon>
        <div class="title">构筑生态</div>
        <div class="line"></div>
        <div class="desc">以物流服务为核心，通过平台整合更多的跨界社会资源，不断完善服务领域，并为长效共赢发展提供新的利润增长点</div>
      </div>
      <div class="item">
        <icon size="110">
          <img src="@/assets/icon/home-icon-6.svg" alt="icon">
        </icon>
        <div class="title">改革创新</div>
        <div class="line"></div>
        <div class="desc">积极升级原有的经营模式，不断用先进的技术武装自己，以快速抢占市场先机，向现代科技化物流的方向发展</div>
      </div>
    </div>
    <div class="home-title">
      <h1 class="main">布局全球服务网络，致力于为客户提供差异化、高品质服务</h1>
      <div class="line"></div>
    </div>
    <img class="map" src="@/assets/img/home/6.svg" alt="img">
    <div class="home-title">
      <h1 class="main">为客户长期战略合作伙伴，创造更高的价值</h1>
      <div class="line"></div>
      <p class="desc">我们服务于</p>
    </div>
    <div class="customer">
      <div class="item">
        <img src="@/assets/img/home/1.svg" alt="customer">
        <p>石化能源行业</p>
      </div>
      <div class="item">
        <img src="@/assets/img/home/2.svg" alt="customer">
        <p>汽车零配件行业</p>
      </div>
      <div class="item">
        <img src="@/assets/img/home/3.svg" alt="customer">
        <p>医疗器械行业</p>
      </div>
      <div class="item">
        <img src="@/assets/img/home/4.svg" alt="customer">
        <p>智能家居行业</p>
      </div>
      <div class="item">
        <img src="@/assets/img/home/5.svg" alt="customer">
        <p>风电新能源行业</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-swiper {
  width: 100vw;
  height: 100vh;
}

.home-swiper-slide {
  position: relative;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    position: absolute;
    z-index: 10;
    top: 50%;
    color: #fff;
    line-height: 1.4;

    h1 {
      font-size: 48px;
      font-weight: normal;
    }

    p {
      font-size: 36px;
      font-weight: bold;
    }
  }
}

.home-block-1 {
  display: flex;
  padding: 100px 0;
  gap: 100px;

  .item {
    color: #fff;
    text-align: center;
    flex: 1;

    .title {
      font-size: 24px;
      margin-top: 30px;
    }

    .line {
      width: 60px;
      border-bottom: 1px solid #fff;
      background-color: #fff;
      margin: 15px auto 30px;
    }

    .desc {
      text-align: left;
      font-size: 15px;
      line-height: 2;
    }
  }
}

.home-title {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    font-size: 24px;
  }

  .line {
    width: 380px;
    border-bottom: 1px solid #fff;
    max-width: 80%;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .desc {
    font-size: 15px;
  }
}

.customer {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 40px 0 200px;

  .item {
    text-align: center;
    color: #fff;

    img {
      width: 100px;
      height: 100px;
    }

    p {
      margin-top: 25px;
      font-size: 18px;
    }
  }
}

.map {
  margin: 0 auto 150px;
}

// 移动端
@media screen and (max-width: 865px) {}
</style>