<template>
    <div class="about">
        <h1>Thank you for your message!</h1>
    </div>
  </template>
  
  <script>
  export default {

  }
  
  </script>
  
  <style lang="scss">
  
  .interest-area {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    justify-content: center;
    color: var(--space-cadet);
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
  