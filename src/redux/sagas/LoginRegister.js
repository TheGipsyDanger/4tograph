import { call, put } from 'redux-saga/effects'
import { Actions as LoginRegisterActions } from '../reducers/LoginRegister'
import { navigate } from '../../utils/navigation'
import axios from 'axios'
import API from '../../utils/API'

export function* login({ payload: { email, password } }) {
  try {
    let data = yield call(API.post, '/sessions', {
      email,
      password
    })
    yield put(LoginRegisterActions.signIn(data))
  } catch (err) {
    console.log({ err })
  }
}
