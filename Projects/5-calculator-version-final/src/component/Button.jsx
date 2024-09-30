import styles from "./Button.module.css"
function Button({content, handleOnClick}){
  return(
       <button className={styles.btn} onClick={()=>handleOnClick(content)}>{content}</button>
  );
}

export default Button