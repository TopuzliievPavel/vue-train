<template lang="pug">
  ul(:class="className")
    li.menu-list__item(v-for="(item, id) in menuItems",
                      :key="id")
      router-link.menu-list__link(:to="item.link") {{ item.title }}
</template>

<script>
  export default {
    name: "menu-list",
    props: ["className", "menuItems"],
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .menu-list__item {
    padding: 15px 10px;
    font-size: 24px;
    text-transform: capitalize;
  }

  .menu-list__link {
    display: block;
    color: $primary;
    transition: color .3s;

    &:hover,
    &:focus {
      color: $danger;
    }
  }
</style>