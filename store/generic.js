import GenericRequest from '@/services/request.service'

const crudStore = (url) => {
  const genericRequest = GenericRequest(url)
  return {
    state: () => ({
      item: {},
      items: [],
      error: null
    }),
    mutations: {
      getOneItem(state, payload) {
        state.item = payload
      },
      getAllItems(state, payload) {
        state.items = payload
      },
      createItem(state, payload) {
        state.items.push(payload)
      },
      updateItem(state, payload) {
        state.items.find(item => item._id === payload._id)
      },
      removeItem(state, payload) {
        const index = state.items.findIndex(item => item._id === payload)
        state.items.splice(index, 1)
      },
      getError(state, error) {
        state.error = error
      }
    },
    actions: {
      async findOne({ commit }, id) {
        try {
          const data = await genericRequest.findOne(this.$axios, id)
          commit('getOneItem', data)
        }catch (error) {
          commit('getError', error)
        }
      },
      async findAll({ commit }) {
        try {
          const data = await genericRequest.findAll(this.$axios)
          commit('getAllItems', data)
        }catch (error) {
          commit('getError', error)
        }
      },
      async create({ commit }, payload) {
        try {
          const data = await genericRequest.create(this.$axios, payload)
          commit('createItem', data)
        }catch (error) {
          commit('getError', error)
        }
      },
      async update({ commit }, { id, payload }) {
        try {
          const data = await genericRequest.update(this.$axios, id, payload)
          commit('updateItem', data)
        }catch (error) {
          commit('getError', error)
        }
      },
      async remove({ commit }, id) {
        try {
          await genericRequest.remove(this.$axios, id)
          commit('removeItem', id)
        }catch (error) {
          commit('getError', error)
        }
      }
    },
    getters: {
      item: state => state.item,
      items: state => state.items
    }
  }
}

export default crudStore