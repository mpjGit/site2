<script setup>
onMounted(() => {
  commonScrollReveal('.core-value .img, .core-value .text .item')
})
const coreValue = reactive([
  {
    title: '零售全渠道化',
    desc: '我们提供To B和To C业务支持，线上和线下融合，多级库存共享，有效整合专线、落地配、即时、快递物流等资源，实现业务智控'
  },
  {
    title: '物流全外包',
    desc: '我们从业务到技术具备强资源整合能力，客户可选择与我们的战略合作，将物流全外包，以专注核心业务发展与提升'
  },
  {
    title: '全局供应链管理',
    desc: '我们积极投身于与核心企业的战略合作，融入到客户的供应链中去，跟客户做深度的捆绑，真正的实现两业联动发展'
  },
  {
    title: '差异化/脸谱化服务',
    desc: '我们致力于为核心企业的不同客户提供个性化的物流服务，能够在组织架构、流程设计、KPI、考核等各方面做出灵活应对'
  },
  {
    title: '智能化和数字化转型',
    desc: '我们加速跟进数字化、人工智能化转型的节奏、持续提升员工素质，熟悉自动化供应链操作；全程运作透明且公正公平，以提供智能物流一揽子解决方案'
  }
])
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/banner.jpg" alt="banner">
    <div class="container">
      <div class="text animate__animated animate__fadeInDown">
        <p class="text-2">我们通过平台化运作</p>
        <p class="text-1">助力客户打造自身的核心竞争力</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="core-value">
      <img class="img" src="@/assets/img/core-value-1.svg" alt="img">
      <div class="text">
        <div v-for="(item, index) in coreValue" :key="index" class="item">
          <h3>{{ item.title }}</h3>
          <div class="line"></div>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.core-value {
  display: flex;
  padding: 80px 0px;

  .img {
    width: 60%;
  }

  .text {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    .item {
      color: #fff;
      padding-left: 140px;
      &:nth-child(2n + 1) {
        padding-left: 0;
        padding-right: 140px;
      }

      h3 {
        font-size: 24px;
      }

      .line {
        width: 64px;
        height: 1px;
        background-color: #fff;
        margin: 20px 0 40px;
      }

      p {
        font-size: 15px;
        line-height: 1.4;
      }
    }
  }
}

// 移动端
@media screen and (max-width: 865px) {}
</style>