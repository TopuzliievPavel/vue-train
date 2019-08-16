<template lang="pug">
  h2 {{ sendMessage }}
</template>

<script>
  export default {
    name: "added-title",
    props: {
      sendMessage: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .added-title {
    display: inline-block;
    vertical-align: top;
    padding: 10px 40px;
    margin-bottom: 0;

    background-color: $info;
    color: $primary;

    font-family: $font-Knewave;
  }
</style>