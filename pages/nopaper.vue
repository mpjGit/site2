<script setup>
onMounted(() => {
  commonScrollReveal('.block-title-shell, .info-list .item')
})
const infoList = reactive([
  {
    title: '合同合约无纸化',
    text1: '· 通过第四方物流管理平台线上生成并签署，永久保存',
    text2: '· 符合电子签名法，具有法律效力',
  },
  {
    title: '物流单据数字化',
    text1: '· 物流全链条数据线上化，提高信息交互效率',
    text2: '· 纸质单据数字化，避免单据丢失毁损',
  },
  {
    title: '货权交接无纸化',
    text1: '· 货物电子扫码识别订单内容，提供货权交接凭证',
    text2: '· 实时记录交接信息，形成覆盖整个场景的证据流',
  },
  {
    title: '电子回单数字化',
    text1: '· 交易完成，平台即刻生成具有法律约束的电子收据',
    text2: '· 与保险公司紧密合作，确保交付责任全程无忧',
  },
])
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/banner-4.jpg" alt="banner">
    <div class="container">
      <div class="text animate__animated animate__fadeInDown">
        <p class="text-1">
          客户实现无纸化物流的优选
        </p>
        <p class="text-2">一起送，在一起</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="block-title-shell">
      <block-title desc="基于场景的全链路可视化管控，贯穿物流运输全环节的无纸化及单据数字化解决方案" title="无纸化物流解决方案" />
    </div>
    <div class="info-list">
      <img class="img" src="@/assets/img/nopaper-2.png" alt="img">
      <div class="info-block">
        <div v-for="(item, index) in infoList" :key="index" class="item">
          <p class="title">{{ item.title }}</p>
          <p class="text">
            {{ item.text1 }}
            <br><br>
            {{ item.text2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <img class="illustration" src="@/assets/img/nopaper-1.png" alt="4pl">
</template>

<style lang="scss" scoped>
.block-title-shell {
  margin-top: 80px;
}

.block-title-info {
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 100px;
}

.video {
  width: 100%;
}

.info-list {
  padding: 80px 0 0px 80px;
  display: flex;

  .img {
    width: 66px;
  }

  .info-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 52px 0;
    padding-left: 50px;

    .item {
      display: flex;
      align-items: center;
      gap: 80px;

      .title {
        font-size: 36px;
      }

      .text {
        font-size: 24px;
        line-height: 1.2;
      }
    }
  }
}

.illustration {
  margin-top: 100px;
  margin-bottom: -210px;
  z-index: -1;
  position: relative;
  padding: 0 40px;
}

// 移动端
@media screen and (max-width: 865px) {}
</style>