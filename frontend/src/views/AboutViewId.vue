<template lang="">
  <section class="interest-box">
    <div class="interest-content">
        <h1>{{this.name}}</h1>
        <p>{{this.summary}}</p>
        <routerLink to="/about"><h2 class="x">Back to About</h2></routerLink>
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

.interest-box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 35rem;
  overflow: hidden;

}

.interest-content {
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
}

.interest-img {
  background-color: red;
  grid-column: 2/3;
}

img {
  height: 100%; 
  width: 100%; 
  object-fit: fill;
}

</style>