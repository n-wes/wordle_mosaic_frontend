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
      <button ref="generateBtn" id="generate-btn" class="btn" @click="generateMosaic()">Generate</button>
    </div>

    <div class="preview">
      <img id="image" ref="imgComponent"/>
    </div>

    <vue-final-modal v-model="show" name="example" classes="mosaic-container" content-class="mosaic-content">
      <li v-for="(row, index) in mosaicRows" v-bind:key="index" class="mosaic-row">
        {{ row }}
      </li>
    </vue-final-modal>
  </div>
</template>

<script>
import MosaicRow from './MosaicRow'
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  components: {
    MosaicRow,
  },
  setup() {
    const file = ref(null)
    const imgComponent = ref(null)
    const generateBtn = ref(null)
    const show = ref(false)
    const mosaicRows = ref([])

    const handleFileUpload = async() => {
      const src = URL.createObjectURL(file.value.files[0])

      imgComponent.value.src = src
      imgComponent.value.style.display = generateBtn.value.style.display = "block"
    }

    // TODO: CONSOLIDATE THIS SOLUTION INTO
    // CURRENT CODE: https://academind.com/tutorials/vue-image-upload
    const generateMosaic = async() => {
      const f = file.value.files[0]

      let reader = new FileReader()
      reader.readAsDataURL(f)

      reader.onload = () => {
        console.log(reader.result)
        axios.post('', {
          data: reader.result
        })
          .then((res) => {
            mosaicRows.value = res.data.split('\n')
          })
          .catch((e) => {
            console.log(e)
          })
      }
      
      reader.onerror = () => {
        alert('Image upload failed! Please try again, or try another image.')
      }

      show.value = true
    }

    return {
      file,
      imgComponent,
      generateBtn,
      show,
      mosaicRows,
      handleFileUpload,
      generateMosaic
    }
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
.mosaic-row {
  list-style-type: none;
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