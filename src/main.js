import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
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
  },
});
const app = createApp(App);
app.use(store);
app.mount('#app');
