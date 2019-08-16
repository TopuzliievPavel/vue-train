<template lang="pug">
  .home-page
    section.visual(:style="cssStyle")
      .visual__inner
        h1.visual__title Lorem ipsum dolor sit amet
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantiumad, aliquam ametassumenda atque autem cumque debitis, earum est ipsa labore non praesentium quidem repudiandae tempore voluptates? Molestias, tempore, voluptatem.
        base-button.btn.btn_active.btn_visual(title="Download"
                                              @click-btn="showAlert")
        base-button.btn.btn_visual(title="Meer informatie"
                                  @click-btn="moveToInformation")
    section.index-about
      .container
        h2.title Some title
        .about-list
          card-blog(v-for="(card, id) in cardItems"
                    :key="id"
                    :card-items="card")
    section.section-contact
      .section-contact__wrap
        .box-form
          box-title(title="Text in the input must be show in the content page")
          form.section-contact-form(@submit.prevent="moveMessage")
            form-input.form-input(type="text"
                                  name="message"
                                  placeholder="Some text"
                                  @add-label="message = $event")
            base-button.btn.btn_active.btn_rounded(title="Send")
        .box-list
          box-title(title="Community")
          ul.list-group
            list-group(v-for="(listItem, id) in listGroup"
                      :key="id"
                      :list-group="listItem")
        .box-list
          box-title(title="Contact")
          dl.address-list
            dt.address-list__term Address:
            dd.address-list__description
              address Country City, Street 123
            dt.address-list__term Telephone
            dd.address-list__description
              a.address-list__link(href="tel:telephone") {{ telephone }}
            dt.address-list__term Email:
            dd.address-list__description
              a.address-list__link(href="mailto:addressLink") {{ addressLink }}
</template>

<script>
  import CardBlog from "../components/CardBlog";
  import BaseButton from "../components/BaseButton";
  import ListGroup from "../components/ListGroup";
  import BoxTitle from "../components/BoxTitle";
  import FormInput from "../components/FormInput";

  export default {
    name: "page-home",
    components: {
      CardBlog,
      BaseButton,
      FormInput,
      ListGroup,
      BoxTitle
    },
    data() {
      return {
        message: "",
        messages: [],
        telephone: "(123) 456 78 90",
        addressLink: "somemail@mail.com",
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
            description:
              "Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin consequa lectus sed felis vulputate varius. Magna ac placerat vestibulum lectus mauris ultrices. Tortor pretium viverra suspendisse potenti nullam. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Mauris rhoncus aenean vel elit scelerisque. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Tempor commodo ullamcorper a lacus. Vel quam elementum pulvinar etiam non. Eget duis at tellus at urna condimentum mattis pellentesque id. Ultricies lacus sed turpis tincidunt. Sed euismod nisi porta lorem mollis aliquam. Cursus in hac habitasse platea dictumst quisque.Et tortor at risus viverra adipiscing at. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Mauris pharetra et ultrices neque. Porttitor massa id neque aliquam."
          },
          {
            img: require("../assets/img/service02.png"),
            title: "Illustratie",
            description:
              "Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin consequa lectus sed felis vulputate varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Odio ut sem nulla pharetra diam sit. Vitae et leo duis ut diam. Tempus quam pellentesque nec nam aliquam sem et tortor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nunc sed blandit libero volutpat. Lectus sit amet est placerat. A cras semper auctor neque vitae tempus quam pellentesque. Tellus cras adipiscing enim eu turpis egestas. Ultrices gravida dictum fusce ut placerat orci nulla."
          },
          {
            img: require("../assets/img/service03.png"),
            title: "Video & animatie",
            description: "Cursus vitae congue mauris rhoncus aenean vel."
          },
          {
            img: require("../assets/img/service04.png"),
            title: "3D animatie",
            description:
              "Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin consequa lectus sed felis vulputate varius. Turpis egestas integer eget aliquet. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Scelerisque in dictum non consectetur a erat. Sed vulputate mi sit amet mauris commodo quis imperdiet. Eu ultrices vitae auctor eu augue ut lectus. Id velit ut tortor pretium viverra suspendisse potenti. Vitae sapien pellentesque habitant morbi tristique senectus et. Sit amet mattis vulputate enim nulla. Arcu non odio euismod lacinia at. Et malesuada fames ac turpis. Hendrerit dolor magna eget est lorem ipsum dolor sit. Amet massa vitae tortor condimentum lacinia. Feugiat vivamus at augue eget arcu dictum varius duis. Auctor augue mauris augue neque gravida in fermentum."
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
          name: "page-content",
          query: {
            message: this.message
          }
        });
      },
      moveToInformation() {
        this.$router.push({
          name: "page-content"
        })
      },
      showAlert() {
        alert("You download this text")
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/base";

  /* -----Visual----- */
  .visual {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 74px 0;
    margin-top: -74px;

    position: relative;

    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    box-shadow: 0 10px 20px rgba(0,0,0,.5);

    font-size: 16px;
    line-height: 1.3;
    text-align: center;
    color: $base-color;

    // fix for ie vertical align
    &:after {
      content: "";
      height: calc(100vh - 148px);
    }
    //---------------

    @include media(">=tablet") {
      font-size: $size-m;
      margin-top: -78px;
      padding:  78px 0;
    }

    @include media(">=desktop") {
      font-size: $size-l;
    }

    @include media(">=widescreen") {
      font-size: $size-xl;
    }

    &:before {
      content: "";
      width: 100%;
      height: 100%;

      position: absolute;
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

  .btn_visual {
    width: 100%;
    @include media(">=tablet") {
      width: auto;
    }
  }

  /*---Index-About----*/
  .index-about {
    padding: 60px 0 40px;
    background-color: $primary;
  }

  .about-list {
    @include media(">=tablet") {
      display: flex;
      flex-wrap: wrap;
    }
  }

  /*----Index-Contact-----*/
  .section-contact {
    padding: 60px 0;
    background-color: $success;
  }

  .section-contact__wrap {
    max-width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
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

  .section-contact-form {
    display: flex;
  }

  .address-list__term {
    text-transform: capitalize;
    font-weight: bold;
    line-height: 1.6;
  }

  .address-list__link {
    color: $primary;

    transition: color .3s;

    &:hover,
    &:focus {
      color: $info;
    }
  }

  .address-list,
  .address-list__description,
  .list-group__item,
  address {
    margin: 0;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>