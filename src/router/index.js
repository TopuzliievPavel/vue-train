import Vue from "vue"
import VueRouter from "vue-router"
import PageContent from "../pages/TheContent"
import PageAbout from "../pages/TheAbout"
import PageContact from "../pages/TheContact"
import PageArticles from "../pages/TheArticles"
import Home from "../pages/TheHome"
import PageBlog from "../pages/TheBlog"

Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y:0
    }
  },
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
      path: "/blog/:title",
      name: "page-blog",
      component: PageBlog
    }
  ],
  mode: "history"
})