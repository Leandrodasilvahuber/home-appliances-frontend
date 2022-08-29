import cookie from 'cookiejs'

const getError = () => {
  return cookie('error') || null
}

const setError = (error) => {
  cookie('error', error)
}

export { getError, setError }
