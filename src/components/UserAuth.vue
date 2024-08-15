<template>
  <button @click="logIn({ value: true })">Login</button>
  <button @click="logOut({ value: false })">Logout</button>
  <!-- <button @click="logIn({ value: true })">Login</button>
  <button @click="logOut({ value: false })">Logout</button> -->
</template>
<script>
// import { mapActions } from 'vuex';

export default {
  methods: {
    // ...mapActions[('logInAction', 'logOutAction')],
    logIn() {
      console.log('listening login');

      this.$store.commit('logInMut', { value: true });
      // this.$store.dispatch({
      //   type: 'logInAction',
      //   value: true,
      // });
    },
    logOut() {
      console.log('listening logout');

      this.$store.commit('logOutMut', { value: false });

      //   this.$store.dispatch({
      //     type: 'logOutAction',
      //     value: false,
      //   });
      // },
    },
  },
};
</script>
