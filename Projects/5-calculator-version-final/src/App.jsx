import "bootstrap/dist/css/bootstrap.min.css"
import styles from './App.module.css'
import DisplayBox from "./component/displayBox"
import AllButtons from "./component/AllButtons"
import { useState } from "react"

function App() {

  let data = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  let [dispVal, setDispVal] = useState("")

  function handleOnClick(btntext){
    if(btntext === 'C'){
      setDispVal("")
    }
    else if(btntext === '='){
      //eval is mathematical function which evaluate the string which is passed as arguement, based on the operators are present in that string arguement
      setDispVal(eval(dispVal))
    }
    else{
     setDispVal(dispVal + btntext)
    }
     
  }
  return (
    <center>
      <div className={styles.content}>
        <h1>Calculator</h1>
        <DisplayBox displayVal = {dispVal}/>
        <AllButtons data = {data} handleOnClick={handleOnClick}/>
      </div>
    </center>
  )
}

export default App
