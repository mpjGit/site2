<script setup>
import jquery from 'jquery'

onMounted(() => {
  commonScrollReveal('.text-content, .process')
  jquery('.process .process-item').mouseenter(() => {
    jquery('.process .process-item').addClass('transparent')
  })
  jquery('.process .process-item').mouseleave(() => {
    jquery('.process .process-item').removeClass('transparent')
  })
})
const process = reactive([
  {
    position: [0, 22],
    year: '2015-2017',
    html: `一起送以物流服务为核心，持续深耕国内大客户市场，行业横跨石化、汽车后市场、快消以及医疗器械等`
  },
  {
    position: [36, 55],
    year: '2018',
    html: `一起送正式成立非洲分公司，在肯尼亚设立中转仓，开启国际化供应链服务领域`
  },
  {
    position: [12.5, 34],
    year: '2019',
    html: `一起送与客户开展电商仓配一体化合作，进入电商供应链服务领域`
  },
  {
    position: [12.5, 47],
    year: '2020',
    html: `一起送正式启动第四方物流平台研究与开发，并于华东区域投入试运营，获得成功`
  },
  {
    position: [12.5, 60],
    year: '2021',
    html: `一起送第四方物流平台的运营模式正式推广至全国各大区域`
  },
  {
    position: [25, 42],
    year: '2022',
    html: `一起送正式成立新加坡分公司，与客户展开基于第四方物流平台的海外领域合作，服务网络辐射东南亚`
  },
  {
    position: [12.5, 73],
    year: '2023',
    html: `一起送拓展智能家居行业头部客户，并开创经销商共享仓/共享运力，以及大件物流“仓干配装一体“的创新合作模式`
  },
  {
    position: [48, 25],
    year: '2024',
    html: `一起送筹备成立欧洲分公司`
  }
])
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/banner-8.jpg" alt="banner">
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
    <div class="text-content">
      <h2>一起送成立于 2015 年，
        <br>是一家以供应链服务为基石的创新型科技公司
      </h2>
      <p>公司的创始团队由资深物流人、来自全球领先的战略/IT管理咨询公司的专家顾问以及世界500强企业中的管理精英汇聚而成</p>
      <p>围绕“大运营和大物流”，利用物联网技术与AI智能，实现物流行业的转型升级，提供定制化解决方案，打造行业标杆</p>
    </div>
    <div class="process">
      <div v-for="(item, index) in process" :key="index" class="process-item"
        :style="`right: ${item.position[0]}%; top: ${item.position[1]}%;`">
        <div class="year">{{ item.year }}</div>
        <div v-html="item.html" class="html" />
      </div>
      <img class="img" src="@/assets/img/process-1.svg" alt="img">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-title-shell {
  margin-top: 80px;
}

.text-content {
  letter-spacing: 3px;
  margin-bottom: 100px;

  h2 {
    font-size: 36px;
    margin: 80px 0 30px;
  }

  p {
    font-size: 24px;
    line-height: 2;
    padding-left: 30px;
    position: relative;

    &::before {
      content: '-';
      left: 0px;
      position: absolute;
    }
  }
}

.process {
  position: relative;

  .process-item {
    position: absolute;
    text-align: right;
    max-width: 50%;
    transition: all .2s ease-out;

    .year {
      font-size: 50px;

      &::after {
        content: '+';
        font-size: .6em;
        color: #00BFD6;
      }
    }

    .html {
      font-size: 24px;
      line-height: 1.4;
      opacity: 0;
      transition: all .2s ease-out;
      pointer-events: none;
      height: 0;
      position: absolute;
      width: 40vw;
      max-width: 600px;
      min-width: 200px;
      right: 0;
      margin-top: 5px;
    }

    &:hover {
      z-index: 10;
      opacity: 1;

      .html {
        opacity: 1;
        margin-top: 0px;
      }
    }
  }

  .transparent {
    opacity: 0.3;
  }
}


// 移动端
@media screen and (max-width: 865px) {}
</style>