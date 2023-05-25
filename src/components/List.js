import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
 
  return(
    // code here
    <ul id="list" >
     {listx.map((number)=>{
      return (
        <ListItems  
                  valuex={number}/>
      )

     })}
     {/* <ListItems  className={listx} /> */}
      </ul>
    
    
  )
}

export default List;