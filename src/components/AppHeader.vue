<template lang="pug">
  header.header(:class="{ 'active': showMenu }")
    button.menu-open(@click="showNav")
      span.menu-open__line
    transition(name="fade")
      MenuList(class-name="menu-list")
    router-link.logo(to="/")
      img(:src="imagePath", alt="SSA Group")
</template>

<script>
  import MenuList from "./MenuList";

  export default {
    name: "Header",
    components: {
      MenuList
    },
    data: () => (
      {
        showMenu: false,
        showLink: false
      }
    ),
    methods: {
      showNav() {
        this.showMenu = !this.showMenu
      }
    },
    props: ["imagePath"]
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .header {
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
       display: block;
     }
    }
  }

  .logo {
    display: block;
  }

  .menu-list {
    @include media(">=tablet"){
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

  .fade-enter-active,
  .fade-leave-active {
    transition: top .5s ease;
  }

  .fade-enter,
  .fade-leave-to {
    transition: all .5s ease;
  }
</style>