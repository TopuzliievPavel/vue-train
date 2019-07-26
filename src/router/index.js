import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/pages/Home"
import Content from "@/pages/Content"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Other from "@/pages/Other"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/content",
      name: "Content",
      component: Content
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/other",
      name: "OtherLink",
      component: Other
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ],
  mode: "history"
})