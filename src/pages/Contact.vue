<template lang="pug">
  section.contact
    .container.contact-wrap
      p Thank you for your interest in Awesome Motive Inc.
      p If you’re looking for technical support, have a billing question or complaint, then please use the contact form on the specific product.
      p If you’re looking for a strategic partnership with one of our properties, then please use the dedicated form on the specific product website.
      p If none of the above apply to you, then go ahead and use the contact form below. Someone will be in touch within a week.
      form.contact-form(name="contact-from")
        .form-group
          label(for="name")
            | Your name
            span.contact-star *
          input#name.form-control(type="text")
        .form-group
          label(for="email")
            | Your email
            span.contact-star *
          input#email.form-control(type="email")
        .form-group
          label(for="text")
            | What are you thinking
            span.contact-star *
          input#text.form-control(type="text")
        .form-group.form-check
          label.form-check-label(for="textarea")
            | Detailed message
            span.contact-star *
          textarea#textarea.form-control(name="textarea", cols="30", rows="4")
        page-button(title="Submit" class-name="btn btn_theme_primary")
</template>

<script>
  import PageButton from "../components/PageButton"

  export default {
    name: "page-contact",
    components: {
      PageButton
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
    padding: 20px;
    box-shadow: 0 8px 12px rgba(14, 36, 129, 0.08);
    max-width: 700px;
    margin: 0 auto;
    border-radius: 6px;
    background-color: $base-color;
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

  textarea.form-control,
  input.form-control {
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