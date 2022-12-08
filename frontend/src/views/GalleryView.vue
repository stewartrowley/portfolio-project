<template lang="">
  <div v-if="!galleryData">
    <BaseLoader />
  </div>
  <div class="gallery-background" v-if="galleryData">
    <h1 class="gallery-title">Gallery</h1>
    <GalleryMaker/>
  </div>
</template>
<script>
import GalleryServices from '../services/GalleryServices';
import GalleryMaker from '../components/GalleryMaker.vue';
import BaseLoader from '../components/custom/BaseLoader.vue';
import { useImageStore } from '../stores/ImageStore'
import { convertToListVertical, convertToListHorizontal } from '../functions/functions.js'
export default {
  data() {
    return {
      galleryData: ''
    };
  },
  created() {
    GalleryServices.getGallery()
      .then((response) => {
        this.galleryData = response.data
        const setupImagesVertical = convertToListVertical(this.galleryData);
        console.log(setupImagesVertical)
        this.imageStore.imageDataVertical = setupImagesVertical;
        const setupImagesHorizontal = convertToListHorizontal(this.galleryData);
        this.imageStore.imageDataHorizontal = setupImagesHorizontal;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    GalleryMaker,
    BaseLoader
  },
  setup() {
    const imageStore = useImageStore();
    return {
      imageStore,
    }
  }
};
</script>
<style lang="scss">
.gallery-background {
  background-color: var(--black-coffee);
}

.gallery-title {
  margin-top: 0;
  padding-top: 1em;
  text-align: center;
  color: var(--timberwolf);
}


</style>