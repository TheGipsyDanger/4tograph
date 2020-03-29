import { AsyncStorage } from 'react-native'

const storeAsyncToken = async token => {
  return AsyncStorage.setItem('token', token)
}

const getAsyncToken = async () => {
  return AsyncStorage.getItem('token')
}

const removeAsyncToken = async () => {
  return AsyncStorage.removeItem('token')
}

const storeAsyncShowTutorial = async () => {
  return AsyncStorage.setItem('showTutorial', false)
}

const getAsyncShowTutorial = async () => {
  return AsyncStorage.getItem('showTutorial')
}

export {
  storeAsyncToken,
  getAsyncToken,
  removeAsyncToken,
  storeAsyncShowTutorial,
  getAsyncShowTutorial,
}
