<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import ItemCard from './itemCard.vue';
import { RIGHT } from '@/utils/temp.js'

const store = useStore()

const items = ref(RIGHT)

const clickRight = (item) => {
  store.commit('setRightTop', item)
}
</script>

<template>
  <div class="block-right">
    <div class="block-right__cards">
      <div v-for="item in items" :key="item.id">
        <ItemCard :card="item" @click="clickRight(item)" class="block-right__card"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-right {
  padding: 10px;
  border: 1px solid #000000;

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    grid-gap: 12px;
  }

  &__card {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
