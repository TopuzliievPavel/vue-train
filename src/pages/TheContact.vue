<template lang="pug">
  section.contact
    .container.contact-wrap
      p Thank you for your interest in Awesome Motive Inc.
      p If you’re looking for technical support, have a billing question or complaint, then please use the contact form on the specific product.
      p If you’re looking for a strategic partnership with one of our properties, then please use the dedicated form on the specific product website.
      p If none of the above apply to you, then go ahead and use the contact form below. Someone will be in touch within a week.
      form.contact-form(name="contact-form")
        .form-group
          label(for="person-name")
            | Your name
            span.contact-star *
          form-input#person-name.form-control(name="person-name" type="text")
        .form-group
          label(for="person-email")
            | Your email
            span.contact-star *
          form-input#person-email.form-control(name="person-email" type="email")
        .form-group
          label(for="person-thinking")
            | What are you thinking
            span.contact-star *
          form-input#person-thinking.form-control(name="person-thinking" type="text")
        .form-group
          label(for="person-detail")
            | Detailed message
            span.contact-star *
          textarea#person-detail.form-control(name="person-detail" cols="30", rows="4")
        base-button.btn.btn_theme_primary(title="Submit")
</template>

<script>
  import BaseButton from "../components/BaseButton"
  import FormInput from "../components/FormInput";

  export default {
    name: "page-contact",
    components: {
      FormInput,
      BaseButton
    }
  }
</script>

<style lang="scss">
  @import "../scss/base";

  .contact-main {
    background-color: #f9fafd;
  }

  .contact-wrap {
    padding-bottom: 50px;
  }

  .contact-form {
    max-width: 700px;
    padding: 20px;
    margin: 0 auto;

    border-radius: 6px;
    background-color: $base-color;
    box-shadow: 0 8px 12px rgba(14, 36, 129, 0.08);

    text-align: left;

    @include media(">=tablet") {
      padding: 50px;
    }
  }

  .contact__title {
    text-align: center;
    color: $primary;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    text-transform: capitalize;
    font-size: $size-xs;

    @include media(">=tablet") {
      font-size: 18px;
    }
  }

  .form-control {
    padding: 10px;

    border-radius: 4px;
    background-color: $base-color;
    box-shadow: inset 0 2px 2px 0 rgba(126, 133, 174, 0.16);
    border: solid 1px #dfe2f7;

    font-size: 16px;
    color: $primary;
  }

  .contact-star {
    color: $danger;
  }
</style>