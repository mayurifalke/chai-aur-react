import style from "./Items.module.css"
import { useState } from "react";

//taking behaviour of button from parent by passing function as a props
function Items({foodItem,handleOnClickListItems}) {
  let [cname,setCname] = useState("list-group-item");
  function handleOnClick(){
       setCname("list-group-item active")
    }
    function handleOnClickRemove(){
      setCname("list-group-item")
   }

  return (
    <li className={cname}
      onClick={handleOnClickListItems}
      key={foodItem} id="list">

      {foodItem}
      <button type="button" className={`${style.btn1} btn btn-info`} 
         onClick = {handleOnClickRemove}>Remove</button>
      <button type="button" className={`${style.btn2} btn btn-info`} 
         onClick = {handleOnClick}>Buy</button>
      
    </li>
  );
}

export default Items;
