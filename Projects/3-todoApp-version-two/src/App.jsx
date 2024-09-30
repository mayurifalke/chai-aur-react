import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoHeading from './components/TodoHeading'
import TodoMain from './components/TodoMain'
import TodoItems from './components/TodoItems'
import { useState } from 'react'
import WelcomeMsg from './components/WelcomeMsg'

function App() {
   //array of objects
   let [data,setData] = useState([{itemName:"Butter Milk", date:"13/04/23"},
               {itemName:"Go to College", date:"13/04/23"},
               {itemName:"Headphones", date:"1/04/24"}])

  function handleOnClick(inputText, inputDate){
     let newItems = [...data,{itemName:inputText, date:inputDate}]
     setData(newItems)
    
  }

  function handleClickDelete(itemName){
    //filter method of array add the value into original array according to condition , if the condition is true it adds the element into array otherwise doesn't add. It does not change the original array
    let newData = data.filter(item => itemName != item.itemName)
    setData(newData)
  }
  return (
    <center className='container'>
      <TodoHeading/>
      <TodoMain handleOnClick={handleOnClick}/>
      {/* Conditional Rendering */}
      {data.length === 0 && <WelcomeMsg/>}
      <TodoItems data={data} handleClickDelete = {handleClickDelete}/>
    </center>
  )
}

export default App
