import { all, call } from 'redux-saga/effects'
import { todoWatcher } from './todo-saga'

export function* rootWatcher() {
  yield all([call(todoWatcher)])
}
