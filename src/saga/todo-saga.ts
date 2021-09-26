import { put, takeEvery, delay } from 'redux-saga/effects'
import { TodoActionCreators } from '../store/reducers/todo/action-creators'
import { ITodo } from '../models/ITodo'
import { TodoActionEnum } from '../store/reducers/todo/types'

function* addTodoWorker({ payload: todo }: { payload: ITodo; type: TodoActionEnum }) {
  yield delay(1000)
  yield put(TodoActionCreators.addTodo(todo))
}

export function* todoWatcher() {
  yield takeEvery(TodoActionEnum.ADD_TODO_REQUEST, addTodoWorker)
}
