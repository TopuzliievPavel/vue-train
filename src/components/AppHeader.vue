<template lang="pug">
  header.app-header(:class="{ 'active': showMenu }")
    button.menu-open(@click="showMenu = !showMenu")
      span.menu-open__line
    menu-list(class="menu-list" :menuItems="menuItems")
    router-link.logo(to="/")
      img(:src="imagePath", alt="SSA Group")
</template>

<script>
  import MenuList from "./MenuList";

  export default {
    name: "app-header",
    components: {
      MenuList
    },
    data() {
      return {
        showMenu: false,
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
      }
    },
    props: ["imagePath"]
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .app-header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background-color: $success;
    z-index: 9999;

    @include media(">=tablet"){
      padding: 0 50px;
    }

    &.active {
     .menu-list {
       right: 0;
     }
    }
  }

  .logo {
    display: block;
  }

  .menu-list {
    position: absolute;
    width: 100%;
    top: 100%;
    right: 100%;
    text-align: center;
    background-color:$success;
    transition: right .3s ease;
    @include media(">=tablet"){
      position: static;
      display: flex;
    }
  }

  // header menu button
  .menu-open {
    position: relative;
    height: 30px;
    width: 30px;
    padding: 0;

    background: none;
    border: none;
    border-radius: 4px;

    .menu-open__line,
    &:after,
    &:before {
      content: "";
      position: absolute;
      width: 25px;
      height: 3px;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);

      background-color: $primary;
      border-radius: 4px;
      transition: transform .3s;
    }

    &:before {
      top: 8px;

      .active & {
        top: 14px;
        transform: translateX(-50%) rotate(45deg);
      }
    }

    &:after {
      top: 20px;

      .active & {
        top: 14px;
        transform: translateX(-50%) rotate(-45deg);
      }
    }

    .menu-open__line {
      opacity: 1;
      visibility: visible;

      .active & {
        opacity: 0;
        visibility: hidden;
      }
    }

    @include media(">=tablet"){
      display: none;
    }
  }
</style>