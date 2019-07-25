<template>
  <header class="header">
    <button class="menu-open">
      <span></span>
    </button>
    <MenuList />
    <router-link class="logo" to="/">
      <img src="../assets/img/logo.png" alt="SSA Group">
    </router-link>
  </header>
</template>

<script>
  import MenuList from "./MenuList";

  export default {
    name: "Header",
    components: {
      MenuList
    }
  }
</script>

<style lang="scss" scoped>

  .header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background-color: #50e3c2;
    z-index: 9999;

    @media screen and (min-width: 768px) {
      padding: 0 50px;
    }
  }

  .logo {
    display: block;
  }

  // header menu button
  .menu-open {
    display: block;
    position: relative;
    height: 30px;
    width: 30px;

    background-color: #434c6d;
    border: none;
    border-radius: 4px;

    span,
    &:after,
    &:before {
      content: "";
      position: absolute;
      width: 20px;
      height: 2px;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);

      background-color: #fff;
      border-radius: 3px;
      transition: transform .3s;
    }

    &:before {
      top: 8px;

      .menu-active & {
        top: 14px;
        transform: translateX(-50%) rotate(45deg);
      }
    }

    &:after {
      top: 20px;

      .menu-active & {
        top: 14px;
        transform: translateX(-50%) rotate(-45deg);
      }
    }

    span {
      .menu-active & {
        opacity: 0;
        visibility: hidden;
      }
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
</style>