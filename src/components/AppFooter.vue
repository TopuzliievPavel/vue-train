<template lang="pug">
  footer.app-footer
    .container
      p Some long long text about copyright
      ul.social-list
        li.social-list__item(
          v-for="(item, id) in socialItems"
          :key="id")
          a.social-list__link(target="_blank" :href="item.link")
            i(:class="item.icon")

</template>

<script>
  export default {
    name: "app-footer",
    computed: {
      socialItems() {
        return [
          {
            icon: "icon icon-twitter-logo",
            link: "https://twitter.com/?lang=ru"
          },
          {
            icon: "icon icon-facebook-logo",
            link: "https://uk-ua.facebook.com/"
          },
          {
            icon: "icon icon-button-play",
            link: "https://www.youtube.com/"
          }
        ]
      }
    }
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
    margin-left: 10px;
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