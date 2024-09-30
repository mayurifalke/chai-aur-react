import Items from "./Items";
import { useState } from "react";


function ListItems({data}) {
  
  return (
    <ul className="list-group">
       {data.map((item)=>(<Items foodItem={item} 
         handleOnClickListItems = {()=>console.log(`${item} is clicked`)}/>))}
    </ul>
  );
}

export default ListItems;
