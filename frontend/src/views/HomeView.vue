<template lang="">
  <div class="firework-background">
    <SnowBackground />
    <div class="content">
      <div class="me-box">
        <h1>{{ this.personData.firstName + ' ' + this.personData.lastName }}</h1>
        <img class="nav-img" src="../assets/images/logo/bio-logos/Bio-logos_transparent.png" />
      </div>
      <h2>{{ this.personData.degree }} | {{ this.personData.career }}</h2>
      <HomeNavigationBar />
    </div>
  </div>
</template>
<script>
import PersonServices from '../services/PersonServices';
import SnowBackground from '../components/SnowBackground.vue';
import HomeNavigationBar from '../components/HomeNavigationBar.vue';
export default {
  data() {
    return {
      personData: ''
    };
  },
  components: {
    SnowBackground,
    HomeNavigationBar
  },
  created() {
    PersonServices.getPerson()
      .then((response) => {
        console.log(response)
        this.personData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
// .firework-background {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }
.home-nav {
  position: absolute;
  z-index: 1;
}

.content {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Condensed', sans-serif;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-style: italic;
  position: absolute;
  z-index: 1;
}
.nav-img {
  width: 8%;
  height: 8%;
}

.me-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: x-large;
}
</style>
