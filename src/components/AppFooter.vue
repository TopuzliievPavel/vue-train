<template>
  <footer class="app-footer">
   <div class="container">
     <p>Some long long text about copyright</p>
     <ul class="social-list">
       <li class="social-list__item">
         <a href="https://twitter.com/?lang=ru" target="_blank"><i class="icon icon-twitter-logo"></i></a>
       </li>
       <li class="social-list__item">
         <a href="https://uk-ua.facebook.com/" target="_blank"><i class="icon icon-facebook-logo"></i></a>
       </li>
       <li class="social-list__item">
         <a href="https://www.youtube.com/" target="_blank"><i class="icon icon-button-play"></i></a>
       </li>
     </ul>
   </div>
  </footer>
</template>

<script>
  export default {
    name: "AppFooter"
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";
  .app-footer {
    background-color: $success-dark;
    padding: 20px 0;
    font-size: $size-xxs;
    line-height: 1.3;

    p {
      margin-bottom: 1em;
      @include media(">=tablet") {
        margin-bottom: 0;
      }
    }
  }

  .container {
    text-align: center;
    @include media(">=tablet") {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .social-list {
    display: flex;
    justify-content: center;
    @include media(">=tablet") {
      justify-content: space-between;
    }
  }

  .icon {
    width: 42px;
    height: 42px;
    font-size: 18px;
    text-align: center;
    line-height: 42px;
    margin-left: 5px;
    border-radius: 50%;
    display: block;
    background-color: $primary;
    color: $success-dark;
    transition: background-color .3s ease,
                color .3s ease;

    &:hover {
      color: $primary;
      background-color: $success-dark;
    }
  }
</style>