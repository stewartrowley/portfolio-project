<template>
  <div class="about">
    <section class="about-profile">
      <img class="profile-image" :src="this.aboutData.profile_image">
      <h1>{{ this.aboutData.firstName + ' ' + this.aboutData.lastName }}</h1>
      <p>From: {{ this.aboutData.location }}</p>
      <p>Degree: {{ this.aboutData.degree }}</p>
      <p>Career: {{ this.aboutData.career }}</p>
      <p>Introduction: {{ this.aboutData.introduction }}</p>
    </section>
    <section class="about-interest">
      <div v-for="about in this.aboutData.interest" :key="about">
        <h2 class="genre">{{ about.name }}</h2>
        <p>{{ about.description }}</p>
        <ul v-for="title in about.titles" :key="title">
          {{ title }}
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import AboutServices from '../services/AboutServices';

export default {
  data() {
    return {
      aboutData: ''
    }
  },

  methods: {
    layoutTitles(title) {
      const results = title.forEach(element => {
        return element;
      });

      return results;
    }
  },
  created() {
    AboutServices.getAbout()
      .then((response) => {
        console.log(response.data)
        this.aboutData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

</script>

<style lang="scss">
.profile-image {
  width: 50%;
  height: 60%;
}

.about {
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
}

.about-interest {
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  border-left: 2px solid black;
}

.about-profile {
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

// @media (min-width: 1024px) {
//   .about {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//   }
// }
</style>
