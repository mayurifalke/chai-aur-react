//whenever we want to add custom css then it is recommend to use css module like this
import styles from "./Item.module.css";

function Item({foodItem}){
  return(
    <li className={`${styles['litem']}  list-group-item`}>
      <span className={styles['litemText']}>{foodItem}</span></li>
  );
}

export default Item;