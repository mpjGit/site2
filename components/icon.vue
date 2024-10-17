<script setup>
defineProps({
  size: String,
})
</script>

<template>
  <i class="icon" :style="`font-size: ${ size || 14 }px;`">
    <slot />
  </i>
</template>

<style lang="scss">
i.icon{
  height: 1em;
  width: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  fill: currentColor;
  position: relative;
  img, svg{
    height: 1em;
    width: 1em;
  }
}
</style>