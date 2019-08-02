<template lang="pug">
  input(type="text"
        :class="className"
        placeholder="Some text"
        v-model="message"
        @keyup.enter="saveMessage")
</template>

<script>
  export default {
    name: "form-input",
    data() {
      return {
        message: ""
      }
    },
    methods: {
      saveMessage() {
        this.$emit("message", this.message);
        this.message = ""
      }
    },
    props: {
      className: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .form-input {
    flex: 1 0 auto;
    padding: .4rem .8rem;

    background: transparent;
    border: solid 2px currentColor;
    font-size: 14px;

    border-radius: 5px;

    &::placeholder {
      color: $primary;
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
</style>