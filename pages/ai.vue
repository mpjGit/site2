<script setup>
onMounted(() => {
  commonScrollReveal('.block-title-shell, .text-box h2, .text-box p, .text-box .img')
})
</script>

<template>
  <div class="banner">
    <img class="img" src="@/assets/img/banner-5.jpg" alt="banner">
    <div class="container">
      <div class="text animate__animated animate__fadeInDown">
        <p class="text-1">
          AI应用领域的先行者
        </p>
        <p class="text-2">一起送，在一起</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="block-title-shell">
      <block-title desc="依托机器人流程自动化、人工智能、大数据三大核心技术<br>协助员工完成大量重复、规则明确且耗费时间的工作，实现业务流程自动化" title="AI可定制数字员工" />
    </div>
    <div class="text-box">
      <img class="img" src="@/assets/img/ai-1.png" alt="img">
      <div class="content">
        <h2>通过AI替代工作来提高效率和降低成本</h2>
        <p>数字客服具备自主学习能力，显著促进企业知识库系统的高效优化</p>
        <p>借助人工智能在语音呼叫、订单验证、车辆调度、结算处理及数据分析等多领域的深度应用，大幅削减了客户服务领域的培训成本与人员流动成本，显著提升了运营效率与成本效益</p>
        <h2>人机无缝协作，服务高效专业</h2>
        <p>深度整合外部先进的人工智能大模型，无缝接入行业大数据资源，加速物流行业的全面数字化转型进程</p>
        <p>显著减轻人工操作员的工作负担，通过人工智能前置处理近80%的日常简单问题，使人工团队能够专注于解决剩余20%的核心复杂挑战，实现效率与质量的双重提升</p>
        <h2>旨在建立物流行业的AI综合应用模型</h2>
      </div>
    </div>
  </div>
  <img class="illustration" src="@/assets/img/ai-2.png" alt="ai">
</template>

<style lang="scss" scoped>
.block-title-shell {
  margin-top: 80px;
}

.text-box {
  position: relative;
  padding-right: 40%;
  .img{
    position: absolute;
    width: 55%;
    right: 0;
    top: -100px;
  }
  .content {
    letter-spacing: 3px;
    h2 {
      font-size: 36px;
      margin: 80px 0 30px;
    }

    p {
      font-size: 24px;
      line-height: 2;
      padding-left: 30px;
      position: relative;
      &::before{
        content: '-';
        left: 0px;
        position: absolute;
      }
    }
  }
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