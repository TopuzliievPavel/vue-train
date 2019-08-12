<template lang="pug">
  button(:class="className" @click="moveInformation") {{ title }}
</template>

<script>
  export default {
    name: "base-button",
    data() {
      return {
        description: ""
      }
    },
    props: {
      title: {
        type: String
      },
      className: {
        type: String
      }
    },
    methods: {
      moveInformation() {
        this.$emit("moveInformation");
        this.$emit("showDescription");
        this.$emit("sortArticles");
        this.$emit("backToHome")
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .btn,
  .link {
    cursor: pointer;
    display: block;
    padding: $btn-padding;
    margin-bottom: 10px;
    font-size: $btn-font-size;
    line-height: 1.3;
    font-family: "RobotoMedium", sans-serif;
    color: $btn-color;
    text-transform: capitalize;
    border: solid 2px currentColor;
    border-radius: 4px;
    background-color: transparent;

    transition: background-color .3s,
    color .3s;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover,
    &.btn_active,
    &.link_active {
      color: $primary;
      border: solid 2px transparent;

      // linear gradient
      background: linear-gradient(rgba(252, 255, 71, 1.0), rgba(248, 232, 28, 1.0))
    }

    @include media(">=tablet") {
      display: inline-block;
      vertical-align: top;
      margin: 0 5px;
    }
  }

  .btn_theme_primary {
    background-color: $primary;
    border-color: $primary;
    width: 100%;

    @include media(">=tablet") {
      width: auto;
      margin: 0;
    }
  }

  .section-contact_btn {
    margin: 0;
    border-radius: 0 5px 5px 0;
  }
</style>