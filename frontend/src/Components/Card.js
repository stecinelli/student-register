import React from 'react'
import Cardsection from './Cardsection'

const Card = ({bootcamp}) => {
  return (
    <div className='Card border rounded w-100 m-2'>
      <p className='lead'>{bootcamp.toUpperCase()}</p>
      <Cardsection bootcamp={bootcamp} section={'Instructors'}/>
      <Cardsection bootcamp={bootcamp} section={'Developers'}/>
    </div>
  )
}

export default Card