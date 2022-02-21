<template>
  <div class="mosaic-row" >
      <MosaicBlock v-for="(char, index) in word" :key="index" :letter="char" :color="colorMap[colors[index]]"/>
  </div>
</template>

<script setup>
    const colorMap = {
        g: '#3A3A3C',
        y: '#B59F3B',
        gr: '#538D4E'
    }
</script>

<script>
import MosaicBlock from './MosaicBlock'

export default {
  name: 'MosaicRow',
  props: {
      word: String,
      colors: Array
  },
  components: {
      MosaicBlock
  }
}
</script>

<style scoped>
  .mosaic-row {
      display: flex;
      flex-direction: row;
      gap: .4rem;
  }
</style>