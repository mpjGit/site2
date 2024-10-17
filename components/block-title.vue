<script setup>
defineProps({
  desc: String,
  title: String,
})
</script>

<template>
  <h3 v-html="desc" class="desc"></h3>
  <h1 class="title">{{ title }}</h1>
  <div class="line"></div>
</template>

<style lang="scss" scoped>
.desc {
  font-size: 30px;
  color: #005CA4;
}

.title {
  font-size: 48px;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 20px;
}

.line {
  width: 130px;
  height: 2px;
  background-color: #fff;
}
</style>