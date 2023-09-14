import React, { useState } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { ThemeContext } from '../context/ThemeContext'

const Page = () => {
  const [isDark, setIsDark] = useState(false)
  const [user, setUser] = useState(
    '형탄소년단 : 힌•형국•형이홉•휘•휴가•형균몬스터•형민 '
  )
  console.log('‘다크모드상태:’', isDark)
  // {isDark==false?bgcolor='white':bgcolor='balck'}

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, user }}>
      <div
        className="page"
        style={{
          backgroundColor: isDark ? 'black' : 'white',
          color: isDark ? 'white' : 'black',
        }}
      >
        <Header user={user} />
        <Content user={user} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default Page
