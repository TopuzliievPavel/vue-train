<template>
  <section class="contact">
    <div class="container contact-wrap">
      <h2 class="title">Contact</h2>
      <p>Thank you for your interest in Awesome Motive Inc.</p>
      <p>If you’re looking for technical support, have a billing question or complaint, then please use the contact form on the specific product.</p>
      <p>If you’re looking for a strategic partnership with one of our properties, then please use the dedicated form on the specific product website.</p>
      <p>If none of the above apply to you, then go ahead and use the contact form below. Someone will be in touch within a week.</p>
      <form class="contact-form" action="/">
        <div class="form-group">
          <label htmlFor="exampleInputEmail">Your name <span class="contact-star">*</span></label>
          <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword">Your email <span class="contact-star">*</span></label>
          <input type="password" class="form-control" id="exampleInputPassword" />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputText">What are you thinking <span class="contact-star">*</span></label>
          <input type="text" class="form-control" id="exampleInputText" />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label" htmlFor="textarea">Detailed message <span class="contact-star">*</span></label>
          <textarea name="textarea" id="textarea" cols="30" rows="4" class="form-control"></textarea>
        </div>
        <Button class="btn btn_theme_primary" title="Submit"/>
      </form>
    </div>
  </section>
</template>

<script>
  import Button from "../components/Button";
  export default {
    name: "Contact",
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