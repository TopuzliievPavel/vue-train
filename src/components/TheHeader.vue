<template lang="pug">
  header.app-header(:class="{ 'active': showMenu }")
    button.menu-open(@click="showMenu = !showMenu")
      span.menu-open__line
    ul.menu-list
      li.menu-list__item(v-for="(link, id) in menuLinks"
                        :key="id"
                        @click="showMenu = false")
        router-link.menu-list__link(:to="link.url") {{ link.title }}
    router-link.logo(to="/")
      img(:src="imagePath", alt="SSA Group")
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false,
        menuLinks: [
          {
            title: "Content",
            url: "/content"
          },
          {
            title: "Articles",
            url: "/articles"
          },
          {
            title: "About Us",
            url: "/about"
          },
          {
            title: "Contact",
            url: "/contact"
          },
        ]
      }
    },
    props: ["imagePath"]
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .app-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;

    background-color: $success;

    @include media(">=tablet"){
      padding: 0 50px;
    }

    &.active {
     .menu-list {
       right: 0;
     }
    }
  }

  .menu-list {
    width: 100%;

    position: absolute;
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

  // Header menu button
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
      width: 25px;
      height: 3px;

      position: absolute;
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