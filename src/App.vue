<template lang="pug">
  #app
    Header(:image-path="require('./assets/img/logo.png')")
    main
      router-view
    AppFooter
</template>

<script>
import Header from "./components/AppHeader"
import AppFooter from "./components/AppFooter"

export default {
  name: "app",
  components: {
    AppFooter,
    Header
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
