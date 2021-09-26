import React, { FC } from 'react'
import { ITodo } from '../models/ITodo'
import { useActions } from '../hooks/useActions'

interface TodoItemProps {
  todo: ITodo
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, updateTodo } = useActions()
  return (
    <div className="border border-gray-500 rounded p-2 mb-2 shadow-lg">
      <h2 className="uppercase text-lg">{todo.title}</h2>
      <span
        className="block italic cursor-pointer"
        onClick={() => updateTodo({ ...todo, isDone: !todo.isDone })}
      >
        {todo.isDone ? 'Done' : 'In Progress'} (click to change status)
      </span>
      <button
        className="bg-red-500 px-5 py-1 text-white mt-2 rounded"
        onClick={() => deleteTodo(todo.id as number)}
      >
        Delete
      </button>
    </div>
  )
}
