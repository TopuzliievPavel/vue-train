<template lang="pug">
  section.visual
    .visual__inner
        h1.visual__title Lorem ipsum dolor sit amet
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad, aliquam ametassumenda atque autem cumque debitis, earum est ipsa labore non praesentium quidem repudiandae tempore voluptates? Molestias, tempore, voluptatem.
        Button.btn.btn_active.visual__btn(title="Download")
        Button.link.visual__btn(title="Meer informatie")
</template>

<script>
  import Button from "./Button"
  export default {
    name: "Visual",
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .visual {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 80px 0;
    background-image: url("../assets/img/slide.jpg");
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    box-shadow: 0 10px 20px rgba(0,0,0,.5);

    text-align: center;
    font-size: 16px;
    line-height: 1.3;
    color: $base-color;

    // fix for ie vertical align
    &:after {
      content: "";
      height: calc(100vh - 160px);
    }
    //-----------------------------

    @include media(">=tablet") {
      font-size: $size-m;
    }

    @include media(">=desktop") {
      font-size: $size-l;
    }

    @include media(">=widescreen") {
      font-size: $size-xl;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $dark-color;
      opacity: .4;
    }
  }

  .visual__inner {
    padding: 0 15px;
    z-index: 1;

    @include media(">=tablet") {
      max-width: 700px;
    }
  }

  .visual__title {
    font-size: 24px;

    @include media(">=desktop") {
      font-size: 44px;
    }

    @include media(">=widescreen") {
      font-size: 64px;
    }
  }

  .visual__btn {
    width: 100%;
    @include media(">=tablet") {
      width: auto;
    }
  }
</style>