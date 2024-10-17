<script setup>
onMounted(() => {
  commonScrollReveal('.contact')
})
</script>

<template>
  <div class="container">
    <img class="contact" src="@/assets/img/contact.svg" alt="contact">
  </div>
</template>

<style lang="scss" scoped>
.contact{
  margin-top: 200px;
  margin-bottom: 80px;
}
// 移动端
@media screen and (max-width: 865px) {}
</style>