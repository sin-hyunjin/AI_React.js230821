import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import KitchenSinkExample from './components/KitchenSinkExample'
// import coffeeMenu from './data/coffee_menu.json'

/*
  실습문제) 커피메뉴를 출력하는 웹 페이지 구현
  STEP1 ) 'coffee_menus.json' 파일을 Import gksek.
  STEP2 ) 커피정보를 HTML 문법과 결합하여 화면ㅇ 출력한다.

  결과물) Card형태로 메뉴이름과 금액만 출력할 것 
  * react bootstrap 사용할 경우
 1. npm install react-bootstrap bootstrap 설치
 2. Ex02.js 에 css파일 Import 하기
 3. 원하는 컴포넌트가 있다면 Import 해서 사용하기 
  ex) 버튼을 사용할 경우 -> import {Button} from 'react-bootstrab'
*/
const Ex02 = () => {
  return (
    <div>
      <KitchenSinkExample></KitchenSinkExample>
    </div>
  )
}

export default Ex02
