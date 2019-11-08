import { call, put } from 'redux-saga/effects'
import { Actions as LoginRegisterActions } from '../reducers/LoginRegister'
import { Actions as UserActions } from '../reducers/User'
import { navigate } from '../../utils/navigation'
import axios from 'axios'
import API from '../../utils/API'

export function* login({ payload: { email, password } }) {
  try {
    let resp = yield call(API.post, '/sessions', {
      email,
      password
    })
    yield put(UserActions.setUser(resp.data))
  } catch (err) {
    console.log({ err })
  }
}

export function* register({ payload: { username, email, password } }) {
  try {
    let resp = yield call(API.post, '/users', {
      username,
      email,
      password
    })
    yield put(UserActions.setUser(resp.data))
  } catch (err) {
    console.log({ err })
  }
}
