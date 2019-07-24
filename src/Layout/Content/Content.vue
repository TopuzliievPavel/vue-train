<template>
    <div class="software container">
      <article class="software__article">
        <div class="software__box">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
            maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
            quam</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
            maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
            quam</p>

          <figure class="software__figure">
            <img src="../../assets/img/train.jpg" alt="Funny train" />
            <figcaption>Tussencop</figcaption>
          </figure>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi aspernatur consequatur deserunt
            dolores, dolorum fugiat harum inventore iste, laboriosam modi quam quisquam reiciendis vitae. Consequuntur
            delectus dicta distinctio error illo iste magni maxime molestias nostrum officia quas, quasi quibusdam quos,
            ratione repellat sed voluptatum. Corporis cum facere fuga necessitatibus optio perferendis perspiciatis
            sint, sit. Ab animi architecto asperiores, doloribus facere facilis laborum odio repellendus sequi sint
            tempore vel?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum
            libero maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis
            quam, similique tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea
            eligendi laborum libero maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et
            molestiae omnis quam, similique tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            cupiditate ea eligendi laborum libero maxime nihil numquam placeat totam ullam!</p>
        </div>
      </article>
      <aside class="aside">
        <div class="aside_widget">
          <h3 class="aside__title">Some title</h3>
          <blockquote class="aside__text">
            <div class="aside__text-wrap">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore ea incidunt praesentium
                quidem quos tempora. Ab aliquid distinctio, ducimus eius magnam obcaecati odio praesentium quae.
                Doloribus magnam nemo nihil?</p>
            </div>
            <cite class="aside__author">Leonardo da Vinci</cite>
          </blockquote>
        </div>
      </aside>
    </div>
</template>

<script>
  export default {
    name: "Content"
  }
</script>

<style lang="scss" scoped>
  @import "../../../src/assets/style/variables";
  @import "../../../src/assets/style/include-media";

  .software {
    @include media(">=desktop") {
      display: flex;
    }
  }

  .software__article {
    padding-bottom: 0;
    @include media(">=desktop") {
      padding-bottom: 70px;
    }
  }

  .software__box {
    @include media(">=desktop") {
      flex: 1 1 100%;
    }
  }

  // Aside content

  .aside {
    margin-bottom: 20px;

    @include media(">=desktop") {
      flex: 0 0 40%;
      max-width: 40%;
      padding-left: 2%;
      padding-top: 10px;
      margin-bottom: 0;
    }

    @include media(">=desktop") {
      flex: 0 0 30%;
      max-width: 30%;
    }
  }

  .software__figure {
    margin: 0 0 20px;
    line-height: 1.3;
    color: $success;
  }

  .aside_widget {
    padding: 30px;

    font-size: 15px;
    line-height: 1.3;

    background-color: $primary;
    box-shadow: 0 2px 20px 6px rgba(#000, .3);

    @include media(">=desktop") {
      position: fixed;
      width: 37%;
      right: 15px;

      @supports (position: sticky) {
        position: sticky;
        top: 10px;
        width: 100%;
      }
    }
    @include media(">=widescreen") {
      width: 321px;
      right: calc((100vw - 1170px)/2);
      @supports (position: sticky) {
        width: 100%;
      }
    }
  }

  .aside__title {
    color: $base-color;
    font-family: "Knewave", cursive;
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 30px;
    letter-spacing: 1.2px;
  }

  .aside__text {
    color: $base-color;
  }

  .aside__text-wrap {
    position: relative;
    padding-left: 20px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 4px;
      height: 100%;
      background-color: $base-color;
    }
  }

  .aside__author {
    display: flex;
    justify-content: flex-end;
    color: $info;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
  }
</style>