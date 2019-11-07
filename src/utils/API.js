import axios from 'axios'
import { storeAsyncToken, getAsyncToken } from './token'
import { AsyncStorage } from 'react-native'
import { API_URL } from '../configs/constants'

const API = axios.create({
  baseURL: API_URL
})

const setUserToken = token => {
  storeAsyncToken(token)
}

const getUserToken = async () => {
  try {
    return await AsyncStorage.getItem('token')
  } catch (error) {
    return error
  }
}

const checkUrl = url => {
  return url.endsWith('login') || url.endsWith('sessions')
}

API.defaults.params = {}
API.defaults.headers.get['Content-Type'] = 'application/json'
API.defaults.headers.get['Accept'] = '*/*'

API.interceptors.response.use(
  response => {
    const { config, data } = response
    if (checkUrl(config.url)) {
      setUserToken(data.token.token)
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

API.interceptors.request.use(
  async config => {
    if (!checkUrl(config.url)) {
      const token = await getUserToken()
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default API
