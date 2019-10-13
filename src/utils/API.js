import axios from 'axios'
import { API_URL } from '../configs/constants'
import store from '../redux/store'

console.log({ store })

const API = axios.create({
  baseURL: API_URL
})

export default API
