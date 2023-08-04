<script setup>
defineProps({
    card: {
        type: Object
    }
})

</script>

<template>
  <div class="item-card">
    {{ card.name }}
  </div>
</template>

<style lang="scss" scoped>
.item-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 2px solid #000000;
}
</style>