import { Email } from '@mui/icons-material'
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

const BASE_URL = 'auth/user/'

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getEmptyCredentials,
}

window.us = userService

function login(credentials) {
  // return httpService.put(BASE_URL + 'login/', credentials).then((user) => {
  //   console.log('user:', user)
  //   if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
  //   return user
  // })

  return storageService.query(STORAGE_KEY).then((users) => {
    const user = users.find(
      (user) =>
        user.fullname === credentials.fullname &&
        user.password === credentials.password
    )
    if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
  })
}

function signup(credentials) {
  // console.log('credentials from frontend user service', credentials)
  // return httpService.post(BASE_URL + 'signup/', credentials).then((user) => {
  //   console.log('user:', user)
  //   if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
  //   return user
  // })
  return storageService.post(STORAGE_KEY, credentials).then((user) => {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
  })
}

function logout() {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
  return Promise.resolve()
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function getEmptyCredentials() {
  return { mail: '', password: '', fullname: '' }
}

// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja', balance: 10000})
// userService.login({username: 'muki', password: 'muki1'})
