import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'


const Gallery = () => {
  const bootcampListName = useSelector(state => state.allBootcamps?.bootcampListName)
  const filterBootcamp = useSelector(state => state.filterBootcamp)

  return (
    <div className='Gallery d-flex flex-column p-2 border rounded m-2'>
      <p className='display-6 border-bottom'>Gallery</p>
      <div className='d-flex flex-row justify-content-around p-2 m-2'>
        {filterBootcamp !== 'all' && <Card bootcamp={filterBootcamp} />}
        {filterBootcamp === 'all' && bootcampListName && bootcampListName.map((bootcamp, index) =>
          <Card bootcamp={bootcamp} key={index + bootcamp} />
        )}
      </div>

    </div>
  )
}

export default Gallery