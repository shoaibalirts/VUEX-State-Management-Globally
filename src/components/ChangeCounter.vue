<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increase', { value: 2 });
    //   this.$store.dispatch('increment', { value: 2 });
    ...mapActions(['increment', 'increase']),
  },
};
</script>
