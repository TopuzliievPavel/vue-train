<template lang="pug">
  article.software__article
    .software__box
      p
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
        | maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
        | quam
      p
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
        | maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
        | quam
      figure.software__figure
        img(:src="img", :alt="alt")
        figcaption Tussencop
      p
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi aspernatur consequatur deserunt
        | dolores, dolorum fugiat harum inventore iste, laboriosam modi quam quisquam reiciendis vitae. Consequuntur
        | delectus dicta distinctio error illo iste magni maxime molestias nostrum officia quas, quasi quibusdam quos,
        | ratione repellat sed voluptatum. Corporis cum facere fuga necessitatibus optio perferendis perspiciatis
        | sint, sit. Ab animi architecto asperiores, doloribus facere facilis laborum odio repellendus sequi sint
        | tempore vel?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum
        | libero maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis
        | quam, similique tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea
        | eligendi laborum libero maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et
        | molestiae omnis quam, similique tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
        | cupiditate ea eligendi laborum libero maxime nihil numquam placeat totam ullam!

</template>

<script>
  export default {
    name: "content-article",
    data() {
      return {
        img: require("../assets/img/train.jpg"),
        alt: "Funny train"
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .software__article {
    padding-bottom: 0;
    @include media(">=desktop") {
      padding-bottom: 70px;
    }
  }

  .software__figure {
    margin: 0 0 20px;
    line-height: 1.3;
    color: $success;
  }
</style>