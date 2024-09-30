import { useState } from "react";


function App() {
 //If we have the data then we don't need to render repeatedly the ui elements if we are using the map method to render the multiple elements

  let arr = ["Dal","milk","ghee","fruits","roti"]
  // let arr = [];
  
  return (
    <>
    <h1>Healthy foods</h1>
    {/* By using ternary operator:- providing conditional Rendering*/}
    {/* {arr.length == 0? <h1>I am still hungry</h1>:null} */}
     {/* By using logical operator:- providing conditional Rendering*/}
    {arr.length == 0 &&  <h1>I am still hungry</h1>}
      <ul className="list-group">
        {arr.map((item) => (
           <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
