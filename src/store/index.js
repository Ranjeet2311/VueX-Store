import { createStore } from 'vuex';
import product from './module/product.js';
import cartModule from './module/cart.js';
// any namejust as cartModule can be given to the import

const store = createStore({
  // add Modules
  modules: {
    prods: product,
    cart: cartModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
      console.log('login ' + this.isLoggedIn);
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
      console.log(context);
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
