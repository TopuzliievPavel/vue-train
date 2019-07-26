<template lang="pug">
  ul(:class="className")
    li.menu-list__item(
      v-for="(item, id) in menuItems",
      :key="id"
      )
      router-link.menu-list__link(:to="item.link") {{ item.title }}
</template>

<script>
  export default {
    name: "MenuList",
    props: ["className"],
    data: () => ({
      menuItems: [
        {
          id: 1,
          title: "Content",
          link: "/content"
        },
        {
          id: 2,
          title: "Other Link",
          link: "/other"
        },
        {
          id: 3,
          title: "About Us",
          link: "/about"
        },
        {
          id: 4,
          title: "Contact",
          link: "/contact"
        }
      ]
    })
    // computed: {
    //   menuItems() {
    //     return this.$store.state.menuItems()
    //   }
    // }
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
    transition: color .3s;

    &:hover,
    &:focus {
      color: $danger;
    }
  }
</style>