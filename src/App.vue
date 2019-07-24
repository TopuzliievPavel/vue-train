<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import Header from "./components/header/AppHeader"
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  components: {
    AppFooter,
    Header
  }
}
</script>

<style lang="scss">
  @import "./assets/style/variables";

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 20px;
    line-height: 2;
  }

  body {
    font-family: "Roboto", Helvetica, sans-serif;
    min-width: 320px;
    color: $primary;
  }

  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .title {
    text-transform: uppercase;
    color: $success;
    font-size: 64px;
    line-height: 1.3;
    font-family: 'Knewave', cursive;
    text-align: center;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }

  ul,ol {
    list-style: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background-color: #50e3c2;

    @media screen and (min-width: 768px) {
      padding: 0 50px;
    }
  }

  .menu-list {
    display: flex;
  }

  .menu-list__item {
    padding: 10px 15px;
    color: #434c6d;
    font-size: 24px;
  }

  .menu-list__link {
    display: block;
    color: inherit;
  }


</style>
