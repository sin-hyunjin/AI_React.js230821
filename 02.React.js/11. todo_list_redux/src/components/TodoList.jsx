import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = ({ title, checked }) => {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} : 0개]</p>
      <ul className="todo-list-ul">
        {/* {todos.map(() => (
          <TodoItem />
        ))} */}
        {todos &&
          todos.map((todo) => {
            if (todo.complete === checked) {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  checked={checked}
                ></TodoItem>
              )
            } else {
              return null
            }
          })}
      </ul>
    </div>
  )
}

export default TodoList
