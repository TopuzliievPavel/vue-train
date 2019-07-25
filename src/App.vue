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
import Header from "./components/AppHeader"
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
  @import "scss/common";
  main {
    padding-top: 70px;
    @include media(">=tablet") {
      padding-top: 78px;
    }
  }
</style>
