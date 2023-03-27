import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchAllBootcamps, { postBootcampInfo } from '../Redux/api'
import Button from './Button'
import Selector from './Selector'
import Input from './Input'

const Form = () => {
  const bootcampListName = useSelector(state => state.allBootcamps?.bootcampListName)
  const [newDeveloper, setNewDeveloper] = useState({})
  const [isNewDeveloperValidate, setIsNewDeveloperValidate] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBootcamps())
  }, [dispatch]);

  const getFirstName = event => {
    setNewDeveloper({ ...newDeveloper, firstName: event.target.value })
  }

  const getLastName = event => {
    setNewDeveloper({ ...newDeveloper, lastName: event.target.value })
  }

  const getBootcamp = event => {
    setNewDeveloper({ ...newDeveloper, bootcamp: event.target.value })
  }

  const createNewDeveloper = () => {
    if (!newDeveloper.firstName || newDeveloper.firstName === '') {
      setIsNewDeveloperValidate(true)
      return
    }
    if (!newDeveloper.lastName || newDeveloper.lastName === '') {
      setIsNewDeveloperValidate(true)
      return
    }

    const firstName = newDeveloper.firstName.charAt(0).toUpperCase() + newDeveloper.firstName.slice(1)
    const lastName = newDeveloper.lastName.charAt(0).toUpperCase() + newDeveloper.lastName.slice(1)
    const devName = JSON.stringify({ name: firstName + ' ' + lastName })

    newDeveloper.bootcamp = newDeveloper.bootcamp && newDeveloper.bootcamp !== ''
      ? newDeveloper.bootcamp
      : bootcampListName[0]

    dispatch(postBootcampInfo(newDeveloper.bootcamp, devName))

    setIsNewDeveloperValidate(false)
  }

  return (
    <div className='Form d-flex flex-column p-2 border rounded m-2'>
      <p className='display-6 border-bottom'>Add new developer</p>
      <form className='form-addDeveloper'>
        <div className='d-flex flex-row justify-content-around p-2 m-2'>
          <Input lableName={'First Name'} getValueFunction={getFirstName} buttonFunction={createNewDeveloper} />
          <Input lableName={'Last Name'} getValueFunction={getLastName} buttonFunction={createNewDeveloper} />
          <Selector lableName={'Bootcamp'} optionsList={bootcampListName} getValueFunction={getBootcamp} />
        </div>

        <Button buttonText={'Add developer'} buttonFunction={createNewDeveloper} />

        {isNewDeveloperValidate && (
          <p className='errorMessage'>Type a first and last name before clicking on "Add Developer"</p>
        )}

      </form>
    </div>
  )
}

export default Form