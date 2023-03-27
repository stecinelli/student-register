import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchAllBootcamps from '../Redux/api'


const Cardsection = ({ bootcamp, section }) => {
  const allBootcamps = useSelector(state => state.allBootcamps?.allBootcamps)
  const [cardSection, setCardSection] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBootcamps())
  }, [dispatch]);

  useEffect(() => {
    if (allBootcamps !== undefined) {
      const newCardSection = allBootcamps.filter(bootcampInfo => bootcampInfo.bootcamp === bootcamp)

      section === 'Instructors'
        ? setCardSection(newCardSection[0].instructors)
        : setCardSection(newCardSection[0].developers)
    }
  }, [allBootcamps, bootcamp, section])


  return (
    <div className='Cardsection'>
      <p><strong>{section}</strong></p>
      <ul className='list-unstyled'>
        {cardSection !== null && cardSection !== undefined && cardSection.map((personInfo, index) =>
          <li key={personInfo.name + index}>{personInfo.name}</li>
        )}
      </ul>
    </div>
  )
}

export default Cardsection