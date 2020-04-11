import { call, put } from 'redux-saga/effects'
import { Actions as LoginRegisterActions } from '../reducers/LoginRegister'
import { Actions as LoadingActions } from '../reducers/Loading'
import { Actions as UserActions } from '../reducers/User'
import { navigate } from '../../utils/navigation'
import { storage } from '../../utils'
import axios from 'axios'
import API from '../../utils/API'

export function* login({ payload: { email, password } }) {
  try {
    yield put(LoadingActions.setIsLoading(true))
    let { data } = yield call(API.post, '/users/sign_in.json', {
      user: {
        email,
        password,
      },
    })
    yield storage.storeAsyncToken(data.authentication_token)
    yield put(UserActions.setUser(data))
    yield put(LoadingActions.setIsLoading(false))
    navigate('App')
  } catch (err) {
    console.log('Error no login', err)
    yield put(LoadingActions.setIsLoading(false))
  }
}

export function* register({ payload: { name, email, password } }) {
  try {
    yield put(LoadingActions.setIsLoading(true))
    let { data } = yield call(API.post, '/users.json', {
      user: {
        name,
        email,
        password,
      },
    })
    yield put(UserActions.setUser(data))
    yield put(LoadingActions.setIsLoading(false))
  } catch (err) {
    console.log('Error no cadastro', err.response)
    yield put(LoadingActions.setIsLoading(false))
  }
}
