const logout = () => {
  localStorage.clear()
}

const isLogged = () => {
  if (localStorage.getItem('token') == '' || localStorage.getItem('token') == null) {
    return false
  }
  return true
}

export { logout, isLogged }
