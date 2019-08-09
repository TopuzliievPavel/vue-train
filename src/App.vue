<template lang="pug">
  #app
    app-header(:image-path="require('./assets/img/logo.png')")
    main.main
      router-view
    app-footer
</template>

<script>
  import AppHeader from "./components/AppHeader"
  import AppFooter from "./components/AppFooter"

  export default {
    name: "app",
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="scss">
  @import "scss/common";

  html, body, #app {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
  }

  .main {
    flex: 1 0 auto;
    padding-top: 70px;
    @include media(">=tablet") {
      padding-top: 78px;
    }
  }
</style>
