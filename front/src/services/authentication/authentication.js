import axios from 'axios'

const logout = () => {
  localStorage.clear()
}

const isLogged = () => {
  if (localStorage.getItem('token') == '' || localStorage.getItem('token') == null) {
    return false
  }
  return true
}

const setAuthorization = () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
    'token'
  )}`
}

export { logout, isLogged, setAuthorization }
