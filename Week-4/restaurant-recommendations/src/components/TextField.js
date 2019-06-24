import React from 'react'

const TextField = (props) => {
  
  return(
    <label>{props.label}
      <input
        type='text'
        name={props.name}
        onChange={props.handleTextFieldChange}
        value={props.content}
      />
    </label>
  )
}

export default TextField
