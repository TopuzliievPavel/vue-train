<template lang="pug">
  aside
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
    props: ["title", "description", "cite"]
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  // Aside content
  .content__aside {
    margin-bottom: 20px;

    @include media(">=desktop") {
      flex: 0 0 35%;
      max-width: 35%;
      padding-left: 2%;
      padding-top: 10px;
      margin-bottom: 0;
    }

    @include media(">=widescreen") {
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
    width: 33%;

    position: fixed;
    right: 15px;

    @supports (position: sticky) {
      width: 100%;

      position: sticky;
      top: 10px;
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
    width: 4px;
    height: 100%;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

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