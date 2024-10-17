<script setup>
const { locale } = useI18n() // 获取语言
const localePath = useLocalePath() // 获取语言路径
// 获取当前路由
const router = useRouter()
const currentPath = router.currentRoute.value.path
</script>

<template>
  <div v-if="currentPath !== '/contact'" class="telephone-shell">
    <div class="container">
      <img class="telephone" src="@/assets/img/telephone.svg" alt="telephone">
    </div>
  </div>
  <footer class="web-footer">
    <div class="container">
      <icon class="icon" size="48">
        <img src="@/assets/icon/fb.svg" alt="icon">
      </icon>
      <div class="wx-shell">
        <icon class="icon" size="48">
          <img src="@/assets/icon/wx.svg" alt="icon">
        </icon>
        <div class="qrcode">
          <div>
            <img src="@/assets/img/qrcode/wx.jpg" alt="qrcode">
            <p>一起送微信公众号</p>
          </div>
          <div>
            <img src="@/assets/img/qrcode/wx-2.jpg" alt="qrcode">
            <p>一起送平台微信公众号</p>
          </div>
        </div>
      </div>
      <icon class="icon" size="48">
        <img src="@/assets/icon/x.svg" alt="icon">
      </icon>
      <span class="space"></span>
      <a href="/join-us" class="link">招贤纳士</a>
      <a href="/privacy-policy" class="link">隐私政策</a>
      <a href="/proviso" class="link">条款条约</a>
      <a href="/contact" class="link">联系我们</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.telephone-shell {
  padding: 30px 0;
  text-align: right;

  .telephone {
    width: 360px;
  }
}

.web-footer {
  height: 120px;
  background-color: #262626;
  color: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 30px;

    .space {
      flex: 1;
    }

    .link {
      font-size: 16px;
      margin: 0 24px;
      padding: 6px;
    }
  }
}

.wx-shell {
  width: 48px;
  height: 48px;
  position: relative;

  .qrcode {
    display: flex;
    position: absolute;
    left: 50%;
    margin-left: -140px;
    bottom: 65px;
    width: 280px;
    background-color: #fff;
    opacity: 0;
    transition: all 0.2s ease-out;
    color: #333;
    text-align: center;
    font-size: 12px;
    pointer-events: none;
    padding: 10px 10px 18px;

    &::after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 50%;
      margin-left: -10px;
      border-width: 0 10px 10px;
      border-style: solid;
      border-color: transparent transparent #fff;
      transform: rotate(180deg);
    }
  }

  &:hover .qrcode {
    opacity: 1;
    pointer-events: initial;
    bottom: 70px;
  }
}

@media (max-width: 768px) {
  .web-footer {
    height: auto;
    padding: 20px 0;

    .container {
      flex-wrap: wrap;
      justify-content: center;

      .space {
        width: 100%;
        flex-basis: 100%;
        flex-shrink: 0;
      }
    }
  }
}
</style>