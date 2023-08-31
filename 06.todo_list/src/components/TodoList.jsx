import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ title, todos, setTodos }) => {
  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} : 개]</p>
      <ul className="todo-list-ul">
        {/* {todos.map(() => (
          <TodoItem />
        ))} */}
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            ></TodoItem>
          ))}
      </ul>
    </div>
  )
}

export default TodoList
