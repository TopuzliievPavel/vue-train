<template lang="pug">
  input(type="text"
        :class="className"
        placeholder="Some text"
        :value="msg"
        @input="changeMessage")
</template>

<script>
  export default {
    name: "form-input",
    data() {
      return {
        valueInput: ""
      }
    },
    props: {
      msg: String,
      className: {
        type: String
      }
    },
    methods: {
      changeMessage(event) {
        this.valueInput = event.target.value;
        this.$emit("addLabel", this.valueInput);
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