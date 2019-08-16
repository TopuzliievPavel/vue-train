<template lang="pug">
  h5 {{ title }}
</template>

<script>
  export default {
    name: "box-title",
    props: {
      title: {
        type: [String, Number]
      }
    }
  }
</script>
