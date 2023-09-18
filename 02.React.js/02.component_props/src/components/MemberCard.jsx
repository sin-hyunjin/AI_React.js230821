import React from 'react'

const MemberCard = ({ group, name }) => {
  return (
    <div className="container">
      <div className="MemberCard">
        <h3>{group}</h3>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default MemberCard
