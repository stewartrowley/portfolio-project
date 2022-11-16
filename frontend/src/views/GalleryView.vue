<template lang="">
    <div>
        <h1>{{ this.aboutData.firstName + ' ' + this.aboutData.lastName }}</h1>
        <img :src="this.aboutData.gallery.images" >
    </div>
</template>
<script>
import AboutServices from '../services/AboutServices';
export default {
  data() {
    return {
      aboutData: ''
    };
  },
  created() {
    AboutServices.getAbout()
      .then((response) => {
        console.log(response.data);
        this.aboutData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>
<style lang="">
    
</style>