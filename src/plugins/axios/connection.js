export default (SERVER_URI) => {
  const axios = require('axios').default

  const router = axios.create({
    baseURL: SERVER_URI,
    timeout: 1000,
  })

  return router
}
