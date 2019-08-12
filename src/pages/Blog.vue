<template lang="pug">
  .blog(v-if="blog")
    .blog__img
      img(:src="blog.img" alt="SSA Group")
      base-button(class-name="blog__btn" @backToHome="backToHome" title="Home")
    h4.blog__title {{ blog.title }}
    .blog__text
      p {{ blog.description }}

</template>

<script>
  import BaseButton from "../components/BaseButton";
  export default {
    name: "page-blog",
    components: {BaseButton},
    data() {
      return {
        blog: null,
        cardItems: [
          {
            id: 1,
            img: require("../assets/img/service01.png"),
            title: "Foto bewerking",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut. Nunc eget lorem dolor sed viverra ipsum nunc. Magna ac placerat vestibulum lectus mauris ultrices. Tortor pretium viverra suspendisse potenti nullam. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Mauris rhoncus aenean vel elit scelerisque. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Tempor commodo ullamcorper a lacus. Vel quam elementum pulvinar etiam non. Eget duis at tellus at urna condimentum mattis pellentesque id. Ultricies lacus sed turpis tincidunt. Sed euismod nisi porta lorem mollis aliquam. Cursus in hac habitasse platea dictumst quisque.Et tortor at risus viverra adipiscing at. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Mauris pharetra et ultrices neque. Porttitor massa id neque aliquam."
          },
          {
            id: 2,
            img: require("../assets/img/service02.png"),
            title: "Illustratie",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Odio ut sem nulla pharetra diam sit. Vitae et leo duis ut diam. Tempus quam pellentesque nec nam aliquam sem et tortor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nunc sed blandit libero volutpat. Lectus sit amet est placerat. A cras semper auctor neque vitae tempus quam pellentesque. Tellus cras adipiscing enim eu turpis egestas. Ultrices gravida dictum fusce ut placerat orci nulla."
          },
          {
            id: 3,
            img: require("../assets/img/service03.png"),
            title: "Video & animatie",
            description: "Cursus vitae congue mauris rhoncus aenean vel. Amet aliquam id diam maecenas ultricies mi eget. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet luctus venenatis lectus magna. Odio aenean sed adipiscing diam donec adipiscing tristique risus. "
          },
          {
            id: 4,
            img: require("../assets/img/service04.png"),
            title: "3D animatie",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Hendrerit gravida rutrum quisque non tellus orci. Lacus suspendisse faucibus interdum posuere. Turpis egestas integer eget aliquet. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Scelerisque in dictum non consectetur a erat. Sed vulputate mi sit amet mauris commodo quis imperdiet. Eu ultrices vitae auctor eu augue ut lectus. Id velit ut tortor pretium viverra suspendisse potenti. Vitae sapien pellentesque habitant morbi tristique senectus et. Sit amet mattis vulputate enim nulla. Arcu non odio euismod lacinia at. Et malesuada fames ac turpis. Hendrerit dolor magna eget est lorem ipsum dolor sit. Amet massa vitae tortor condimentum lacinia. Feugiat vivamus at augue eget arcu dictum varius duis. Auctor augue mauris augue neque gravida in fermentum. "
          }
        ]
      }
    },
    methods: {
      backToHome() {
        this.$router.push({
          path: "/"
        })
      }
    },
    created() {
      const blogId = this.$route.params.id - 1;
      this.blog = this.cardItems[blogId]
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .blog {
    max-width: 800px;
    margin: 10px auto 0;
    padding: 10px;
    border-radius: 5px;
  }

  .blog__text {
    text-align: justify;
  }

  .blog__img {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .blog__btn {
    padding: 5px 10px;
    font-size: 15px;
    font-family: "robotoMedium", sans-serif;
    border: none;
    color: $base-color;
    background-color: $primary;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color .3s, color .3s;

    &:hover {
      background-color: $info;
      color: $primary;
    }
  }
</style>