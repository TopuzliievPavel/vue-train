import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/Layout/Home/Home"
import Content from "@/Layout/Content/Content"
import About from "@/Layout/About/About"
import Contact from "@/Layout/Contact/Contact"
import Other from "@/Layout/OtherLink/Other"
import SignUp from "@/Layout/SignUp/SignUp"
import SignIn from "@/Layout/SignIn/SignIn"

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
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    }
  ],
  mode: "history"
})