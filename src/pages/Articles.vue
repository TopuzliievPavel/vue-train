<template lang="pug">
  section.other
    .other__wrap
      article.other__article
        transition-group(name="fade")
          .article-list(v-for="(article, index) of filteredTitles"
            :key="index")
            .article-list__content
              h6.article-list__title {{ article.title }}
              p {{ article.description }}
              button.button-close(@click.prevent="deleteArticle(index)")
      aside.other__aside
        form.article-form(@submit.prevent)
          input.article-form__field(type="text"
                                    placeholder="Field for filter"
                                    v-model="filteredTitle")
          input.article-form__field(type="text"
                                    placeholder="Create new article"
                                    v-model="articleTitle"
                                    @keyup.enter="newArticle")
          textarea.article-form__field(rows="4"
                                      placeholder="Write description"
                                      v-model="articleDescription"
                                      @keyup.enter="newArticle")
          page-button(class-name="btn btn_theme_primary"
                      title="sort"
                      :style="style"
                      @sortArticles="sortArticles")
</template>

<script>

  import PageButton from "../components/PageButton";
  export default {
    name: "page-articles",
    components: {
      PageButton
    },
    data () {
      return {
        articleId: 5,
        articleTitle: "",
        filteredTitle: "",
        articleDescription: "",
        style: {
          textTransform: "uppercase"
        },
        articles: [
          {
            id: 1,
            title: "Foto bewerking",
            description:
              "Foto’s bewerken met gratis alternatieven voor Photoshop. Als je Photoshop fijn vindt werken, maar zelf geen licentie hebt, zijn er andere fotobewerkingsprogramma’s die werken."
          },
          {
            id: 2,
            title: "Illustratie",
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. "
          },
          {
            id: 3,
            title: "Video & animatie",
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. "
          },
          {
            id: 4,
            title: "3D animatie",
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. "
          }
        ]
      }
    },
    methods: {
      newArticle() {
        if (this.articleTitle === "") {
          return;
        }
        this.articles.push({
          id: this.articleId,
          title: this.articleTitle,
          description: this.articleDescription
        }),
        //  Reset
        this.articleId += 1,
        this.articleTitle = "",
        this.articleDescription = ""
      },
      deleteArticle(index) {
        this.articles.splice(index, 1)
      },
      changePages() {
        this.$router.push({
          path: "/",
          query: {
            filteredTitle: this.filteredTitle
          }
        })
      },
      sortArticles() {
        this.articles.sort(function (a, b) {
          if (a > b) {
            return 1
          } else {
            return -1
          }
        })
      }
    },
    computed: {
      filteredTitles() {
        return this.articles.filter(article => {
          return article.title.toLowerCase().indexOf(this.filteredTitle.toLowerCase()) > -1;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .other__wrap {
    display: flex;
    flex-direction: column-reverse;
    padding: 30px 15px;
    max-width: 1170px;
    margin: 0 auto;

    @include media(">=tablet") {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .other__article {
    @include media(">=tablet") {
      flex: 1 0 60%;
      max-width: 60%;
    }
  }

  .other__aside {
    margin-bottom: 30px;
    @include media(">=tablet") {
      flex: 1 0 40%;
      max-width: 40%;
      padding-left: 20px;
      margin-bottom: 0;
    }
  }

  .article-list {
    border: solid 1px #ccc;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    position: relative;
    background-color: #fcfcfc;
    box-shadow: 5px 5px 5px 0 rgba(227,227,227,1);
  }

  .article-list__title {
    text-transform: initial;
  }

  .button-close {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    padding: 0;

    &:before,
    &:after {
      content: "";
      position: absolute;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 2px;
      border-radius: 3px;
      transform: translate(-50%, -50%) rotate(45deg);
      background-color: $primary;
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .article-form {
    background-color: #fafafa;
    padding: 30px;
    border-radius: 6px;
    box-shadow: 0 0 10px 2px rgba(227,227,227,1);
    display: flex;
    flex-direction: column;
  }

  .article-form__field {
    position: relative;
    border: solid 1px #e6e2f2;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.3;
    border-radius: 5px;


    &:last-child {
      margin-bottom: 0;
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
