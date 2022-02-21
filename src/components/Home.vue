<template>
  <div class="home">
    <div class="mosaic-grid">
      <MosaicRow word='Upload' :colors="['y','g','gr','g','gr','gr']" />
      <MosaicRow word='  an  ' :colors="['g','g','gr','gr','g','g']" />
      <MosaicRow word='Image!' :colors="['g','g','gr','g','g','g']" />
    </div>

    <div class="upload-btn-wrapper">
      <button class="btn">Upload</button>
      <input type="file"/>
    </div>
  </div>
</template>

<script>
import MosaicRow from './MosaicRow'

export default {
  name: 'HomePage',
  components: {
    MosaicRow,
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mosaic-grid {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  gap: .4rem;
}
.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}
.upload-btn-wrapper:hover {
  cursor: pointer;
}
.btn {
  color: white;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  background: none;
  font-size: 1.5rem;
  padding: 1rem 2rem 1rem 2rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>