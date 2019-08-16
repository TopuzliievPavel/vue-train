<template lang="pug">
  .page-content
    .container
      .software
        article.software__article
          added-title.added-title(v-for="(message, id) in messages"
                                  :key="id"
                                  :send-message="message")
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
            | maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
            | quam
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
            | maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
            | quam
          figure.software__figure
            img(:src="img", alt="Funny train")
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
        content-aside.content__aside(title="Some title"
                                    cite="Leonardo da Vinci"
                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore ea incidunt praesentium quidem quos tempora. Ab aliquid distinctio, ducimus eius magnam obcaecati odio praesentium quae. Doloribus magnam nemo nihil?")
    section.section-contact
      .section-contact__wrap
        .box-form
          box-title(title="Text in the input must be show in the content page")
          form.section-contact-form(@submit.prevent="addMessage")
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
</template>

<script>
  import ContentAside from "../components/ContentAside";
  import ListGroup from "../components/ListGroup";
  import BoxTitle from "../components/BoxTitle";
  import FormInput from "../components/FormInput";
  import BaseButton from "../components/BaseButton";
  import AddedTitle from "../components/AddTitle";

  export default {
    name: "page-content",
    components: {
      ContentAside,
      FormInput,
      ListGroup,
      BoxTitle,
      BaseButton,
      AddedTitle
    },
    data() {
      return {
        img: require("../assets/img/train.jpg"),
        messages: [],
        message: "",
        telephone: "(123) 456 78 90",
        addressItems: [
          {
            title: "Address:",
            path: "Country City, Street 123",
          },
          {
            title: "Telephone",
            path: "(123) 456 78 90"
          }
        ],
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
      }
    },
    created () {
      if (this.$route.query.message) {
        this.messages.push(this.$route.query.message)
      }
    },
    methods: {
      addMessage() {
        this.messages.push(this.message);
        this.$router.push({
          query: {
            message: this.message
          }
        });
        this.message = ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .software {
    @include media(">=desktop") {
      display: flex;
    }
  }

  .software__article {
    padding-bottom: 0;
    @include media(">=desktop") {
      padding-bottom: 70px;
      flex: 1 1 100%;
    }
  }

  .software__figure {
    margin: 0 0 20px;

    line-height: 1.3;
    color: $success;
  }
</style>