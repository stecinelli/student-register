import React from 'react'

const Button = ({buttonText, buttonFunction}) => {
  return (
    <button
    className='Button btn btn-light m-2'
    type='button'
    id='addDeveloperBtn'
    onClick={buttonFunction}>
      {buttonText}
    </button>
  )
}

export default Button