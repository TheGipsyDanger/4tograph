import { all, takeLatest } from 'redux-saga/effects'
import { Types as Animation } from '../reducers/Animation'
import { Types as LoginRegister } from '../reducers/LoginRegister'
// Import action types

import { login } from './LoginRegister'

export default function* rootSaga() {
  return yield all([takeLatest(LoginRegister.SING_IN_REQUEST, login)])
}
