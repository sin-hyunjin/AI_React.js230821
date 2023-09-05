import React, { useEffect, useState } from 'react'
import Weather from './components/Weather'
import axios from 'axios'
import SyncLoader from 'react-spinners/SyncLoader'
// npm install axios 설치

const Ex02 = () => {
  const [weather, setWeather] = useState()
  const [day, setDay] = useState('0000.00.00')
  const [isLoding, setIsLoding] = useState(false)

  const API_KEY = process.env.REACT_APP_WEATHER_APY_KEY

  // 현재 위치(위,경도)를 가져오는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      // 객체형태의 위도,경도 가져오기
      let lat = position.coords.latitude
      let lng = position.coords.longitude
      console.log(`위도 : ${lat} 경도 : ${lng}`)
      getCurrentWeatherLocation(lat, lng)
    })
  }

  const getCurrentWeatherLocation = async (lat, lng) => {
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric `

    setIsLoding(true)

    let response = await axios.get(weather_url)
    console.log('현재 날씨정보 : ', response)

    setWeather(response.data)
    setIsLoding(false)
  }

  useEffect(() => {
    // 현재 날짜 정보 가져오기
    let today = new Date()
    let year = today.getFullYear()
    let month = String(today.getMonth() + 1).padStart(2, '0')
    let date = String(today.getDate()).padStart(2, '0')

    // console.log(year, month, date)
    // 날짜 정보를 state에 저장
    setDay(`${year}.${month}.${date}`)

    // 현재 날씨 정보 요청
    getCurrentLocation()
  }, [])

  return (
    <div>
      {isLoding ? (
        <SyncLoader loading={isLoding}></SyncLoader>
      ) : (
        <Weather weather={weather} day={day}></Weather>
      )}
    </div>
  )
}

export default Ex02
