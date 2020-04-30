import React from 'react';
import './grocery.style.css';

import {MdDelete} from 'react-icons/md';

export const Grocery = (props) => {
  return (
    <div className={`grocery ${props.grocery.color}`} onClick = {props.updateColor.bind(this, props.grocery)}>
      <img src={`https://source.unsplash.com/random?sig=${props.id}`} alt="Avatar" ></img>
      <div className="container">
          <span className="grocery-name">
             {props.grocery.name}
             {props.grocery.count > 1 ? <span> ({props.grocery.count}) </span> :  ''}
           </span>
      </div>
    </div>
  )
}

