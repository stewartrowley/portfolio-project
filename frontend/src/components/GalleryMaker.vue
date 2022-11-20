<template>
    <div :id="galleryID">
      <a
        v-for="(image, key) in imageStore.imageData"
        :key="key"
        :href="image.largeURL"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        target="_blank"
        rel="noreferrer"
      >
        <img :src="image.thumbnailURL" alt="" />
      </a>
    </div>
  </template>
  
  <script lang="js">
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';
  import { useImageStore } from '../stores/ImageStore'
  
  export default {
    name: 'SimpleGallery',
    props: {
      galleryID: String,
      images: Array,
    },
    setup() {
        const imageStore = useImageStore();
      return {
        imageStore
      };
    },
    mounted() {
      if (!this.lightbox) {
        this.lightbox = new PhotoSwipeLightbox({
          gallery: '#' + this.$props.galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
        });
        this.lightbox.init();
      }
    },
    unmounted() {
      if (this.lightbox) {
        this.lightbox.destroy();
        this.lightbox = null;
      }
    },
    methods: {},
  };
  </script>

  <style></style>
  