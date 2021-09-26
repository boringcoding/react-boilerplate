import { TodoAction, TodoActionEnum, TodoState } from './types'
import { ITodo } from '../../../models/ITodo'

const initialState: TodoState = {
  items: [],
}

export const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionEnum.ADD_TODO: {
      const newTodo: ITodo = {
        id: Math.random(),
        title: action.payload.title,
        isDone: false,
      }
      return { ...state, items: [...state.items, newTodo] }
    }
    case TodoActionEnum.DELETE_TODO: {
      return { ...state, items: [...state.items.filter((item) => item.id !== action.payload)] }
    }
    case TodoActionEnum.UPDATE_TODO: {
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === action.payload.id) {
              return action.payload
            } else {
              return item
            }
          }),
        ],
      }
    }
    default: {
      return state
    }
  }
}
