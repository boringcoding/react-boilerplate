import React, { SyntheticEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'

export const AddTodoForm = () => {
  const [text, setText] = useState('')
  const { addTodoRequest } = useActions()

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    addTodoRequest({
      title: text,
    })
    setText('')
  }

  return (
    <div className="border border-gray-500 rounded p-2 mb-2 shadow-lg">
      <h3 className="uppercase text-lg">Add new todo</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm" htmlFor="todo-text">
            Text
          </label>
          <input
            className="border border-gray-500 rounded p-2 focus:border-green-500"
            id="todo-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-green-500 px-5 py-1 text-white mt-2 rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
