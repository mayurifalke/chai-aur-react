import { useContext } from "react";
import style from "./WelcomeMsg.module.css"
import { TododataContext } from "../../store/todo-items-context";
function WelcomeMsg(){
    //the value which are provided by Provider we can access it by using the context which we created
    const {tododata} = useContext(TododataContext)
  return(
    tododata.length === 0 && <p className={style.welcome}>Enjoy Your Day!</p>
  );
}

export default WelcomeMsg;