<script setup>
import jquery from 'jquery'
import { useStore } from "@/stores"
const store = useStore()
const storeRef = storeToRefs(store)
// 语言选项
const languageOptions = [
  {
    label: 'English',
    key: 'en'
  }, {
    label: '中文',
    key: 'zh'
  }
]
const menuList = reactive([
  {
    label: '核心价值',
    path: '/core-value',
    active: false,
  }, {
    label: '创新业务',
    path: 'javascript:void(0)',
    active: false,
    children: [
      { label: '第四方物流管理平台', path: '/4pl' },
      { label: '自由芯®智能跟踪设备', path: '/locate' },
      { label: '无纸化物流解决方案', path: '/nopaper' },
      { label: 'AI可定制数字员工', path: '/ai' },
    ]
  }, {
    label: '社会责任',
    path: '/responsibility',
    active: false,
  }, {
    label: '了解更多',
    path: 'javascript:void(0)',
    active: false,
    children: [
      { label: '发展历程', path: '/process' },
      { label: '企业认证', path: '/attestation' },
      { label: '全球布局', path: '/global' },
    ]
  },
])
const localePath = useLocalePath() // 获取语言路径
const switchLocalePath = useSwitchLocalePath() // 切换语言路径
const router = useRouter()
// 改变语言
const changeLanguage = (lang) => {
  router.push(switchLocalePath(lang))
}
// 移动端菜单
const mobileMenuDisplay = ref(false)
const switchMobileMenu = () => {
  mobileMenuDisplay.value = !mobileMenuDisplay.value
}
const switchMobileMenuCell = (item) => {
  // 获取屏幕宽度
  const screenWidth = jquery(window).width()
  if(screenWidth > 768) return false
  item.active = !item.active
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-main flex-between">
      <a href="/" class="router-link-active router-link-exact-active logo-container" aria-current="page">
        <img src="@/assets/img/logo.svg" class="logo">
      </a>
      <div class="menu-box">
        <div class="menu-control" @click="switchMobileMenu">
          <icon size="24">
            <img src="@/assets/icon/menu.svg" alt="icon">
          </icon>
        </div>
        <div class="menus flex-between show" :class="{ 'active': mobileMenuDisplay }">
          <div class="close iconfont" @click="switchMobileMenu">
            <icon size="24">
              <img src="@/assets/icon/close.svg" alt="icon">
            </icon>
          </div>
          <div class="flex-between menu-container">
            <div v-for="(item, index) in menuList" :key="index" class="menu-item" :class="{ 'active': item.active }">
              <div class="mask"></div>
              <a :href="item.path" @click="switchMobileMenuCell(item)">
                {{ item.label }}
                <icon v-if="item.children" class="arrow-down" size="10">
                  <img src="@/assets/icon/arrow-down.svg" alt="icon">
                </icon>
              </a>
              <div class="children-container">
                <div class="children">
                  <div v-for="child in item.children" :key="child.label" class="child">
                    <a :href="child.path" class="">{{ child.label }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <a class="lang flex-item-no-shrink" href="#">EN</a>
          <a class="pro flex-item-no-shrink" href="#">专业客户入口</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 4.375vw;
}

.navbar {
  width: 100%;
  height: 11.1vh;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  overflow: visible;
  line-height: 100%;
  z-index: 500 !important;
  transition: background-color .2s linear
}

.navbar.pre-sticky {
  position: fixed;
  top: -80px;
  opacity: 0;
  transition: all .2s linear
}

.navbar.pre-sticky.is-sticky {
  top: 0;
  opacity: 1
}

.navbar:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 4.6875vw;
  top: 0;
  left: 0;
  opacity: .25;
  background: linear-gradient(180deg, #000, #d9d9d900);
  pointer-events: none;
}

.navbar-main {
  height: 100%;
  overflow: visible;
  line-height: 120px;
  z-index: 2;
  width: 100% !important;
  margin-left: auto;
  margin-right: auto;
  padding: 0 8vw;
  .logo-container {
    display: inline-block;
    height: 100%;
    width: 6.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.menu-box .menu-control {
  display: none
}

.menus {
  margin-left: 1.1vw;
  position: relative;
  opacity: 0;
  top: 1em;
  transition: all .5s ease-out;
  .line{
    height: 0.9vw;
    width: 1.5px;
    background-color: #fff;
    margin-right: 1.56vw;
  }
}

.menus.show {
  opacity: 1;
  top: 0
}

.menus .close {
  display: none
}

.menus .menu-container {
  flex-wrap: wrap;
  font-size: 0.9vw;
  font-weight: 400;
  line-height: 1.13em;
  letter-spacing: 0em;
  text-align: left;
  flex-wrap: nowrap;
}

.menus .menu-item {
  padding: 0.52vw 1.15vw;
  margin-right: 2.2em;
  position: relative;
  white-space: nowrap;
  letter-spacing: .15em;
  color: #fff;
}

.menus .menu-item .mask {
  opacity: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background: #000000b3;
  pointer-events: none;
  transition: all .5s ease
}

.menus .menu-item .children-container {
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  opacity: 0;
  height: 100%;
  overflow: hidden;
  transition: all .5s ease;
  padding: 1em;
}

.menus .menu-item .children-container .children .child {
  white-space: nowrap;
  font-size: 14px;
}

.menus .menu-item .children-container .children .child a {
  display: block;
  padding: .8em 2em;
  color: #fff
}

@media (any-hover: hover) {
  .menus .menu-item .children-container .children .child a:hover {
    color: #fff
  }
}

.menus .menu-item .children-container .children .third-lv {
  padding: .5em 1em
}

@media (any-hover: hover) {
  .menus .menu-item:hover .arrow-down {
    transform: rotate(180deg);
  }

  .menus .menu-item:hover .mask {
    opacity: 1
  }

  .menus .menu-item:hover .children-container {
    display: block;
    opacity: 1;
    height: auto
  }
}

.lang {
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 0.9vw;
  text-align: center;
  color: #FFFFFF;
}

.pro {
  font-size: 0.9vw;
  text-align: center;
  color: #FFFFFF;
  margin-left: 60px;
}

@media (max-width: 768px) {
  .navbar-main {
    height: 80px
  }

  .logo {
    width: 50px;
  }

  .menu-box .icon-menu {
    font-size: 12px
  }

  .menu-box .menu-control {
    display: block
  }

  .menu-box .menus {
    display: block;
    opacity: 0;
    left: -100%
  }

  .menu-box .menus.active {
    opacity: 1;
    left: 0
  }

  .menus {
    box-sizing: border-box;
    position: fixed;
    z-index: 200;
    top: 0;
    bottom: 0;
    width: 100vw;
    background: #000;
    padding: 25px;
    margin-left: 0;
    transition: all .3s ease-out;
    overflow-x: hidden;
    overflow-y: auto
  }

  .menus .close {
    display: block;
    width: 16px;
    height: 16px;
    float: right
  }

  .menus .menu-container {
    clear: both;
    flex-direction: column;
    align-items: start;
    font-size: 5vw;
    padding: 15px 0;
  }

  .menus .menu-item {
    margin: 1vw 0
  }

  .menus .menu-item .iconfont {
    font-size: .25em
  }

  .menus .menu-item .children-container {
    position: relative;
    height: 0;
    font-size: 4vw;
    padding: 0
  }

  .menus .menu-item .children-container .children {
    padding-top: .8em;
    background: none;
    border: none
  }

  .menus .menu-item .children-container .children .child a {
    padding: .7em 1em
  }

  .menus .menu-item .children-container .children .child.third {
    border: 0
  }

  .menus .menu-item .children-container .children .third-lv {
    padding: 0 1em
  }

  .menus .menu-item.active .iconfont.icon-a-down-triangle {
    display: none
  }

  .menus .menu-item.active .iconfont.icon-a-up-triangle-copy {
    display: inline-block
  }

  .menus .menu-item.active .children-container {
    opacity: 1;
    height: fit-content
  }

  .lang {
    width: 100%;
    text-align: left;
    padding: 10px 22px;
  }
}

@media (max-width: 1080px) {
  .menus .menu-item{
    margin-right: 0;
  }
}
</style>