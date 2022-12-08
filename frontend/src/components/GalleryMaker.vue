<template>
  <div class="gallery-image">
    <div
      v-for="(image, key) in imageStore.imageDataVertical"
      :key="key"
      class="gallery-image-vertical"
    >
      <div v-if="this.isDisplay" class="img-box-vertical">
        <routerLink to="/gallery" @click="setIsDisplay(image.image_url, image.sub_title)"
          ><img id="myImg" :src="image.image_url" alt="" />
          <div class="transparent-box-vertical">
            <div class="caption">
              <p class="image-text">{{ image.title }}</p>
              <p class="opacity-low">{{ image.sub_title }}</p>
            </div>
          </div>
        </routerLink>
      </div>
    </div>
  </div>
  <div class="gallery-image">
    <div
      v-for="(image, key) in imageStore.imageDataHorizontal"
      :key="key"
      class="gallery-image-horizontal"
    >
      <div v-if="this.isDisplay" class="img-box-horizontal">
        <routerLink to="/gallery" @click="setIsDisplay(image.image_url, image.sub_title)">
          <img :src="image.image_url" alt="" />
          <div class="transparent-box-horizontal">
            <div class="caption">
              <p class="image-text">{{ image.title }}</p>
              <p class="opacity-low">{{ image.sub_title }}</p>
            </div>
          </div>
        </routerLink>
      </div>
    </div>
  </div>
  <div v-if="!this.isDisplay" id="myModal" class="modal">
        <!-- The Close Button -->
        <span class="close" @click="setIsNotDisplay">&times;</span>

        <!-- Modal Content (The Image) -->
        <img class="modal-content" id="img01" :src="this.currentImage" />

        <!-- Modal Caption (Image Text) -->
        <div id="caption">{{ this.currentSubTitle }}</div>
      </div>
</template>

<script lang="js">
import { useImageStore } from '../stores/ImageStore'

export default {
  data() {
    return {
      isDisplay: true,
      currentImage: '',
      currentSubTitle: '',
    }
  },
  setup() {
    const imageStore = useImageStore();
    return {
      imageStore
    };
  },
  methods: {
    getImageData(image) {
      localStorage.clear()
      const imageData = []
      imageData.push(image)
      console.log(imageData)
      localStorage.setItem('image-details', imageData);
    },

    setIsDisplay(image, subTitle) {
      this.isDisplay = false
      this.currentImage = image
      this.currentSubTitle = subTitle
    },
    setIsNotDisplay() {
      this.isDisplay = true
    }
  },
};
</script>

<style>
.gallery-image {
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.gallery-image-horizontal img {
  height: 250px;
  width: 350px;
  transform: scale(1);
  transition: transform 0.4s ease;
}

.gallery-image-vertical img {
  height: 350px;
  width: 250px;
  transform: scale(1);
  transition: transform 0.4s ease;
}

.img-box-horizontal {
  border-radius: 5px;
  box-sizing: content-box;
  margin: 10px;
  height: 250px;
  width: 350px;
  overflow: hidden;
  display: inline-block;
  color: white;
  position: relative;
  background-color: white;
}

.img-box-vertical {
  border-radius: 5px;
  box-sizing: content-box;
  margin: 10px;
  height: 350px;
  width: 250px;
  overflow: hidden;
  display: inline-block;
  color: white;
  position: relative;
  background-color: white;
}

.caption {
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.transparent-box-horizontal {
  height: 250px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.transparent-box-vertical {
  height: 350px;
  width: 250px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.img-box-vertical:hover img {
  transform: scale(1.1);
}

.img-box-horizontal img {
  transform: scale(1.1);
}

.img-box-vertical:hover .transparent-box-vertical {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box-horizontal:hover .transparent-box-horizontal {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box-vertical:hover .caption {
  transform: translateY(-20px);
  opacity: 1;
}

.img-box-horizontal:hover .caption {
  transform: translateY(-20px);
  opacity: 1;
}

.img-box-vertical:hover,
.img-box-horizontal:hover {
  cursor: pointer;
}

.caption > p:nth-child(2) {
  font-size: 0.8em;
}

.opacity-low {
  opacity: 0.5;
}
.opacity-low,
.image-text {
  color: white;
}

/* Style the Image Used to Trigger the Modal */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: black;
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content,
#caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
