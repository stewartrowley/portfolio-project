<template lang="">
    <div class="gallery-item">
        <routerLink to="/about"><h2 class="x">Back to About</h2></routerLink>

            <p>{{this.aboutData}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      aboutData: localStorage.getItem('about')
    };
  },
};
</script>
<style lang="scss">

</style>