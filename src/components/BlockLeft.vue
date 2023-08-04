<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import ItemCard from './itemCard.vue';
import { LEFT } from '@/utils/temp.js'

const store = useStore()

const items = ref(LEFT)

const topItems = ref([])

const clickLeft = (item) => {
  if(topItems.value.length >= 6) {
    return null
  } else {
    topItems.value.push(item)
    store.commit('setLeftTop', topItems)
  }
  
}


</script>

<template>
  <div class="block-left">
    <div class="block-left__cards">
      <div v-for="item in items" :key="item.id">
        <ItemCard :card="item" @click="clickLeft(item)" class="block-left__card"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-left {
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
