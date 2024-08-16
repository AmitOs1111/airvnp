import { dataService } from '../services/demo.data'

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

function query(entityType, filterBy = {}, delay = 600) {
  let entities = JSON.parse(localStorage.getItem(entityType)) || []

  if (!entities || entities.length === 0) {
    entities = dataService.getDataStays()
    _save(entityType, entities)
  }

  if (filterBy.type) {
    const regExp = new RegExp(filterBy.type, 'i')
    entities = entities.filter((stay) => regExp.test(stay.type))
  }
  // if (filterBy.amount) {
  //   entities = entities.filter(
  //     (stay) => stay.listPrice.amount >= filterBy.amount
  //   )
  // }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities)
    }, delay)
  })
}

function get(entityType, entityId) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId)
  )
}

function post(entityType, newEntity) {
  newEntity._id = _makeId()
  return query(entityType).then((entities) => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    const stayRemove = entities[idx]
    entities.splice(idx, 1)
    return Promise.resolve(stayRemove._id)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  console.log('entityType FROM SAVE!', entityType)
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
