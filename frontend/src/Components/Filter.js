import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchAllBootcamps from '../Redux/api'
import { setFilterBootcamp } from '../Redux/actions'
import Selector from './Selector'

const Filter = () => {
  const bootcampListName = useSelector(state => state.allBootcamps?.bootcampListName)
  const [showList, setShowList] = useState(['all'])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBootcamps())
  }, [dispatch]);

  useEffect(()=> {
    if(bootcampListName !== undefined) setShowList(()=> ['all', ...bootcampListName])
  }, [bootcampListName])

  const getFilter = event => {
   !event.target.value
      ? dispatch(setFilterBootcamp('all'))
      : dispatch(setFilterBootcamp(event.target.value))
  }

  return (
    <div className='Filter border rounded p-2 m-2'>
      <Selector lableName={'Bootcamp filter'} optionsList={showList} getValueFunction={getFilter}/>
    </div>
  )
}

export default Filter