<template lang="pug">
  .card
    .card__img
      img(:src="cardItems.img" alt="SSA Group")
    h4.card__title {{ cardItems.title }}
    .card__text
      p {{ cardItems.description.substr(0, 105) }}
    base-button.btn.btn_card(title="Meer informatie"
                            @click-btn="showDescription")
</template>

<script>
  import BaseButton from "./BaseButton"

  export default {
    name: "card-info",
    components: {
      BaseButton
    },
    props: {
      cardItems: {
        type: Object
      }
    },
    methods: {
      showDescription() {
        this.$router.push({
          name: "page-blog",
          params: {
            title: this.cardItems.title,
            img: this.cardItems.img,
            description: this.cardItems.description
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .card {
    padding-bottom: 50px;
    text-align: center;

    @include media(">=tablet") {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 0 2% 50px;

      align-items: center;
    }

    @include media(">=widescreen") {
      width: 25%;
      padding: 0 2%;
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
      width: 40%;
      height: 2px;

      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);

      background-color: $success;
    }
  }

  .card__text {
    flex: 1 0 auto;

    font-size: 16px;
    color: $base-color;
  }

  .btn_card {
    margin: 0 auto;
    font-size: $size-xs;
  }

  .card__img,
  .card__text,
  .card__title {
    width: 100%;
  }
</style>