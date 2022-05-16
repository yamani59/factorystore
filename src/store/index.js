import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0  
  },
  getters: {
    getCounter: state => {
      return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
});
