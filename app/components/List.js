import React from 'react';

const List = (props) => (
  <ul>
    {props.items.map((item, i) => {
     return <li key={i}><span><i onClick={props.onClick} value={item} className="fa fa-trash"></i></span>{item}</li>
    })}
  </ul>
)



export default List;