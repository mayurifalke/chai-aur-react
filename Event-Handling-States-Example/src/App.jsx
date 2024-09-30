//here the parent component is responsible to perform all operations
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import ListItems from "./components/ListItems";
import InputField from "./components/InputField";

function App() {
  let [itemsArr,setItems] = useState(["milk","dal","ghee","fruits","badam"])

  //distructing of elements of array which is returned by useState hook
  //1st element of array = shows the current value of state
  //2nd elements is a function to change the state of variable
  let [textShow,setText] = useState("Text which is entered by user");

  
  function handleonKeydownEvent(event){
    console.log(event.key);
    if(event.key === "Enter"){
      let enteredItem = event.target.value;
      event.target.value = "";
      let newItems = [...itemsArr,enteredItem]
      setItems(newItems)
    }
    setText(event.target.value);
  }

  return (
    <>
    <h1>Healthy Items</h1>
    {/* passing functions via props */}
     <InputField handleonKeydownEvent={handleonKeydownEvent}/>
     <p className="para">{textShow}</p>
     <ListItems data = {itemsArr}/>
    </>
  );
}

export default App;
