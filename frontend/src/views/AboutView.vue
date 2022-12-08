<template>
  <div v-if="!aboutData">
    <BaseLoader />
  </div>
  <div v-if="aboutData" class="about">
    <section class="about-profile">
      <img class="profile-image" :src="this.aboutData.profile_image">
    </section>
    <section class="about-interest">
      <h1>{{ this.aboutData.firstName + ' ' + this.aboutData.lastName }}</h1>
      <p>From: {{ this.aboutData.location }}</p>
      <p>Degree: {{ this.aboutData.degree }}</p>
      <p>Career: {{ this.aboutData.career }}</p>
      <p>Introduction: {{ this.aboutData.introduction }}</p>
    </section>
  </div>
  <div class="interest-area" v-for="about in this.aboutData.interest" :key="about">
    <section class="interest-section">
      <div class="about-title">
        <h2 class="genre">{{ about.name }}</h2>
        <img class="about-icon" :src="about.icon">
      </div>
      <p>{{ about.description }}</p>
      <ul v-for="title in about.titles" :key="title">
        <li>
          <routerLink to="/about/id" @click="displayInterest(title.name, title.image, title.summary)">{{ title.name }}
          </routerLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import AboutServices from '../services/AboutServices';
import BaseLoader from '../components/custom/BaseLoader.vue';

export default {
  data() {
    return {
      aboutData: ''
    }
  },

  methods: {
    displayInterest(name, image, summary) {
      localStorage.setItem('name', name)
      localStorage.setItem('image', image)
      localStorage.setItem('summary', summary)
    },
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
  },
  components: {
    BaseLoader
  }
}

</script>

<style lang="scss">
.interest-area {
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid black;
}

.interest-section {
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
}

.profile-image {
  width: 50%;
  height: 60%;
}

.about {
  // background-color: var(--);
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

.about-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about-icon {
  padding-left: 0.5em;
  width: 48px;
  height: 48px;
}

// @media (min-width: 1024px) {
//   .about {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//   }
// }
</style>
