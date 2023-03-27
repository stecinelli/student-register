import React from 'react'

const Input = ({lableName, getValueFunction, buttonFunction}) => {
  return (
    <span>
      <label htmlFor={lableName}>{lableName}: </label>
        <input
          type='text'
          name={lableName}
          placeholder={'name'}
          className={`${lableName}Input`}
          onKeyDown={e => {
            if (e.key.toLowerCase() === 'enter') {
              e.preventDefault();
              buttonFunction();
            }
          }}
          onChange={getValueFunction} />
    </span>
  )
}

export default Input