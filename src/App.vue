<template lang="pug">
  #app
    app-header(:image-path="require('./assets/img/logo.png')")
    main
      router-view
    app-footer
</template>

<script>
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import PageAbout from "./pages/PageAbout";

export default {
  name: "app",
  data() {
    return {
      messages: [],
    }
  },
  components: {
    PageAbout,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import "scss/common";
  main {
    padding-top: 70px;
    @include media(">=tablet") {
      padding-top: 78px;
    }
  }
</style>
