import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictures: [],
    loading: {
      fetchPictures: false,
      searchPicture: false,
    },
  },
  mutations: {
    SET_PICTURES (state, pictures) {
      state.pictures = pictures
    },
    SET_LOADING (state, { name, value }) {
      if (!Object.hasOwn(state.loading, name)) {
        console.log(`VUEX: возможно, нужно явно указать запрос в state.loading, для которого устанавливается состояние загрузки - ${name}`)
      }
      state.loading[name] = value
    },
    UPDATE_PICTURE (state, { id, data }) {
      const index = state.pictures.findIndex(item => item.id === id)
      // будет реактивно работать только для ключей, которые уже были в объекте
      Object.keys(data).forEach(key => {
        state.pictures[index][key] = data[key]
      })
    },
  },
  actions: {
    fetchPictures ({ commit }) {
      commit('SET_LOADING', { name: 'fetchPictures', value: true })
      api.fetchPictures()
        .then(data => {
          commit('SET_PICTURES', data)
        })
        .catch(err => {
          console.log('Не удалось получить данные')
          console.log(err)
        })
        .finally(() => commit('SET_LOADING', { name: 'fetchPictures', value: false }))
    },
    searchPicture ({ commit }, searchText) {
      commit('SET_LOADING', { name: 'searchPicture', value: true })
      api.fetchPicturesByName(searchText)
        .then(data => {
          commit('SET_PICTURES', data)
        })
        .catch(err => {
          console.log('Не удалось получить данные')
          console.log(err)
        })
        .finally(() => commit('SET_LOADING', { name: 'searchPicture', value: false }) )
    },
    addToCart ({ commit }, pictureId) {
      return api.addToCart(pictureId)
        .then(() => {
          commit('UPDATE_PICTURE', { id: pictureId, data: { isInCart: true } })
        })
        .catch(err => {
          console.log(`Не удалось добавить картину с id ${pictureId} в корзину`)
          console.log(err)
        })
    },
    removeFromCart ({ commit }, pictureId) {
      return api.removeFromCart(pictureId)
        .then(() => {
          commit('UPDATE_PICTURE', { id: pictureId, data: { isInCart: false } })
        })
        .catch(err => {
          console.log(`Не удалось удалить картину с id ${pictureId} из корзины`)
          console.log(err)
        })
    },
  },
})