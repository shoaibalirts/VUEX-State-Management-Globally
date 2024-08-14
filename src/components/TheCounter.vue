<template>
  <h3>{{ finalCounter }}</h3>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counting() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter']), // we can have more than one getters in the array
  },
};
</script>
