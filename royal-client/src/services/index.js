import axios from './axios'

export default path => {
  return {
    get: async id => {
      try {
        const objectId = id ? `/${id}` : ``
        const response = await axios.get(`${path}${objectId}`)
        return response.data
      } catch(error) {
        console.log(error)
      }
    },
    post: async object => {
      try {
        const response = await axios.post(path, object)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    put: async object => {
      try {
        const response = await axios.put(path, object)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    delete: async id => {
      try {
        const response = await axios.delete(`${path}/${id}`)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    upload: async formData => {
      try {
        const response = await axios.post(`${path}/upload`, formData)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    customUrl: async ({ verb, complementPath, object }) => {
      try {
        const response = await axios[verb](`${path}/${complementPath}`, object)
        return response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}