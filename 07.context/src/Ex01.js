import React, { useState } from 'react'
import ColorList from './components/ColorList'
import ColorResult from './components/ColorResult'
import { ColorContext } from './context/ColorContext'

const Ex01 = () => {
  const [color, setColor] = useState(null)

  console.log(color)
  return (
    
    <ColorContext.Provider value={{color, setColor}}>
      <div id="color-main">
        <ColorList />
        <hr></hr>
        <ColorResult />
        </div>
    </ColorContext.Provider>
    
  )
}

export default Ex01
