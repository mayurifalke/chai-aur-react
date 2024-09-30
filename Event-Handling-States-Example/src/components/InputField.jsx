//this child inputfield component is just by rendering the input field and taking the bheviour of input box from parent
import styles from "./InputField.module.css"

function InputField({handleonKeydownEvent}){
 
  return(
    //onChange event gets occured when the value of input box gets changed
    //onKeyDown event gets occured when any key is pressed
    <input type="text" placeholder="Enter the Food Item" className={styles.field} 
     onKeyDown={handleonKeydownEvent}/>
  );
}

export default InputField;