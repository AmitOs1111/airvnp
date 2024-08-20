import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'stayDB'
const BASE_URL = 'api/stay/'

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
}

function query(filterBy) {
  // return httpService.query(BASE_URL, filterBy)
  return storageService.query(STORAGE_KEY, filterBy)
}
function getById(stayId) {
  // return httpService.get(BASE_URL + stayId)
  return storageService.get(STORAGE_KEY, stayId)
}
function remove(stayId) {
  // return Promise.reject('Not now!');
  // return httpService.delete(BASE_URL, stayId)
  return storageService.remove(STORAGE_KEY, stayId)
}
function save(stay) {
  if (stay._id) {
    // return httpService.put(BASE_URL, stay)
    return storageService.put(STORAGE_KEY, stay)
  } else {
    // When switching to backend - remove the next line!
    // todo.creator = userService.getLoggedinUser()
    // return httpService.post(BASE_URL, stay)
    return storageService.post(STORAGE_KEY, stay)
  }
}
function getEmptyFilter() {
  return {
    place: '',
    dateReservation: '',
    guest: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
  }
}
