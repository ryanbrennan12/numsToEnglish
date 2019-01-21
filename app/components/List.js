import React from 'react';

const List = (props) => (
  <ul>
    {props.items.map((item, i) => {
     return <li><span><i className="fa fa-trash" key={i}></i></span>{item}</li>
    })}
  </ul>
)



export default List;