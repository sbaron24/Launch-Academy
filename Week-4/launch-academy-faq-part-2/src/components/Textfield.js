import React from 'react'

const TextField = (props) => {

  return(
    <label> {props.label}
      <input
        type='text'
        name={props.name}
        onChange={props.handleChange}
        value={props.content}
      />
    </label>
  )
}

export default TextField;
