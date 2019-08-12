<template lang="pug">
  input(:type="type"
        :class="className"
        :placeholder="placeholder"
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
      type: String,
      msg: String,
      placeholder: String,
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

    border-right: transparent;
    border-radius: 5px 0 0 5px;

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

  input.form-control {
    padding: 10px;
    border-radius: 4px;
    background-color: $base-color;
    box-shadow: inset 0 2px 2px 0 rgba(126, 133, 174, 0.16);
    border: solid 1px #dfe2f7;
    font-size: 16px;
    color: $primary;
  }
</style>