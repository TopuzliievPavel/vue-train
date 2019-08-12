<template lang="pug">
  .card
    .card__img
      img(:src="cardItems.img" alt="SSA Group")
    h4.card__title {{ cardItems.title }}
    .card__text
      p {{ cardItems.shortDescription }}
    base-button(class-name="link card__link"
                title="Meer informatie"
                @showDescription="showDescription")
</template>

<script>
  import BaseButton from "./BaseButton"

  export default {
    name: "card-info",
    data() {
      return {
        pageArticles: "/articles",
        pageBlog: "/blog/:id"
      }
    },
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
          path: this.pageBlog,
          params: {
            id: this.cardItems.id
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .card {
    text-align: center;
    padding-bottom: 50px;

    @include media(">=tablet") {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      padding: 0 2% 50px;
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
    width: 100%;
    position: relative;
    padding-bottom: 20px;

    &:after {
      width: 40%;
      content: "";
      position: absolute;
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