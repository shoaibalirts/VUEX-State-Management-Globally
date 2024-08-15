<template>
  <button v-if="!getIsloggedIn" @click="logIn">Login</button>
  <button v-if="getIsloggedIn" @click="logOut">Logout</button>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    logIn() {
      console.log('listening login');
      this.$store.dispatch({
        type: 'logInAction',
        value: true,
      });
    },
    logOut() {
      console.log('listening logout');
      this.$store.dispatch({
        type: 'logOutAction',
        value: false,
      });
    },
  },
  computed: {
    ...mapGetters(['getIsloggedIn']),
  },
};
</script>
