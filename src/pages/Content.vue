<template lang="pug">
  .page-content
    .container
      .software
        article.software__article
          added-title(class-name="added-title"
                      v-for="message in messages"
                      :messages="message")
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
        content-aside(class-name="content__aside"
                      title="Some title"
                      cite="Leonardo da Vinci"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing                          elit. Consequatur dolore ea incidunt praesentium quidem quos                              tempora. Ab aliquid distinctio, ducimus eius magnam obcaecati odio                        praesentium quae. Doloribus magnam nemo nihil?")
    section.index-contact
      .container.index-contact__wrap
        .box-form
          box-title(title="Text in the input must be show in the content page")
          form.index-form(@submit.prevent)
            form-input(class-name="form-input content-form_input"
                      @message="addMessage")
            page-button(class-name="btn btn_active content-form_btn"
                        title="Send")
        .box-list
          box-title(title="Community")
          ul.list-group
            list-group(v-for="(listItem, id) in listGroup"
                      :key="id"
                      :listGroup="listItem")
        .box-list
          box-title(title="Contact")
          address-group(v-for="(items, id) in addressItems"
                      :key="id"
                      :addressItems="items")
</template>

<script>
  import ContentAside from "../components/ContentAside";
  import ListGroup from "../components/ListGroup";
  import AddressGroup from "../components/AddressGroup";
  import BoxTitle from "../components/BoxTitle";
  import FormInput from "../components/FormInput";
  import PageButton from "../components/Button";
  import AddedTitle from "../components/AddedTitle";

  export default {
    name: "page-content",
    components: {
      ContentAside,
      FormInput,
      ListGroup,
      AddressGroup,
      BoxTitle,
      PageButton,
      AddedTitle
    },
    created () {
      if (this.$route.query && this.$route.query.message) {
        this.messages.push(this.$route.query.message)
      }
    },
    methods: {
      addMessage:  function (message) {
        this.messages.push(message);
      },
    },
    data() {
      return {
        img: require("../assets/img/train.jpg"),
        alt: "Funny train",
        messages: [],
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

  .software__box {
    @include media(">=desktop") {
      flex: 1 1 100%;
    }
  }



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

  .content-form_btn {
    margin: 0;
    border-radius: 0 5px 5px 0;
  }

  .content-form_input {
    border-right: transparent;
    border-radius: 5px 0 0 5px;
  }


</style>