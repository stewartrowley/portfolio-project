<template lang="">
  <div class="form-input">
    <form class="contact-form" @submit.prevent="submit">
      <fieldset class="contact-form-fieldset">
        <h1 class="form-title">Get in touch</h1>
        <div class="form-fullname">
          <BaseText type="text" label="Firstname:" v-model="form.firstName" />
          <BaseText type="text" label="Lastname:" v-model="form.lastName" />
        </div>
        <div class="form-contact-info">
          <BaseText type="email" label="Email:" v-model="form.email" />
          <BaseText type="phone" label="Phone Number:" v-model="form.phoneNumber" />
        </div>
        <div class="form-contact-message">
          <BaseTextarea label="Message:" v-model="form.message" />
        </div>
        <div class="submit-content">
        <BaseButton type="submit" label="Contact Me" />
        </div>
      </fieldset>
    </form>
    <div class="contact-info">
      <section class="contact-myinfo">
        <h1>My info:</h1>
        <p>{{ this.data.first_name }} {{ this.data.last_name }}</p>
        <p>{{ this.data.phone_number }}</p>
        <p>{{ this.data.email }}</p>
        <a :href="'https://' + this.data.linkedin_url">{{ this.data.linkedin_url }}</a>
      </section>
      <section class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46051.89887738977!2d-111.82320235654991!3d43.83004510344619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540a4b807a98b1%3A0x4a49d8d1d2181c73!2sRexburg%2C%20ID!5e0!3m2!1sen!2sus!4v1669839481927!5m2!1sen!2sus"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  </div>
</template>
<script>
import BaseText from './custom/BaseText.vue';
import BaseButton from './custom/BaseButton.vue';
import BaseTextarea from './custom/BaseTextarea.vue';
import MessageServices from '../services/MessageServices.js';
import EmploymentServices from '../services/EmploymentServices.js';
export default {
  components: {
    BaseText,
    BaseButton,
    BaseTextarea
  },

  data() {
    return {
      data: '',
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      }
    };
  },
  methods: {
    submit() {
      // console.log(this.form)
      MessageServices.postMessage(this.form)
        .then((response) => {
          console.log(response.data);
          this.$router.push('/thanks?' + response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    EmploymentServices.getEmployment()
      .then((response) => {
        console.log(response.data);
        this.data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>
<style lang="scss">

.form-title {
  text-align: center;
  color: white;
}

.contact-form-fieldset {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 60%;
  border: none;
  background-color: var(--black-coffee);
}

.form-fullname,
.form-contact-info {
  display: flex;
  justify-content: space-around;
}

.form-fullname {
  padding-top: 2rem;
}

.form-contact-info {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.form-contact-message {
  display: flex;
  justify-content: space-around;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
}

.submit-content {
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  justify-content: center;
}

label {
  color: var(--timberwolf);
  font-size: 1em;
}

input {
  color: white;
  background-color: var(--black-coffee);
  border: none;
  border-bottom: 5px solid var(--timberwolf);
  caret-color: white;
  font-size: 1em;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
  &:focus {
    outline: none;
  }
}

textarea {
  color: white;
  background-color: var(--black-coffee);
  border: none;
  border-bottom: 5px solid white;
  padding: 0.9rem 0.9rem;
  caret-color: white;
  font-size: 1em;
  width: auto;
  &:focus {
    outline: none;
  }
}


.contact-info {
  background-color: var(--timberwolf);
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.contact-map, .contact-myinfo {
  padding: 3rem;
}

</style>
