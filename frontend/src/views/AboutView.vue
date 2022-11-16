<template>
  <div class="about">
    <h1>{{ this.aboutData.firstName + ' ' + this.aboutData.lastName}}</h1>
    <p>From: {{this.aboutData.location}}</p>
    <p>Degree: {{this.aboutData.degree}}</p>
    <p>Career: {{this.aboutData.career}}</p>
    <p>Introduction: {{this.aboutData.introduction}}</p>
    <div v-for="about in this.aboutData.interest" :key="about">
      <h2>{{about.name}}</h2>
      <p>{{about.description}}</p>
      <ul v-for="title in about.titles" :key="title">
        {{ title }}
      </ul>
    </div>

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

.about {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
