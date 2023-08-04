<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const getItem = computed(() => store.getters.getRightTop)

</script>
<template>
    <div class="block-right-top">
        <div v-if="getItem" class="block-right-top__item">
            {{ getItem.name }}
        </div>
    </div>
</template>

<style scoped>
.block-right-top {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
}
</style>