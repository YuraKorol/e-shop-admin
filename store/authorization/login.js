export default {
  actions: {
    async onLogin({ commit }, payload) {
      try {
        await this.$auth.loginWith('local', { data: payload })
      }catch (err) {
        commit('error/setError', err)
      }
    }
  }
}