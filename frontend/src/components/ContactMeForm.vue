<template lang="">
  <div>
    <form class="contact-form">
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
  </div>
</template>
<script>
import BaseText from "./custom/BaseText.vue";
import BaseButton from "./custom/BaseButton.vue";
import BaseTextarea from "./custom/BaseTextarea.vue";
export default {
  components: {
    BaseText,
    BaseButton,
    BaseTextarea,
  },
};
</script>
<style lang="scss">
    .contact-form-fieldset {
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    .form-fullname, .form-contact-info {
        display: flex;
        flex-direction: row;
    }
    .contact-form {
        display: flex;
        justify-content: center;
        padding-top: 4rem;
    }
</style>
