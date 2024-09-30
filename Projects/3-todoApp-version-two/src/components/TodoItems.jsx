import Item from "./Item";

export default function TodoItems({data, handleClickDelete}){
 
  return (
    <>
     {data.map((item)=>(<Item item = {item} handleClickDelete = {handleClickDelete} 
       key={item.itemName}/>))}
     </>
  )
}