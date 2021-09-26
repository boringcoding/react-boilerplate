import { ITodo } from '../../../models/ITodo'
import {
  AddTodoAction,
  AddTodoRequestAction,
  DeleteTodoAction,
  TodoActionEnum,
  UpdateTodoAction,
} from './types'

export const TodoActionCreators = {
  addTodo: (payload: ITodo): AddTodoAction => ({
    type: TodoActionEnum.ADD_TODO,
    payload,
  }),
  addTodoRequest: (payload: ITodo): AddTodoRequestAction => ({
    type: TodoActionEnum.ADD_TODO_REQUEST,
    payload,
  }),
  deleteTodo: (payload: number): DeleteTodoAction => ({
    type: TodoActionEnum.DELETE_TODO,
    payload,
  }),
  updateTodo: (payload: ITodo): UpdateTodoAction => ({
    type: TodoActionEnum.UPDATE_TODO,
    payload,
  }),
}
