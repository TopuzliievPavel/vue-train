<template lang="pug">
  dl.address-list
    dt.address-list__term {{ addressItems.title }}
      dd.address-list__description {{ addressItems.description }}
        a.address-list__link(:href="addressItems.path" target="_blank") {{ addressItems.path }}
</template>

<script>

  export default {
    name: "address-group",
    props: {
      addressItems: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .address-list,
  .address-list__description,
  .address-list__term {
    margin: 0;
  }

  .address-list__term {
    text-transform: capitalize;
    font-family: "RobotoBold", sans-serif;
    line-height: 1.6;
  }

  .address-list__link {
    transition: color .3s;
    color: $primary;
    font-family: "RobotoRegular", sans-serif;

    &:hover,
    &:focus {
      color: $info;
    }
  }

  .address-list__term,
  .address-list__description,
  address {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
</style>