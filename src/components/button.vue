<template>
  <button>{{title}}</button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      title: null
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../src/assets/style/variables";
  @import "../../src/assets/style/include-media";

  .btn,
  .link {
    cursor: pointer;
    display: block;
    padding: $btn-padding;
    margin-bottom: 10px;
    font-size: $btn-font-size;
    line-height: 1.3;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
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
</style>