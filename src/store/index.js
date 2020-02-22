import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activity: 'Teams'
  },
  mutations: {
    changeActivity (state, payload) {
      state.activity = payload.activity;
    }
  },
  actions: {
    changeActivity (context, payload) {
        context.commit("changeActivity", payload);
    }
  },
  getters: {
    getActivity: state => {
      return state.activity
    }
  }
})
