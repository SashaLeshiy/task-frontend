<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ItemCard from './itemCard.vue';

const store = useStore()

const getItems = computed(() => store.getters.getLeftTop)

</script>
<template>
    <div class="block-left-top">
        <div class="block-left-top__cards">
            <div v-for="item in getItems" :key="item.id" class="block-left-top__card">
                <ItemCard :card="item" />
            </div>
        </div>
        <div class="block-left-top__text">
            selected: {{ getItems?.length || 0 }} / 6
        </div>
    </div>
</template>

<style lang="scss" scoped>
.block-left-top {
    position: relative;
    border: 1px solid #000000;

    &__cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-around;
        grid-gap: 12px;
        padding: 10px;
    }

    &__text {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}
</style>
