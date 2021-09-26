import { ITodo } from '../../../models/ITodo'

export interface TodoState {
  items: ITodo[]
}

export enum TodoActionEnum {
  ADD_TODO = 'ADD_TODO',
  ADD_TODO_REQUEST = 'ADD_TODO_REQUEST',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
}

export interface AddTodoAction {
  type: TodoActionEnum.ADD_TODO
  payload: ITodo
}

export interface AddTodoRequestAction {
  type: TodoActionEnum.ADD_TODO_REQUEST
  payload: ITodo
}

export interface DeleteTodoAction {
  type: TodoActionEnum.DELETE_TODO
  payload: number
}

export interface UpdateTodoAction {
  type: TodoActionEnum.UPDATE_TODO
  payload: ITodo
}

export type TodoAction = AddTodoAction | AddTodoRequestAction | DeleteTodoAction | UpdateTodoAction
