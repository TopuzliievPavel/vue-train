<template>
  <ul class="menu-list">
    <li class="menu-list__item" v-for="item in menuItems" :key="item.id">
      <router-link class="menu-list__link" :to="item.link">{{item.title}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "MenuList",
    data() {
      return {
        menuItems: [
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
          }
          ,
          {
            id: 6,
            title: "Sign up",
            link: "/signUp"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-list {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
    }
  }

  .menu-list__item {
    padding: 15px 10px;
    font-size: 24px;
    text-transform: capitalize;
    color: #434c6d;
  }

  .menu-list__link {
    display: block;

    color: inherit;
    transition: color .3s;

    &:hover,
    &:focus {
      color: #FF0000;
    }
  }
</style>