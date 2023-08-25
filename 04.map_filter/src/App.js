import './App.css'

function App() {
  let array = [1, 2, 3, 4, 5]

  let new_array = array.map((item) => {
    console.log(item)
    return item + 1
  })
  let new_array2 = array.map((item) => item + 2)

  // map()과 HTML문법을 적용해보기
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
