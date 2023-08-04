<script setup>
import BlockLeft from './components/BlockLeft.vue'
import BlockRight from './components/BlockRight.vue'
import BlockRightTop from './components/BlockRightTop.vue'
import BlockLeftTop from './components/BlockLeftTop.vue'
</script>

<template>

  <main class="main">
    <BlockLeftTop />
    <BlockRightTop />
    <BlockLeft/>
    <BlockRight/>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px 1fr;
}
</style>
