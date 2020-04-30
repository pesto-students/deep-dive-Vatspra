import React from 'react';
import {Grocery} from '../grocery/grocery.component';
import './grocery-list.style.css';
import {EmptyPlaceHolder} from '../empty-list-placeholder/empty-list-placeholder.component';

export const GroceryList = (props) => {
  return <div>
    {
      props.groceries.length ?
          <div className ="btn">
              <button className="button button3" onClick = {props.onDelete}>Remove All </button>
          </div> : null
    }
    <div className="grocery-list"> 
      { props.groceries .length ? 
          props.groceries.map((grocery, index) =>
              <Grocery key ={index} grocery ={grocery}
               id={index} 
               updateColor ={props.updateColor}
               onDelete ={props.onDelete}/>
          ) : <EmptyPlaceHolder msg="No data found"/>
      }
    </div>
  </div>
}
