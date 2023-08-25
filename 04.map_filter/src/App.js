import './App.css'

function App() {
  let array = [1, 2, 3, 4, 5]

  let new_array = array.map((item) => {
    console.log(item)
    return item + 1
  })
  let new_array2 = array.map((item) => item + 2)

  // map()과 HTML문법을 적용해보기
  /*
    - map()를 이용하여 HTML or 컴포넌트를 사용할 때
      반드시 Key속성을 정의해줘야 한다!

    - Key값은 반드시 고유해야한다.

    - React에서 이전 Dom트리와 비교할 떄 KEy를 이용해서 비교 
      key가 없으면 배열 내 추가/수정/삭제가 정상적으로 동작하지 않는다.

    - map()함수에서 Index를 활용할 수 있지만, 권장하지는 않는다.
      index는 순서가 불안정한 값이므로 비교시 문제가 발생된다.

  */

  let new_array3 = array.map((item, index) => (
    <span key={index}>{item}&nbsp;</span>
  ))

  return (
    <div className="App">
      <div className="App">기본배열 :{array} </div>
      <div className="App">새로운 배열 : {new_array}</div>
      <div className="App">새로운 배열2 : {new_array2}</div>
      <div className="App">새로운 배열3 : {new_array3}</div>
    </div>
  )
}

export default App
