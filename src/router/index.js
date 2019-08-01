import Vue from "vue"
import VueRouter from "vue-router"
import PageContent from "@/pages/PageContent"
import PageAbout from "@/pages/PageAbout"
import PageContact from "@/pages/PageContact"
import PageOther from "@/pages/PageOther"
import Home from "@/pages/PageHome"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
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