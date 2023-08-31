import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
const TodoItem = ({ todo, todos, setTodos }) => {
  const handleCheckChange = () => {
    let updateList = todos.map((item) => ({
      ...item,
      complete: item.id === todo.id ? !item.complete : item.complete,
    }))
    setTodos(updateList)
  }

  return (
    <li className="todo-item">
      <FaCheckCircle
        style={{ color: 'green' }}
        className="todo-item-checkbox"
        onClick={handleCheckChange}
      />
      <span className="todo-item-content">{todo.text}</span>
      <button className="todo-item-edit-btn">✏️</button>
      <button className="todo-item-delete-btn">🗑️</button>
    </li>
  )
}

export default TodoItem
