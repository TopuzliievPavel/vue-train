<template lang="pug">
  .card
    .card__img
      img(:src="cardItems.img" alt="SSA Group")
    h4.card__title {{ cardItems.title }}
    .card__text
      p {{ cardItems.content }}
    page-button(class-name="link card__link" title="Meer informatie")
</template>

<script>
  import PageButton from "../components/Button"

  export default {
    name: "card-info",
    components: {
      PageButton
    },
    props: {
      cardItems: {
        type: Object
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .card {
    text-align: center;
    margin-bottom: 50px;
    @include media(">=tablet") {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      padding: 0 2%;
    }

    @include media(">=widescreen") {
      width: 25%;
      padding: 0 2%;
      margin-bottom: 0;
    }
  }

  .card__img {
    margin-bottom: 20px;

    @include media(">=tablet") {
      margin-bottom: 40px;
      min-height: 140px;
    }
  }

  .card__title {
    position: relative;
    padding-bottom: 20px;

    &:after {
      content: "";
      position: absolute;
      width: 70%;
      height: 2px;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background-color: $success;
    }
  }

  .card__text {
    font-size: 16px;
    color: $base-color;
    flex: 1 0 auto;
  }

  .card__link {
    font-size: $size-xs;
    margin: 0 auto;
  }
</style>