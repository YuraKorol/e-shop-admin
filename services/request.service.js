const GenericRequest = (url) => {
  return {
    findOne: async (axios, id) => {
      try {
        const data = await axios.$get(`${url}/${id}`)
        return data
      }catch (error) {
        console.log(error)
        throw error
      }
    },
    findAll: async (axios) => {
      try {
        const data = await axios.$get(`${url}`)
        return data
      }catch (error) {
        console.log(error)
        throw error
      }
    },
    create: async (axios, payload) => {
      try {
        const data = await axios.$post(`${url}`, payload)
        return data
      }catch (error) {
        console.log(error)
        throw error
      }
    },
    update: async (axios, id, payload) => {
      try {
        const data = await axios.$put(`${url}/${id}`, payload)
        return data
      }catch (error) {
        console.log(error)
        throw error
      }
    },
    remove: async (axios, id) => {
      try {
        const data = await axios.$delete(`${url}/${id}`)
        return data
      }catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}

export default GenericRequest