import logo from './logo.svg'
import './App.css'

/*
  Shift + alt + f : 코드정렬단축키

  JSX문법
   - HTML과 JS를 하나의 파일에 작성할 수 있는 문법

  JSX문법의 특징 
   1. 반드시 하나의 부모요소가 있어야 한다!
   + 꼭 <div> 가 아니어도 된다!

   2. 표현식 사용
   단, if문 사용할 수 없다.

      2-1. 조건식이 하나 일ㄷ 때 - %%연산자 활용 
      2-2. 조건식이 두개 일 때 - 삼항영산자 활용
      2-3. 조건식이 세개일 떄 - return문 위에 조건식을 만든 후 결고값만 {}에 넣어준다.

    3. 기존 HTML문법과 다른 점 

      3-1. class속성 -> classname 속성 
      3-2. HTML문법을 사용할 떄 반드시 소문자로 작성 
          - 대문자로 정의하는 것은 '컴포넌트' 로 인식
      3-3. HTML문법 내 내용이 없어도 끝태그는 반드시 작성 
      3-4. onclick속성 -> onClick 속성 
 
    4. 스타일 적용
      4-1. css파일 내 스타일 정의 
          - import로 css파일 경로 설정 

      4-2. 객체형태로 정의 
          - HTML문법 내 style 속성 정의
          - style속성 내 객체형태의 스타일 정의 ( {key:value} )


*/

function App() {
  let msg = 'Hello React!'
  let isLogin = false
  let name = '임승환'
  let text = ''

  if (name === '선영표') {
    text = 'Front-end'
  } else if (name === '임승환') {
    text = 'Back-end'
  } else {
    text = 'DB'
  }

  // 두 단어로 이루어진 스타일을 정의할 때 마지막 단어의 첫번째 문자를 '대문자'로 작성
  const styled_1 = {
    color: 'green',
    backgroundColor: 'black',
  }

  return (
    <div className="container">
      <div className="item" style={styled_1}>
        Hello React!
      </div>
      <div className="App" style={{ color: 'blue', fontSize: '30px' }}>
        Hello React!
      </div>
      <div>{msg}</div>
      {/* 조건부 렌더링 (조건식이 하나일 때 ) */}
      {isLogin && '환영합니다~!'}

      {/* 조건식이 두개일떄 */}
      {name === '임승환' ? <p>환영합니다!</p> : <p>이용할 수 없습니다.</p>}

      {/* 조건이 3개 일 때 - 조건식을 만든 후 결과만 출력*/}
      {text}

      <p>
        <button onClick={() => alert('마우스클릭실행!')}>클릭</button>
      </p>
    </div>
  )
}

export default App
