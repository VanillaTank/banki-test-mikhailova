import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictures: [],
    isLoading: false,
  },
  mutations: {
    SET_PICTURES (state, pictures) {
      state.pictures = pictures
    },
    TOGGLE_LOADING (state, isLoading) {
      state.isLoading = isLoading
    },
  },
  actions: {
    fetchPictures ({ commit }) {
      commit('TOGGLE_LOADING', true)
      api.fetchPictures()
        .then(data => {
          commit('SET_PICTURES', data)
        })
        .catch(err => {
          console.log('Не удалось получить данные')
          console.log(err)
        })
        .finally(() => commit('TOGGLE_LOADING', false))
    },
    searchPicture ({ commit }, searchText) {
      commit('TOGGLE_LOADING', true)
      api.fetchPicturesByName(searchText)
        .then(data => {
          commit('SET_PICTURES', data)
        })
        .catch(err => {
          console.log('Не удалось получить данные')
          console.log(err)
        })
        .finally(() => commit('TOGGLE_LOADING', false))
    },
  },
})