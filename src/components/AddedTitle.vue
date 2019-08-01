<template lang="pug">
  h2(:class="className") {{ messages }}
</template>

<script>
  export default {
    props: {
      messages: {
        type: String
      },
      className: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .added-title {
    background-color: $info;
    color: $primary;
    display: inline-block;
    padding: 10px 40px;
    margin-bottom: 0;
    font-family: $font-Knewave;
  }
</style>