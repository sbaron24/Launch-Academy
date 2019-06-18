import React from 'react';
import GroceryListItem from './GroceryListItem';


const GroceryList = (props) => {

  let handleButtonClick = (event) => {
    alert('Button was clicked')
  }

  let groceryItems = props.groceries.map((item) => {
    return (
      <GroceryListItem
        item = {item.name}
        clickAction = {handleButtonClick}
      />
    )
  })

  return (
    <div>
      {groceryItems}
    </div>
  )
}

export default GroceryList
