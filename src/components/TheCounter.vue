<template>
  <h3>{{ counting }}</h3>
</template>
<script>
export default {
  computed: {
    counting() {
      return this.$store.state.counter;
    },
  },
};
</script>
