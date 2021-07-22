export default {
  state: () => ({
    error: null
  }),
  mutations: {
    setError(state, payload) {
      state.error = payload
    }
  }
}