<template lang="pug">
  #app
    app-header(:image-path="require('./assets/img/logo.png')" class-name="app-header")
    main
      router-view
    app-footer
</template>

<script>
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"

export default {
  name: "app",
  data() {
    return {
      messages: [],
    }
  },
  components: {
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
