import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    logInMut(state, payload) {
      console.log(payload);
      state.isLoggedIn = payload.value; // logic
      console.log(state);
    },
    logOutMut(state, payload) {
      console.log(payload);
      state.isLoggedIn = payload.value; // logic
      console.log(state);
    },
  },
  actions: {
    // logInAction(context, payload) {
    //   context.commit('logInMut', payload.value);
    // },
    // logOutAction(context, payload) {
    //   context.commit('logOutMut', payload.value);
    // },
    increment(context) {
      // this increment is actions
      // asynchronous code
      setTimeout(() => {
        context.commit('increment'); // increment is mutations
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload); // here we forward payload to mutations
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2; // new computed value
    },
    getIsloggedIn(state) {
      console.log('getters');

      return state.isLoggedIn;
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount('#app');
