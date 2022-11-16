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

import '../assets/main.css';
library.add(faHome, faAddressCard, faBriefcase, faAddressBook, faImage, faUser);

</script>

<template>
  <header>
    <div class="header-nav-container">
      <img class="nav-img" src="../assets/images/logo/bio-logos/Bio-logos_transparent.png" />
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
  </header> 
  <RouterView />
</template>

<style scoped lang="scss">
header {
  background-color: var(--space-cadet);
  width: auto;
  height: 5rem;
}

.nav-bar-container {
  display: flex;
  flex-direction: row;
  padding: 1em 1em;
}

.nav-link-div {
  padding: 1em 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: var(--timberwolf);
}

.nav-link {
  color: var(--timberwolf);
  text-decoration: none;

  &:active {
    color: var(--timberwolf);
  }

  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
  padding: 0 0.25rem;
}

.nav-img {
  width: 8%;
}

.header-nav-container {
  display: flex;
  flex-direction: row;
}

.user-image {
  color: var(--timberwolf);
  padding-right: 3rem;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
