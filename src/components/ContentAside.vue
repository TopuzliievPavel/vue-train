<template lang="pug">
  aside(:class="className")
    .aside_widget
      h3.aside__title {{ title }}
      blockquote.aside__text
        .aside__text-wrap
          p {{ description}}
        cite.aside__author {{ cite }}
</template>

<script>
  export default {
    name: "content-aside",
    props: ["className", "title", "description", "cite"]
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  // Aside content
  .aside {
    margin-bottom: 20px;

    @include media(">=desktop") {
      flex: 0 0 40%;
      max-width: 40%;
      padding-left: 2%;
      padding-top: 10px;
      margin-bottom: 0;
    }

    @include media(">=desktop") {
      flex: 0 0 30%;
      max-width: 30%;
    }
  }

  .aside_widget {
    padding: 30px;

    font-size: 15px;
    line-height: 1.3;

    background-color: $primary;
    box-shadow: 0 2px 20px 6px rgba(#000, .3);

  @include media(">=desktop") {
    position: fixed;
    width: 37%;
    right: 15px;

    @supports (position: sticky) {
      position: sticky;
      top: 10px;
      width: 100%;
    }
  }
  @include media(">=widescreen") {
    width: 321px;
    right: calc((100vw - 1170px)/2);
    @supports (position: sticky) {
      width: 100%;
    }
  }
  }

  .aside__title {
    letter-spacing: 1.2px;
  }

  .aside__text {
    color: $base-color;
  }

  .aside__text-wrap {
    position: relative;
    padding-left: 20px;

  &:before {
     content: "";
     position: absolute;
     top: 50%;
     left: 0;
     transform: translateY(-50%);
     width: 4px;
     height: 100%;
     background-color: $base-color;
   }
  }

  .aside__author {
    display: flex;
    justify-content: flex-end;
    color: $info;
    font-size: 12px;
    font-family: "RobotoMedium", sans-serif;
    font-style: normal;
  }
</style>