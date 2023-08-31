import React from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'

const TodoItem = ({ todo, todos, setTodos, checked }) => {
  const handleCheckChange = () => {
    let updateList = todos.map((item) => ({
      ...item,
      complete: item.id === todo.id ? !item.complete : item.complete,
    }))
    setTodos(updateList)
  }

  const handleCheckClick = () => {
    console.log(todo.complete)
  }
  return (
    <li className="todo-item">
      {todo.complete ? (
        <FaCheckCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      ) : (
        <FaRegCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      )}

      <span
        className={`todo-item-content
        ${todo.complete ? 'todo-item-content-checked' : ''}`}
      >
        {todo.text}
      </span>
      {todo.complete ? null : (
        <button className="todo-item-edit-btn" onClick={handleCheckClick}>
          ✏️
        </button>
      )}
      <button className="todo-item-delete-btn">🗑️</button>
    </li>
  )
}

export default TodoItem
