import React from 'react'
import { useState } from 'react'

// React

const Like = () => {
  // 클릭시 하트 채워지는 버튼
  const [heart, setHeart] = useState('🤍')
  const [count, setCount] = useState(0)

  const handleLike = () => {
    if (heart === '❤️') {
      setCount(0)
      setHeart('🤍')
    } else {
      setCount(1)
      setHeart('❤️')
    }

    console.log(heart)
  }
  return (
    <div>
      <span> {heart}</span> 좋아요 <span>{count}</span>개
      <button onClick={handleLike}>클릭</button>
    </div>
  )
}

export default Like
