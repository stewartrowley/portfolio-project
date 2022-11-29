<template lang="">
  <div class="form-input">
    <form class="contact-form" >
      <h1>Contact Me</h1>
      <fieldset class="contact-form-fieldset">
        <div class="form-fullname">
          <BaseText type="text" label="Firstname:" />
          <BaseText type="text" label="Lastname:" />
        </div>
        <div class="form-contact-info">
          <BaseText type="email" label="Email:" />
          <BaseText type="phone" label="Phone Number:" />
        </div>
        <BaseTextarea label="Message:" />
        <BaseButton type="submit" label="Contact Me" />
      </fieldset>
    </form>
    <div>
      <h1>My info:</h1>
      <p>{{this.data.first_name}} {{this.data.last_name}}</p>
      <p>{{this.data.phone_number}}</p>
      <p>{{this.data.email}}</p>
      <Link :to="this.data.linkedin_url">{{this.data.linkedin_url}}</Link>
    </div>
  </div>
</template>
<script>
import BaseText from "./custom/BaseText.vue";
import BaseButton from "./custom/BaseButton.vue";
import BaseTextarea from "./custom/BaseTextarea.vue";
import EmploymentServices from "./../services/EmploymentServices.js"
export default {
  components: {
    BaseText,
    BaseButton,
    BaseTextarea,
  },

  data() {
        return {
            data: ''
        }
    },
    created() {
        EmploymentServices.getEmployment()
            .then((response) => {
                console.log(response.data)
                this.data = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
};
</script>
<style lang="scss">
.contact-form-fieldset {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 60%;
  border: none;
  background-color: var(--polished-pine);
}

.form-fullname,
.form-contact-info {
  display: flex;
  flex-direction: row;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 4rem;
}

input {
  background-color: var(--timberwolf);
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}


</style>
