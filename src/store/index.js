import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuData: [{
      id: '0001',
      name: '西红柿',
      price: 2.99
    }, {
      id: '0002',
      name: '黄瓜',
      price: 1.99
    }]
  },
  mutations: {
    searchItem(state, searchText) {
      state.menuData.map((v, i) => {
        if (v.name === searchText) {
          let obj = v;
          console.log(obj)
          state.menuData.splice(0, state.menuData.length);
          state.menuData.push(obj)
          console.log(state.menuData)
        }
      })
    },
    addItem(state, item) {
      state.menuData.push(item)
    },
    deleteItem(state, id) {
      state.menuData.map((v, i) => {
        if (v.id === id) {
          state.menuData.splice(i, 1)
        }
      })
    },
    updateItem(state, item) {
      state.menuData.map((v, i) => {
        if (v.id === item.id) {
          state.menuData.v = Object.assign(v, item);
        }
      })
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', item)
    },
    deleteItem({ commit }, id) {
      commit('deleteItem', id)
    },
    updateItem({ commit }, item) {
      commit('updateItem', item)
    },
    searchItem({ commit }, name) {
      commit('searchItem', name)
    }
  },
  modules: {
  }
})
