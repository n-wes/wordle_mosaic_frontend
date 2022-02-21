<template>
  <div class="home">
    <div class="mosaic-grid">
      <MosaicRow word='Upload' :colors="['y','g','gr','g','gr','gr']" />
      <MosaicRow word='  an  ' :colors="['g','g','gr','gr','g','g']" />
      <MosaicRow word='Image!' :colors="['g','g','gr','g','g','g']" />
    </div>

    <div class="buttons">
      <div class="upload-btn-wrapper">
        <button class="btn">Upload</button>
        <input type="file" ref="file" v-on:change="handleFileUpload()" accept="image/*"/>
      </div>
      <button ref="generateBtn" id="generate-btn" class="btn">Generate</button>
    </div>

    <div class="preview">
      <img id="image" ref="imgComponent"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const file = ref(null)
const imgComponent = ref(null)
const generateBtn = ref(null)

const handleFileUpload = async() => {
  const src = URL.createObjectURL(file.value.files[0])
  imgComponent.value.src = src
  imgComponent.value.style.display = generateBtn.value.style.display = "block"
}
</script>

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
.buttons {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  margin-bottom: 3rem;
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
#generate-btn {
  display: none;
}
img {
  max-width: 20rem;
  max-height: 20rem;
  display: none;
}
</style>