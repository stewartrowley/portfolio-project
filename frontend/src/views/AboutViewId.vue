<template lang="">
  <section class="interest-box">
    <div class="interest-content">
        <h1>{{this.name}}</h1>
        <p class="about-interest-summary">{{this.summary}}</p>
        <routerLink class="back-to-about" to="/about"><h2>Back to About</h2></routerLink>
      </div>
      <div class="interest-img">
        <img :src="this.image">
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      name: localStorage.getItem('name'),
      image: localStorage.getItem('image'),
      summary: localStorage.getItem('summary')
    };
  },
};
</script>
<style lang="scss">

.about-interest-summary {
  text-indent: 2em;
}

.back-to-about {
  color: var(--space-cadet);
  text-decoration: underline;
}

.interest-box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 35rem;
  overflow: hidden;

}

.interest-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
  padding: 0 5rem;
}

.interest-img {
  grid-column: 2/3;
}

img {
  height: 100%; 
  width: 100%; 
  object-fit: fill;
}

</style>