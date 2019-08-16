<template lang="pug">
  .blog__wrap
    .blog(v-for="(blog, id) in cardItems"
          :key="id")
      .blog__img
        img(:src="blog.img" alt="SSA Group")
        base-button.btn.btn_theme_primary(title="Home"
                                         @click-btn="backToHome")
      h4.blog__title {{ blog.title }}
      .blog__text
        p {{ blog.description }}
</template>

<script>
  import BaseButton from "../components/BaseButton";
  export default {
    name: "page-blog",
    components: {
      BaseButton
    },
    data() {
      return {
        cardItems: []
      }
    },
    methods: {
      backToHome() {
        this.$router.push({
          name: "page-home"
        })
      }
    },
    created() {
      this.cardItems.push({
        title: this.$route.params.title,
        img: this.$route.params.img,
        description: this.$route.params.description,
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .blog {
    max-width: 800px;
    margin: 10px auto 0;
    padding: 0 10px;
  }

  .blog__img {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>