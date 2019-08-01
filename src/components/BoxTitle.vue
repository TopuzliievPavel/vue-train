<template lang="pug">
  h5(:class="className") {{ title }}
</template>

<script>
  export default {
    name: "box-title",
    props: {
      title: {
        type: [String, Number]
      },
      className: {
        type: String
      }
    }
  }
</script>
