import React from 'react'

const Weather = ({ weather, day }) => {
  // const name = weather.main.temp

  // 객체? 속성: 객체에 정보가 null인지 판단하고 접근하는 문법
  console.log('Wearther컴포넌트 :', weather)
  console.log('지역', weather?.name)
  console.log('온도', weather?.main.temp)
  console.log('아이콘', weather?.weather[0].icon)
  console.log(day)
  return (
    <div>
      <h1>{day}</h1>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt="이미지없음"
        />
        <p>
          현재 {weather?.name}은(는) {weather?.main.temp}℃ 입니다.
        </p>
      </div>
    </div>
  )
}

export default Weather
