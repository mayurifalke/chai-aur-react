import style from "./Item.module.css"
import { MdDelete } from "react-icons/md";

export default function Item({ item,handleClickDelete }) {
  return (
    <div className={`row ${style['text']}`}>
      <div className="col-6">{item.itemName}</div>
      <div className="col-4">{item.date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger" 
         onClick={()=>{handleClickDelete(item.itemName)}}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
