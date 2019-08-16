<template lang="pug">
  button(type="button" @click="clickBtn") {{ title }}
</template>

<script>
  export default {
    name: "base-button",
    props: {
      title: {
        type: String
      }
    },
    methods: {
      clickBtn() {
        this.$emit("click-btn");
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .btn {
    display: block;
    padding: $btn-padding;
    margin-bottom: 10px;

    font-size: $btn-font-size;
    line-height: 1.3;
    font-weight: 500;
    color: $btn-color;
    text-transform: capitalize;

    border: solid 2px currentColor;
    border-radius: 4px;
    background: none;

    transition: color .3s;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover,
    &.btn_active {
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
    border: 0;

    &:hover {
      border: 0;
    }

    @include media(">=tablet") {
      margin: 0;
    }
  }

  .btn_rounded {
    margin: 0;
    border-radius: 0 5px 5px 0;
  }
</style>