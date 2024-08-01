import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter, mysetcounter] = useState(15);


  function addValue() {
    if(counter < 20){
   //counter = counter + 1;
  /*  mysetcounter(counter + 1)   //it is a function which will return by react hooks, here it is requiring new value of counter
      //Interview question always ask :- in this case useState runs the code in bunch of code when the same type of code is executing  in this case it executed code at once 
      mysetcounter(counter + 1)
      mysetcounter(counter + 1)
      mysetcounter(counter + 1)*/

      mysetcounter(prevCounter => counter+1);
      mysetcounter(prevCounter => prevCounter+1);
      mysetcounter(prevCounter => prevCounter+1);
    }
  }

  function decreaseValue(){
    if(counter >0){
    counter = counter - 1;
    mysetcounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button> <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
