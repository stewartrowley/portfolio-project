<template lang="">
    <GalleryMaker/>
</template>
<script>
import GalleryServices from '../services/GalleryServices';
import GalleryMaker from '../components/GalleryMaker.vue';
import { useImageStore } from '../stores/ImageStore'
import { convertToList } from '../functions/functions.js'
export default {
  data() {
    return {
      galleryData: ''
    };
  },
  created() {
    GalleryServices.getGallery()
      .then((response) => {
        console.log(response.data);
        this.galleryData = response.data;
        const setupImages = convertToList(this.galleryData);
        this.imageStore.imageData = setupImages;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    GalleryMaker
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

</style>