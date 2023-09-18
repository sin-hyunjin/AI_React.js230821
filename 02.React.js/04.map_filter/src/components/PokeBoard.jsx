import React from 'react'
import { useState } from 'react'
import pokemonData from '../data/pokemon.json'
import PokeList from './PokeList'
import PokeNav from './PokeNav'

export const PokeBoard = () => {
  const [pokemons, setPokemons] = useState(pokemonData)

  const handleClick = (e) => {
    let menu = e.target.innerText
    console.log(`선택한메뉴 : ${menu}`)

    let filter = []
    if (menu === 'All') {
      setPokemons(pokemonData)
    } else {
      if (menu == '1~50') {
        filter = pokemonData.filter((item) => item.id >= 1 && item.id <= 50)
      } else if (menu === '51~100') {
        filter = pokemonData.filter((item) => item.id >= 51 && item.id <= 100)
      } else {
        filter = pokemonData.filter((item) => item.id >= 101 && item.id <= 151)
      }
      setPokemons(filter)
    }
  }

  return (
    <div>
      {/* 메뉴 영역  */}
      <PokeNav onClick={handleClick}></PokeNav>
      {/* 포켓몬 정보를 보여주는 영역  */}
      <PokeList pokemons={pokemons}></PokeList>
    </div>
  )
}
