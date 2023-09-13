import React from 'react'
import { useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { TodoReducerActions } from '../redux/reducers/todoSlice'
const TodoItem = ({ todo }) => {
  // edited : 사용자가 수정버튼을 눌렀는지에 대한 상태
  // true: 수정 | false: 수정 X
  const [edited, setEdited] = useState(false)

  // 사용자가 입력한 텍스트를 저장하는 상태를 저장
  const [newText, setNewText] = useState(todo.text)

  // const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const handleCheckChange = () => {
    // 변경된 목록을 'setTodos'를 통해 업데이트
    // setTodos(updateList)
    dispatch(TodoReducerActions.checkChangeTodo({ id: todo.id }))
  }

  // 수정상태를 true로 변경
  const handleCheckClick = () => {
    setEdited(true)
  }
  // 사용자가 입력한 값을 newText에 저장
  // const handleEditText = (e) => {
  //   setNewText(e.target.value)
  //   console.log(newText)
  // }

  // 수정완료 기능 구현
  const handleSubmitClick = () => {
    // 변경된 목록을 'setTodos'를 통해 업데이트
    // setTodos(updateList)
    dispatch(TodoReducerActions.textChangeTodo({ id: todo.id, text: newText }))
    setEdited(false)
  }

  const handleDelete = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      console.log(`삭제할 todo의 id :`, id)
      // let updateList = todos.filter((item) => item.id !== id)
      // setTodos(updateList)
      dispatch(TodoReducerActions.deleteTodo({ id: todo.id }))
    }
  }

  return (
    <li className="todo-item">
      {todo.complete ? (
        // 할 일이 완료되었을 때 체크 아이콘 표시
        <FaCheckCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      ) : (
        // 할 일이 완료되지 않았을 때 빈 체크 아이콘 표시
        <FaRegCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={handleCheckChange}
        />
      )}
      {edited ? (
        // 수정 모드일 때 텍스트 입력 필드 표시
        <input
          type="text"
          className="todo-item-edit-input"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        // 수정 모드가 아닐 때 할 일 내용을 표시
        <span
          className={`todo-item-content
      ${todo.complete ? 'todo-item-content-checked' : ''}`}
        >
          {todo.text}
        </span>
      )}

      {todo.complete ? null : edited ? (
        // 할 일이 완료되지 않았고 수정 모드일 때 완료 버튼 표시
        <button className="todo-item-submit-btn" onClick={handleSubmitClick}>
          ✅
        </button>
      ) : (
        // 할 일이 완료되지 않았고 수정 모드가 아닐 때 편집 버튼 표시
        <button className="todo-item-edit-btn" onClick={handleCheckClick}>
          ✏️
        </button>
      )}

      {/* 할 일 삭제 버튼 표시 */}

      <button
        className="todo-item-delete-btn"
        onClick={() => handleDelete(todo.id)}
      >
        🗑️
      </button>
    </li>
  )
}

export default TodoItem
