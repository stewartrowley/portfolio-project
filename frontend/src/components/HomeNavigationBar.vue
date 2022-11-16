<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faAddressCard,
  faBriefcase,
  faAddressBook,
  faImage,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import '../assets/main.css'

library.add(faHome, faAddressCard, faBriefcase, faAddressBook, faImage, faUser);

</script>

<template>
  <div class="navigate-box">
    <div class="header-nav-container">
      <nav class="nav-bar-container">
        <div class="nav-link-div">
          <!-- <img
            src="./assets/images/icons-color/icons8-home-windows-11-color/icons8-home-24.png"
          /> -->
          <font-awesome-icon icon="fa-home" />
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </div>
        <div class="nav-link-div">
          <font-awesome-icon icon="fa-address-card" />
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </div>
        <div class="nav-link-div">
          <font-awesome-icon icon="fa-briefcase" />
          <RouterLink class="nav-link" to="/work-experience">Work-Experience</RouterLink>
        </div>
        <div class="nav-link-div">
          <font-awesome-icon icon="fa-address-book" />
          <RouterLink class="nav-link" to="/contact-me">Contact-Me</RouterLink>
        </div>
        <div class="nav-link-div">
          <font-awesome-icon icon="fa-image" />
          <RouterLink class="nav-link" to="/gallery">Gallery</RouterLink>
        </div>
      </nav>
    </div>
    <font-awesome-icon class="user-image" icon="fa-user" />
</div>
  <RouterView />
</template>

<style scoped lang="scss">
// header {
//   background-color: var(--space-cadet);
//   width: auto;
//   height: 5rem;
// }

.nav-bar-container {
  display: flex;
  flex-direction: row;
  padding: 1em 1em;
}

.nav-link-div {
  padding: 0.5em 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--timberwolf);
}

.nav-link-div:hover {
    background-color: var(--polished-pine);
    color: var(--space-cadet);
    border-radius: 5px;
}

.nav-link {
  color: var(--timberwolf);
  text-decoration: none;

  &:active {
    color: var(--timberwolf);
  }
  &:hover {
    color: var(--space-cadet);
  }

  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
  padding: 0 0.25rem;
}


// .header-nav-container {
//   display: flex;
//   flex-direction: row;
// }

.user-image {
  color: var(--timberwolf);
}

.navigate-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
