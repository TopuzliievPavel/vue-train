import Vue from "vue"
import VueRouter from "vue-router"
import PageContent from "../pages/Content"
import PageAbout from "../pages/About"
import PageContact from "../pages/Contact"
import PageArticles from "../pages/Articles"
import Home from "../pages/Home"
import PageTest from "../pages/Test"


Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior(to, from) {
    return {
      x: 0,
      y:0
    }
  },
  routes: [
    {
      path: "",
      name: "page-home",
      component: Home
    },
    {
      path: "/content",
      name: "page-content",
      component: PageContent
    },
    {
      path: "/about",
      name: "page-about",
      component: PageAbout
    },
    {
      path: "/articles",
      name: "page-articles",
      component: PageArticles
    },
    {
      path: "/contact",
      name: "page-contact",
      component: PageContact
    },
    {
      path: "/test",
      name: "page-test",
      component: PageTest
    },
  ],
  mode: "history"
})