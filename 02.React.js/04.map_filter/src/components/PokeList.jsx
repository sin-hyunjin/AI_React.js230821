import React from 'react'
import PokeCard from './PokeCard'

const PokeList = ({ pokemons }) => {
  const styleDiv = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    margin: '0 auto',
  }
  return (
    <div style={styleDiv}>
      {pokemons.map((item) => (
        <PokeCard pokemon={item}></PokeCard>
      ))}
    </div>
  )
}

export default PokeList
