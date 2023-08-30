import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div className="todo-container">
      <h1 className="todo-list">ToDo List</h1>
      {/* todo 추가하는 영역 */}
      <TodoInput></TodoInput>
      {/* 해야할 일 출력  */}
      <TodoList></TodoList>
      {/* 완료된 일 출력 */}
      <TodoList></TodoList>
    </div>
  )
}

export default TodoHome
