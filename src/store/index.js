import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobileMode: false,
  },
  getters: {
    isMobileMode: (state) => state.isMobileMode,
  },
  mutations: {
    TOGGLE_DEVICE_MODE: (state, isMobileMode) => {
      state.isMobileMode = isMobileMode;
    },
  },
  actions: {
    toggleDeviceMode({ commit }, data) {
      commit("TOGGLE_DEVICE_MODE", data);
    },
  },
  modules: {},
});
