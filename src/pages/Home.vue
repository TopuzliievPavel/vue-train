<template lang="pug">
  .home-page
    section.visual(:style="cssStyle")
      .visual__inner
        h1.visual__title Lorem ipsum dolor sit amet
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantiumad, aliquam ametassumenda atque autem cumque debitis, earum est ipsa labore non praesentium quidem repudiandae tempore voluptates? Molestias, tempore, voluptatem.
        page-button(title="Download"
                    class="btn btn_active visual__btn")
        page-button(title="Meer informatie"
                    class="link visual__btn"
                    @moveInformation="moveInformation")
    section.index-about
      .container
        h2.title Some title
        .about-list
          card-info(v-for="(card, id) in cardItems"
                    :key="id"
                    :cardItems="card")
    section.index-contact
      .container.index-contact__wrap
        .box-form
          box-title(title="Text in the input must be show in the content page")
          form.index-form(@submit.prevent="moveMessage")
            form-input(class-name="form-input index-form_input"
                       :msg="message"
                        @addLabel="message = $event")
            page-button(class-name="btn btn_active index-form_btn"
                        title="Send")
        .box-list
          box-title(title="Community")
          ul.list-group
            list-group(v-for="(listItem, id) in listGroup"
                      :key="id"
                      :listGroup="listItem")
        .box-list
          box-title(title="Contact")
          dl.address-list
            dt.address-list__term Address:
            dd.address-list__description
              address Country City, Street 123
            dt.address-list__term Telephone
            dd.address-list__description
              a.address-list__link(href="/") (123) 456 78 90
            dt.address-list__term Email:
            dd.address-list__description
              a.address-list__link(href="/") somemail@mail.com
</template>

<script>
  import CardInfo from "../components/CardInfo";
  import PageButton from "../components/PageButton";
  import ListGroup from "../components/ListGroup";
  import BoxTitle from "../components/BoxTitle";
  import FormInput from "../components/FormInput";

  export default {
    name: "page-home",
    components: {
      CardInfo,
      PageButton,
      FormInput,
      ListGroup,
      BoxTitle
    },
    data() {
      return {
        message: "",
        messages: [],
        pageContent: "/content",
        pageArticles: "/articles",
        cssStyle: {
          backgroundImage: `url(${require("../assets/img/slide.jpg")})`
        },
        listGroup: [
          {
            title: "Link 1",
            link: "https://www.google.com/search?q=nature&rlz=1C1GCEU_ruUA857UA857&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiEneadvNrjAhXOlIsKHWn1CpAQ_AUIECgB&biw=1920&bih=969"
          },
          {
            title: "Link 2",
            link: "https://www.google.com/search?rlz=1C1GCEU_ruUA857UA857&biw=1920&bih=969&tbm=isch&sa=1&ei=UhQ_XebfBIjPrgTzu6zIAw&q=people&oq=people&gs_l=img.3..0l2j0i67j0l7.15767.16496..16797...0.0..0.85.461.6......0....1..gws-wiz-img.9XQWm5J1uB8&ved=&uact=5"
          },
          {
            title: "Some long long link 3",
            link: "https://www.google.com/search?rlz=1C1GCEU_ruUA857UA857&biw=1920&bih=969&tbm=isch&sa=1&ei=YxQ_XaezJrKQmwXqp4fAAQ&q=cars&oq=cars&gs_l=img.3..0i67j0l9.13290.13880..13977...0.0..0.83.329.4......0....1..gws-wiz-img.KDm4UysH7ec&ved=&uact=5"
          },
          {
            title: "Somelonglonglink 4",
            link: "https://www.google.com/search?rlz=1C1GCEU_ruUA857UA857&biw=1920&bih=969&tbm=isch&sa=1&ei=gRQ_XaW_LYvamwW4p5GACg&q=world&oq=world&gs_l=img.3..0i67j0l2j0i67j0j0i67j0l4.2959.3975..4151...1.0..0.80.459.6......0....1..gws-wiz-img.......35i39.gv-opabPLKI&ved=&uact=5"
          }
        ],
        cardItems: [
          {
            img: require("../assets/img/service01.png"),
            title: "Foto bewerking",
            content: "Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin consequa lectus sed felis vulputate varius"
          },
          {
            img: require("../assets/img/service02.png"),
            title: "Illustratie",
            content: "Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin consequa lectus sed felis vulputate varius"
          },
          {
            img: require("../assets/img/service03.png"),
            title: "Video & animatie",
            content: "Lorem ipsum dolor sit amet, con sectetur apidiscing elit."
          },
          {
            img: require("../assets/img/service04.png"),
            title: "3D animatie",
            content: "Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin consequa lectus sed felis vulputate varius"
          }
        ]
      }
    },
    methods: {
      moveMessage() {
        this.messages.push(this.message);
        this.changePages()
      },
      changePages() {
        this.$router.push({
          path: this.pageContent,
          query: {
            message: this.message
          }
        });
      },
      moveInformation() {
        this.$router.push({
          path: this.pageContent
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  /*---------------------------Visual-------------------------*/
  .visual {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    /*padding: 80px 0;*/
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    box-shadow: 0 10px 20px rgba(0,0,0,.5);

    text-align: center;
    font-size: 16px;
    line-height: 1.3;
    color: $base-color;

    // fix for ie vertical align
    &:after {
      content: "";
      height: calc(100vh - 160px);
    }
    //-----------------------------

    @include media(">=tablet") {
      font-size: $size-m;
    }

    @include media(">=desktop") {
      font-size: $size-l;
    }

    @include media(">=widescreen") {
      font-size: $size-xl;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $dark-color;
      opacity: .4;
    }
  }

  .visual__inner {
    padding: 0 15px;
    z-index: 1;

    @include media(">=tablet") {
      max-width: 700px;
    }
  }

  .visual__title {
    font-size: 24px;

    @include media(">=desktop") {
      font-size: 44px;
    }

    @include media(">=widescreen") {
      font-size: 64px;
    }
  }

  .visual__btn {
    width: 100%;
    @include media(">=tablet") {
      width: auto;
    }
  }

  /*------------------------------Index-About---------------------*/
  .index-about {
    background-color: $primary;
    padding: 60px 0 40px;
  }

  .about-list {
    @include media(">=tablet") {
      display: flex;
      flex-wrap: wrap;
    }
  }



  /*------------------------Index-Contact-------------------*/
  .index-contact {
    background-color: $success;
    padding: 60px 0;
  }

  .index-contact__wrap {
    @include media(">=desktop") {
      display: flex;
    }
  }

  .box-form {
    margin-bottom: 40px;
    @include media(">=desktop") {
      flex: 0 0 50%;
      max-width: 50%;
      margin-bottom: 0;
    }
  }

  .box-list {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    @include media(">=desktop") {
      max-width: 25%;
      flex: 0 0 25%;
      padding-left: 30px;
      margin-bottom: 0;
    }
  }

  .index-form {
    display: flex;
  }

  .index-form_btn {
    margin: 0;
    border-radius: 0 5px 5px 0;
  }

  .index-form_input {
    border-right: transparent;
    border-radius: 5px 0 0 5px;
  }


  .address-list,
  .address-list__description,
  .address-list__term {
    margin: 0;
  }

  .address-list__term {
    text-transform: capitalize;
    font-family: "RobotoBold", sans-serif;
    line-height: 1.6;
  }

  .address-list__link {
    transition: color .3s;
    color: $primary;
    font-family: "RobotoRegular", sans-serif;

    &:hover,
    &:focus {
      color: $info;
    }
  }
</style>