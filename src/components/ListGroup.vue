<template lang="pug">
  li.list-group__item
    a.list-group__link(:href="listGroup.link") {{ listGroup.title }}
</template>

<script>
  export default {
    name: "list-group",
    props: {
      listGroup: {
        type:  Object
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .list-group__item {
    position: relative;
    font-size: 16px;
  }

  .list-group__link {
    padding-left: 20px;
    transition: color .3s;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;

      transform: translateY(-50%);
      border-top: 4px solid transparent;
      border-left: 6px solid $primary;
      border-bottom: 4px solid transparent;

      transition: border-left-color .3s;
    }
    &:hover:before,
    &:focus:before {
      border-left-color: $info;
    }
  }

  .list-group__link,
  .box-address__link {
    transition: color .3s;
    color: $primary;

    &:hover,
    &:focus {
      color: $info;
    }
  }
</style>