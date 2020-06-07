import axios from 'axios'
import { getAsyncToken } from './storage'
import { API_URL } from '../configs/constants'

const API = axios.create({
  baseURL: API_URL,
})

const setUserToken = token => {
  storeAsyncToken(token)
}

const getUserToken = async () => {
  try {
    return await getAsyncToken()
  } catch (error) {
    return error
  }
}

const checkUrl = url => {
  return url.endsWith('users') || url.endsWith('sessions')
}

API.defaults.params = {}
API.defaults.headers.get['Content-Type'] = 'application/json'
API.defaults.headers.get['Accept'] = '*/*'

API.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

API.interceptors.request.use(
  async config => {
    let token = await getAsyncToken()
    config.headers = {
      'X-User-Email': 'renan@email.com',
      'X-User-Token': 'Wk32MyzH1nycGh3Kkpvh',
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default API
