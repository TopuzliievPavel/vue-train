import Vue from "vue"
import VueRouter from "vue-router"
import PageContent from "../pages/Content"
import PageAbout from "../pages/About"
import PageContact from "../pages/Contact"
import PageOther from "../pages/Other"
import Home from "../pages/Home"


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
      path: "/other",
      name: "page-other",
      component: PageOther
    },
    {
      path: "/contact",
      name: "page-contact",
      component: PageContact
    }
  ],
  mode: "history"
})