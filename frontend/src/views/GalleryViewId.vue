<template lang="">
    <div class="gallery-item">
        <routerLink class="x-link" to="/gallery"><h2 class="x">Back to Gallery</h2></routerLink>
        <img class="specified-image" :src="this.galleryData">
    </div>
</template>
<script>
import { useImageStore } from '../stores/ImageStore'
export default {
  data() {
    return {
      galleryData: localStorage.getItem('image-details')
    };
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
  .gallery-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
  }
//   header {
//     display: none;
//   }

    .x-link {
        text-decoration: none;
    }
  .x {
    color: var(--space-cadet);
    background-color: var(--polished-pine);
    margin: 1em 1em;
    padding: 10px;
    border-radius: 5px;
  }
  .specified-image { 
   position: relative; 

}


// h2 span { 
//    color: white; 
//    font: bold 24px/45px Helvetica, Sans-Serif; 
//    letter-spacing: -1px;  
//    background: rgb(0, 0, 0); /* fallback color */
//    background: rgba(0, 0, 0, 0.7);
//    padding: 10px; 
// }

</style>