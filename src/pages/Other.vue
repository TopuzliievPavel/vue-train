<template lang="pug">
  section.other
    .container.other__wrap
      article.other__article
        h2 Articles
        .articles(class="clearfix"
                  v-for="article in articles"
                  :key="article.id")
          .articles__img
            img(:src="article.img")
          .articles__description
            h6 {{ article.title }}
            p {{ article.description }}
      aside.other__aside other aside
</template>

<script>
  export default {
    name: "page-other",
    data () {
      return {
        articles: [
          {
            id: 1,
            title: "Foto Bewerking",
            img: require("../assets/img/service01.png"),
            description:
              "Foto’s bewerken met gratis alternatieven voor Photoshop. Als je Photoshop fijn vindt werken, maar zelf geen licentie hebt, zijn er andere fotobewerkingsprogramma’s die ongeveer hetzelfde werken. Het is geen gratis Photoshop, maar dat heb je misschien ook niet nodig.Blijf je al jaren op de hoogte van elke nieuwe functie die Photoshop toevoegt, dan kun je beter het origineel gebruiken. Wil je als gemiddelde gebruiker gewoon foto’s bewerken, dan zijn er gratis alternatieven. Photoshop is niet het enige programma met veel mogelijkheden!"
          },
          {
            id: 2,
            title: "Illustratie",
            img: require("../assets/img/service02.png"),
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. De illustratie beeldt dan een fragment uit waardoor de lijn van het verhaal zichtbaar wordt voor de lezer of de sfeer van het verhaal wordt geaccentueerd. Een illustratie is dan een visuele uitleg of verduidelijking. Kinderboeken en wetenschappelijke verhandelingen worden vaak met illustraties verluchtigd.Men kan de volgende twee soorten illustraties onderscheiden:Tekeningen van (complexe) objecten of situaties, zie infographicWeergave van informatie door een cartoon. "
          },
          {
            id: 3,
            title: "Video & animatie",
            img: require("../assets/img/service03.png"),
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. De illustratie beeldt dan een fragment uit waardoor de lijn van het verhaal zichtbaar wordt voor de lezer of de sfeer van het verhaal wordt geaccentueerd. Een illustratie is dan een visuele uitleg of verduidelijking. Kinderboeken en wetenschappelijke verhandelingen worden vaak met illustraties verluchtigd.Men kan de volgende twee soorten illustraties onderscheiden:Tekeningen van (complexe) objecten of situaties, zie infographicWeergave van informatie door een cartoon. "
          },
          {
            id: 4,
            title: "3D animatie",
            img: require("../assets/img/service04.png"),
            description:
              "Een illustratie is een (meestal) visuele toelichting bij een verhaal, een beschrijving of een bewering.Meestal is een illustratie een tekening of een toepasselijke foto bij een geschreven verhaal. De illustratie beeldt dan een fragment uit waardoor de lijn van het verhaal zichtbaar wordt voor de lezer of de sfeer van het verhaal wordt geaccentueerd. Een illustratie is dan een visuele uitleg of verduidelijking. Kinderboeken en wetenschappelijke verhandelingen worden vaak met illustraties verluchtigd.Men kan de volgende twee soorten illustraties onderscheiden:Tekeningen van (complexe) objecten of situaties, zie infographicWeergave van informatie door een cartoon. "
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  .clearfix {
   &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  .other__wrap {
    display: flex;
  }

  .other__article {
    flex: 1 0 70%;
    max-width: 70%;
  }

  .other__aside {
    flex: 1 0 30%;
    max-width: 30%;
  }

  .articles {
    border: solid 1px #ccc;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .articles__img {
    float: left;
    margin: 30px;
  }
</style>
