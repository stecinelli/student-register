import React from 'react'

const Selector = ({lableName, optionsList, getValueFunction}) => {
  return (
    <div className='Selector'>
      <label htmlFor={lableName}>{lableName}: </label>
      <select name={lableName}
        onChange={getValueFunction}
        className={`select${lableName}`} >
        {optionsList && optionsList.map((option, index) =>
          <option
            key={option + index}
            value={option} >
            {option}
          </option>
        )}
      </select>
    </div>
  )
}

export default Selector