<template>
  <div class="mosaic-block" :style="{'background-color': color}">
    {{letter || ' '}}
  </div>
</template>

<script>
export default {
  name: 'MosaicBlock',
  props: {
    color: String,
    letter: String
  }
}
</script>

<style scoped>
  .mosaic-block {
    width:3.9rem;
    height: 3.9rem;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
  }
</style>