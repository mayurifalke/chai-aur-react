import { useContext } from "react";
import Item from "./Item";
import { TododataContext } from "../../store/todo-items-context";

export default function TodoItems({handleClickDelete}){
   const obj = useContext(TododataContext)
  return (
    <>
     {obj.tododata.map((item)=>(<Item item = {item} handleClickDelete = {obj.handleClickDelete} 
       key={item.itemName}/>))}
     </>
  )
}