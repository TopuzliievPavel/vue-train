<template lang="pug">
  section.contact
    .container.contact-wrap
      p Thank you for your interest in Awesome Motive Inc.
      p If you’re looking for technical support, have a billing question or complaint, then please use the contact form on the specific product.
      p If you’re looking for a strategic partnership with one of our properties, then please use the dedicated form on the specific product website.
      p If none of the above apply to you, then go ahead and use the contact form below. Someone will be in touch within a week.
      form.contact-form(action="/" name="contact-from")
        .form-group
          label(htmlfor="exampleInputEmail")
            | Your name
            span.contact-star *
          input#exampleInputEmail.form-control(type="email", aria-describedby="emailHelp")
        .form-group
          label(htmlfor="exampleInputPassword")
            | Your email
            span.contact-star *
          input#exampleInputPassword.form-control(type="password")
        .form-group
          label(htmlfor="exampleInputText")
            | What are you thinking
            span.contact-star *
          input#exampleInputText.form-control(type="text")
        .form-group.form-check
          label.form-check-label(htmlfor="textarea")
            | Detailed message
            span.contact-star *
          textarea#textarea.form-control(name="textarea", cols="30", rows="4")
        Button(title="Submit" class-name="btn btn_theme_primary")
</template>

<script>
  import Button from "../components/Button";
  export default {
    name: "PageContact",
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
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

  .btn_theme_primary {
    background-color: $primary;
    border-color: $primary;
    width: 100%;

    @include media(">=tablet") {
      width: auto;
    }
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

  textarea,
  input.form-control {
    padding: 10px;
    border-radius: 4px;
    background-color: $base-color;
    box-shadow: inset 0 2px 2px 0 rgba(126, 133, 174, 0.16);
    border: solid 1px #dfe2f7;
    max-width: 100%;
    font-size: 16px;
    color: $primary;
  }

  .contact-star {
    color: $danger;
  }
</style>