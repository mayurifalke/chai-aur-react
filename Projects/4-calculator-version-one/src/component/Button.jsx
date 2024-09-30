import styles from "./Button.module.css"
function Button({content}){
  return(
       <button className={styles.btn}>{content}</button>
  );
}

export default Button