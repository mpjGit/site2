# 一起送 官网

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 本地运行

```bash
node 版本 v20.9.0

# 安装依赖
npm install

# 本地运行前端
npm run dev

# 服务器运行前端
npm run build
npm run start
```

## 全局规范
屏幕宽度 < 768px 为移动端，>= 768px 为PC端

## 页面动画 ScrollReveal.js
https://scrollrevealjs.org/
```

ScrollReveal().reveal('选择需要添加动画的元素', {
  reset: true    // 元素离开视口后返回初始位置, 等待下一次触发, 值为false时动画值触发一次
  origin: 'bottom'     // 指定元素在显示时的方向, 需要给options指定非零值才能对origin动画产生明显影响。
                       // 接受的参数 'top' 'right' 'bottom' 'left' 
  delay: 500     // 动画开始前的延迟时间, 触发的动画 reset 永远不会使用延迟。
  distance: '-50px'   // 控制元素在显示时移动多远。接受的单位 px|em|%
  duration: 500   // 控制动画持续时间, 单位为 ms
  easing: 'ease-in-out'    // 控制动画如何在起始值和结束值之间转换
  opacity: 0.5    //指定在显示之前它们具有的不透明度。        
  rotate: { x: 0, y: 0, z: 0 }     // number单位为角度
  scale: 0.8      //指定在显示之前元素的大小。
})
```