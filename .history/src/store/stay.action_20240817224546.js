import { stayService } from '../services/stay.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { store } from './store.js'
import {
  SET_LOADING,
  SET_STAYS,
  REMOVE_STAY,
  ADD_STAY,
  UPDATE_STAY,
  SET_FILTER_BY,
} from './stay.reducer.js'

export function loadStays(filterBY) {
  // store.dispatch({ type: SET_LOADING, isLoading: true })
  return stayService
    .query(filterBY)
    .then((stays) => {
      // store.dispatch({ type: SET_LOADING, isLoading: false })
      store.dispatch({ type: SET_STAYS, stays })
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot load stays')
      throw err
    })
    .finally(() => {
      console.log('Done load stays')
      // store.dispatch({ type: SET_LOADING, isLoading: false })
    })
}

export function removeStay(stayId) {
  return stayService
    .remove(stayId)
    .then(() => {
      console.log('Deleted Succesfully!')
      store.dispatch({ type: REMOVE_STAY, stayId })
      showSuccessMsg('Stay removed')
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot remove stay')
      throw err
    })
}

export function addStay(stay) {
  // const stay = stayService.getEmptyCar()
  return stayService
    .save(stay)
    .then((savedStay) => {
      console.log('Added stay', savedStay)
      store.dispatch({ type: ADD_STAY, stay: savedStay })
      showSuccessMsg('stay added')
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot add stay')
      throw err
    })
}

export function updateStay(stay) {
  console.log('stay', stay)
  return stayService
    .save(stay)
    .then((savedStay) => {
      console.log('Updated stay:', savedStay)
      store.dispatch({ type: UPDATE_STAY, stay: savedStay })
      showSuccessMsg('stay updated')
      return Promise.resolve()
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot update stay')
      throw err
    })
}

export function setFilterBy(filter) {
  store.dispatch({ type: SET_FILTER_BY, filter })
  return new Promise.resolve()
}
