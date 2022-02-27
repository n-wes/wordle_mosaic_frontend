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
      <button ref="generateBtn" id="generate-btn" class="btn" @click="show = true">Generate</button>
    </div>

    <div class="preview">
      <img id="image" ref="imgComponent"/>
    </div>

    <vue-final-modal v-model="show" name="example" classes="mosaic-container" content-class="mosaic-content">
        {{ mosaic }}
    </vue-final-modal>
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
  },
  data() {
    return {
      show: true,
      mosaic: 'My pee pee bihg'
    }
  },
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
.upload-btn-wrapper input,
.btn {
  cursor: pointer;
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
>>> .mosaic-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
>>> .mosaic-content {
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: var(--dark-gray);
}
.mosaic__title {
  font-size: 1.5rem;
  font-weight: 700;
}

</style>