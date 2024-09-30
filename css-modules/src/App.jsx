import { useState } from "react";
import "./App.css";
import ListGroup from "./component/ListGroup";

function App() {
  let foodItems = ["Dal","Milk","Ghee","Roti"]
  return (
    <>
      <h1 className="listheading">Healthy Food Items</h1>
      <ListGroup foodItems={foodItems}/>
    </>
  );
}

export default App;
