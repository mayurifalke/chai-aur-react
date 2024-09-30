import Item from "./Item";

function ListGroup({foodItems}){

  return(
    <ul className="litem list-group">
        {foodItems.map((item)=>( <Item foodItem={item}/>))}
    </ul>
  );
}

export default ListGroup;