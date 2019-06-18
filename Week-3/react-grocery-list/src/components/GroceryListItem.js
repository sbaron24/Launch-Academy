import React from 'react'

const GroceryListItem = (props) => {
  return (
    <li> {props.item}
    <button type='button' onClick={props.clickAction} > Delete </button>
    </li>
  )
}

export default GroceryListItem
