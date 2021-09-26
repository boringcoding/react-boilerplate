import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { TodoItem } from './TodoItem'
import { AddTodoForm } from './AddTodoForm'

export const TodoList = () => {
  const todo = useTypedSelector((state) => state.todoReducer)
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl uppercase text-center mb-5">Todo List</h1>
      {todo.items.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
      <AddTodoForm />
    </div>
  )
}
