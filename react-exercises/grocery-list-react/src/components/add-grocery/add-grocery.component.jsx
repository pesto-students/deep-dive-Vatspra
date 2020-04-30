import React from 'react';
import './add-grocery.style.css'
export const AddGroceryForm = ({handleSubmit, handleChange}) => {
  return (
    <div>
       <form onSubmit={handleSubmit}>
    
          <input type="text"  placeholder="Enter Item name" onChange={handleChange} />
  
          <input type="submit" value="Add Item"/>
        </form>
    </div>
  )
}
