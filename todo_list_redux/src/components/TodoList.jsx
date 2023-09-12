import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ title, todos, setTodos, checked }) => {
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
                  setTodos={setTodos}
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
