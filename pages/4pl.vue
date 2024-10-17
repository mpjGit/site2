<script setup>
onMounted(() => {
  commonScrollReveal('.block-title-shell, .img-4pl, .info-list, .info-list2')
})
const infoList = reactive([
  {
    title: '全端到端协同',
    desc: '企业上下游信息互联互通，消除信息孤岛'
  },
  {
    title: '统一运作标准',
    desc: '业务可持续，模式可复制、跨行业应用'
  },
  {
    title: '透明公正高效',
    desc: '运用算法整合并运行订单，网罗优质资源公平竞价'
  },
  {
    title: '跨界构筑生态',
    desc: '以物流服务为核心，整合跨界社会资源，涵盖交通、征信、金融、保险等'
  }
])
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/home/9.jpg" alt="banner">
    <div class="container">
      <div class="text animate__animated animate__fadeInDown">
        <p class="text-1">
          领先的4PL服务商
          <br>不断革新运营与服务模式
        </p>
        <p class="text-2">一起送，在一起</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="block-title-shell">
      <block-title desc="智能 | 协同 | 高效 | 生态" title="第四方物流管理平台" />
    </div>
    <img class="img-4pl" src="@/assets/img/4pl.png" alt="4pl">
    <div class="info-list">
      <img class="img" src="@/assets/img/4pl-2.svg" alt="4pl">
      <div class="info-text">
        <div class="info-item" v-for="(item, index) in infoList" :key="index">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <div class="row-title"><em>3</em>大创新模式</div>
    <div class="info-list2">
      <div class="item">基于供应链端到端的4PL平台运作</div>
      <div class="item">基于经销商共享仓/运力的4PL新模式</div>
      <div class="item">基于大数据的供应链决策辅助工具</div>
    </div>
  </div>
  <img class="illustration" src="@/assets/img/4pl-4.png" alt="4pl">
</template>

<style lang="scss" scoped>
.block-title-shell {
  margin-top: 80px;
}

.info-list {
  display: flex;
  padding: 100px 0;

  .img {
    width: 310px;
  }

  .info-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
    padding-left: 80px;

    .info-item {
      .title {
        font-size: 36px;
      }

      .desc {
        font-size: 24px;
        margin-top: 20px;
      }
    }
  }
}

.row-title {
  font-size: 36px;
  color: #005CA4;
  text-align: center;

  em {
    font-size: 150px;
  }
}

.info-list2 {
  color: #fff;
  display: flex;
  gap: 40px;
  margin-top: 30px;

  .item {
    font-size: 36px;
    background-image: url('@/assets/img/4pl-3.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 80px;
    line-height: 1.4;
    text-align: center;
  }
}

.illustration {
  margin-top: 80px;
  margin-bottom: -160px;
  z-index: -1;
  position: relative;
  padding: 0 20px;
}

// 移动端
@media screen and (max-width: 865px) {}
</style>