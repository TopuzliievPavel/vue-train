<template>
  <ul class="menu-list">
    <li class="menu-list__item" v-for="(item, id) in menuItems" :key="id">
      <router-link class="menu-list__link" :to="item.link">{{item.title}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "MenuList",
    computed: {
      menuItems() {
        return this.$store.state.menuItems()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";
  .menu-list {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
    }
  }

  .menu-list__item {
    padding: 25px 10px;
    font-size: 18px;
    text-transform: capitalize;

    @include media(">desktop") {
      padding: 15px 10px;
      font-size: 24px;
    }
  }

  .menu-list__link {
    display: block;
    transition: color .3s;

    &:hover,
    &:focus {
      color: #FF0000;
    }
  }
</style>