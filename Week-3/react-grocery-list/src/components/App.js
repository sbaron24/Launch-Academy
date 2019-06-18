import React from 'react';
import GroceryList from './GroceryList'

const App = props => {
  return(
    <div>
    <h1> Grocery List </h1>
      <GroceryList
        groceries = {props.data}
      />
    </div>
  );
};

export default App;
