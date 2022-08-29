import { setError } from '../cookies/cookies'

export default (connection) => {
  connection.interceptors.response.use(
    function (response) {
      setError(null)
      return response
    },

    function (error) {
      const message = error.response.data.message
      setError(message)
      return Promise.reject(error)
    }
  )

  return connection
}
