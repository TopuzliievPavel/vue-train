<template>
  <footer class="app-footer">
   <div class="container">
     <p>Some long long text about copyright</p>
   </div>
  </footer>
</template>

<script>
  export default {
    name: "AppFooter"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/variables";
  .app-footer {
    background-color: $success-dark;
    padding: 20px 0;
    position: fixed;
    width: 100%;
    bottom: 0;

    p {
      margin-bottom: 0;
    }
  }
</style>