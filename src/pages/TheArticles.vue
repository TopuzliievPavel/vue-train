<template lang="pug">
  section.other
    .other__wrap
      article.other__article
        .article-list(v-for="(article, index) of filteredArticles"
                      :key="index")
          h6.article-list__title {{ article.title }}
          p {{ article.description }}
          button.button-close(@click.prevent="deleteArticle(index)")
      aside.other__aside
        form.article-form(@submit.prevent)
          input.article-form__field(type="text"
                                    name="article-filter"
                                    placeholder="Field for filter"
                                    v-model="filteredTitle")
          input.article-form__field(type="text"
                                    name="article-title"
                                    placeholder="Create new article"
                                    v-model="articleTitle"
                                    @keyup.enter="newArticle")
          textarea.article-form__field(rows="4"
                                      name="article-description"
                                      placeholder="Write description"
                                      v-model="articleDescription"
                                      @keyup.enter="newArticle")
          base-button.btn.btn_theme_primary(title="Sort"
                                            @click-btn="sortArticles")
</template>

<script>

  import BaseButton from "../components/BaseButton";
  import FormInput from "../components/FormInput";
  export default {
    name: "page-articles",
    components: {
      FormInput,
      BaseButton
    },
    data () {
      return {
        articleId: 4,
        articleTitle: "",
        filteredTitle: "",
        articleDescription: "",
        style: {
          textTransform: "uppercase"
        },
        articles: [
          {
            title: "Foto bewerking",
            description:
              "Foto’s bewerken met gratis alternatieven voor Photoshop. Als je Photoshop fijn vindt werken, maar zelf geen licentie hebt, zijn er andere fotobewerkingsprogramma’s die werken."
          },
          {
            title: "Illustratie",
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. "
          },
          {
            title: "Video & animatie",
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. "
          },
          {
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
        });
        //  Reset
        this.articleId += 1;
        this.articleTitle = "";
        this.articleDescription = ""
      },
      deleteArticle(index) {
        this.articles.splice(index, 1);
      },
      sortArticles() {
        this.articles.sort((a, b) => {
          const firstArticle = a.title.toLowerCase();
          const secondArticle = b.title.toLowerCase();

          if (firstArticle > secondArticle) {
            return 1;
          } else if (firstArticle < secondArticle) {
            return -1;
          }
          return 0;
        });
      }
    },
    computed: {
      filteredArticles() {
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
    }
  }

  .other__article {
    @include media(">=tablet") {
      flex: 1 1 100%;
    }
  }

  .other__aside {
    margin-bottom: 30px;
    @include media(">=tablet") {
      flex: 0 0 40%;
      max-width: 40%;
      padding-left: 20px;
      margin-bottom: 0;
    }
  }

  .article-list {
    padding: 10px;
    margin-bottom: 20px;
    position: relative;

    border-radius: 5px;
    border: solid 1px #ccc;
    background-color: #fcfcfc;
    box-shadow: 5px 5px 5px 0 rgba(227,227,227,1);
  }

  .button-close {
    width: 20px;
    height: 20px;
    padding: 0;

    position: absolute;
    top: 10px;
    right: 10px;

    background-color: transparent;
    border: none;

    &:before,
    &:after {
      content: "";
      width: 100%;
      height: 2px;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);

      border-radius: 3px;
      background-color: $primary;
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .article-form {
    display: flex;
    flex-direction: column;
    padding: 30px;

    background-color: #fafafa;
    border-radius: 6px;
    box-shadow: 0 0 10px 2px rgba(227,227,227,1);
  }

  .article-form__field {
    position: relative;
    padding: 10px;
    margin-bottom: 20px;

    font-size: 16px;
    line-height: 1.3;

    border: solid 1px #e6e2f2;
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
</style>
