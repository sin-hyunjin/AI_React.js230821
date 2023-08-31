import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoInput = ({ todos, setTodos }) => {
  let todoinput = useRef(null)

  const handleclickbtn = () => {
    let todo = todoinput.current.value // Input요소.value

    setTodos([...todos, { id: uuidv4(), text: todo, complete: false }])
    // console.log(todos)

    // 입력된 내용을 비우고 커서 생성하기
    todoinput.current.value = ''
    todoinput.current.focus()
  }

  return (
    <div className="todo-inputbox">
      <input
        type="text"
        className="todo-inputbox-input"
        placeholder="할 일을 입력해주세요~!"
        ref={todoinput}
      />
      <input
        type="button"
        className="todo-inputbox-add-btn"
        value="등록"
        onClick={handleclickbtn}
      />
    </div>
  )
}

export default TodoInput
