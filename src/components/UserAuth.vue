<template>
  <!-- <button @clcik="logInAction({ value: true })">Login</button>
  <button @click="logOutAction({ value: false })">Logout</button> -->
  <button @clcik="logIn({ value: true })">Login</button>
  <button @click="logOut({ value: false })">Logout</button>
</template>
<script>
// import { mapActions } from 'vuex';

export default {
  methods: {
    // ...mapActions[('logInAction', 'logOutAction')],
    // logIn() {
    //   this.$store.dispatch({
    //     type: 'logInAction',
    //     value: true,
    //   });
    // },
    // logOut() {
    //   this.$store.dispatch({
    //     type: 'logOutAction',
    //     value: false,
    //   });
    // },
  },
};
</script>
