import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHeading from "./components/TodoHeading";
import TodoMain from "./components/TodoMain";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TododataContext } from "../store/todo-items-context";

function App() {
  //array of objects
  let [tododata, setData] = useState([
    { itemName: "Butter Milk", date: "13/04/23" },
    { itemName: "Go to College", date: "13/04/23" },
    { itemName: "Headphones", date: "1/04/24" },
  ]);

  function handleOnClick(inputText, inputDate) {
    //Updating state from previous state
    //it is creating the new value basis on currvalue
    //whenever the setData function is called it gives the updated value of data
    setData((currValue) => [
      ...currValue,
      { itemName: inputText, date: inputDate },
    ]);
  }

  function handleClickDelete(itemName) {
    let newData = tododata.filter((item) => itemName != item.itemName);
    setData(newData);
  }
  return (
    <TododataContext.Provider
      value={{
        tododata: tododata,
        handleOnClick: handleOnClick,
        handleClickDelete: handleClickDelete,
      }}
    >
      <center className="container">
        <TodoHeading />
        <TodoMain/>
        {/* Conditional Rendering */}
        <WelcomeMsg/>
        <TodoItems/>
      </center>
    </TododataContext.Provider>
  );
}

export default App;
