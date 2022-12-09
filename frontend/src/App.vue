<script lang="ts">
import NavigationBar from './components/NavigationBar.vue';
export default {
  components: {
    NavigationBar
  }
};
</script>

<template>
  <NavigationBar class="nav-bars" />
</template>

<style lang="scss">


// /* width */
// ::-webkit-scrollbar {
//   width: 15px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   // box-shadow: inset 0 0 5px grey;
//   background-color: #1f1f1f;
//   // background-color: black;
// }

// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: hsla(219, 96%, 18%, 1);

//   background: linear-gradient(90deg, hsla(219, 96%, 18%, 1) 0%, hsla(290, 79%, 13%, 1) 100%);

//   background: -moz-linear-gradient(90deg, hsla(219, 96%, 18%, 1) 0%, hsla(290, 79%, 13%, 1) 100%);

//   background: -webkit-linear-gradient(
//     90deg,
//     hsla(219, 96%, 18%, 1) 0%,
//     hsla(290, 79%, 13%, 1) 100%
//   );

//   border-radius: 10px;
// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: hsla(169, 22%, 49%, 1);

// background: linear-gradient(90deg, hsla(169, 22%, 49%, 1) 0%, hsla(29, 86%, 52%, 1) 100%);

// background: -moz-linear-gradient(90deg, hsla(169, 22%, 49%, 1) 0%, hsla(29, 86%, 52%, 1) 100%);

// background: -webkit-linear-gradient(90deg, hsla(169, 22%, 49%, 1) 0%, hsla(29, 86%, 52%, 1) 100%);

// }
</style>
