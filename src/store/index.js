import Vue from "vue";
import Vuex from "vuex";

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
        },
        {
          id: 5,
          title: "Sign in",
          link: "/signIn"
        },
        {
          id: 6,
          title: "Sign up",
          link: "/signUp"
        }
      ]
    }
  }
});