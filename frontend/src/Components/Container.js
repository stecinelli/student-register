import React from 'react'
import Filter from './Filter'
import Form from './Form'
import Gallery from './Gallery'

const Container = () => {
  return (
    <div className='Container d-flex flex-column p-2'>
      <Form/>
      <Filter/>
      <Gallery/>
    </div>
  )
}

export default Container