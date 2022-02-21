<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>
    <input
      ref="fileInput"
      type="file"
      @input="pickFile">
  </div>
</template>

<script>
export default {
    name: 'ImagePreview',
    props: {
        previewImage
    }
}
</script>
