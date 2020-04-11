import { all, takeLatest } from 'redux-saga/effects'
import { Types as Animation } from '../reducers/Animation'
import { Types as LoginRegister } from '../reducers/LoginRegister'
import { Types as User } from '../reducers/User'
import { Types as CameraControl } from '../reducers/CameraControl'
import { Types as Word } from '../reducers/Word'
import { Types as Modal } from '../reducers/Modal'
import { Types as Loading } from '../reducers/Loading'
import { Types as CreateGame } from '../reducers/CreateGame'
// Import action types

import { login, register } from './LoginRegister'
import { getWords } from './Word'

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginRegister.SIGN_IN_REQUEST, login),
    takeLatest(LoginRegister.SIGN_UP_REQUEST, register),
    takeLatest(Word.GET_WORDS_REQUEST, getWords),
  ])
}
