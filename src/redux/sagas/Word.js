import { call, put } from 'redux-saga/effects'
import { Actions as WordActions } from '../reducers/Word'
import { Actions as LoadingActions } from '../reducers/Loading'
import { navigate } from '../../utils/navigation'
import { API } from '../../utils'

export function* getWords() {
  try {
    yield put(LoadingActions.setIsLoading(true))
    let { data } = yield call(API.get, '/api/v1/raffle_words.json')
    yield put(WordActions.setWords(data))
    yield put(LoadingActions.setIsLoading(false))
  } catch (err) {
    yield put(LoadingActions.setIsLoading(false))
    console.log('Error on get words', err)
  }
}
