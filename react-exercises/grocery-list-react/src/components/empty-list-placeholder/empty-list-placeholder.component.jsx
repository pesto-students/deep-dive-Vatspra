import React from 'react';
import './empty-list.style.css';

export const EmptyPlaceHolder = (props) => {
  return (
    <div className="text-center">
      {props.msg}
    </div>
  )
}
