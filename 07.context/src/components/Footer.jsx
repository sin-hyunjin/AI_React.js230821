import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)

  return (
    <div
      className="footer"
      style={{ backgroundColor: isDark ? 'black' : 'white' }}
    >
      <button className="button" onClick={() => setIsDark(!isDark)}>
        Dark Mode
      </button>
    </div>
  )
}

export default Footer
