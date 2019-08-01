import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menuItems() {
      return [
        {
          id: 1,
          title: "Content",
          link: "/content"
        },
        {
          id: 2,
          title: "Other Link",
          link: "/other"
        },
        {
          id: 3,
          title: "About Us",
          link: "/about"
        },
        {
          id: 4,
          title: "Contact",
          link: "/contact"
        }
      ]
    },
    cardItems() {
     return  [
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
  }
});