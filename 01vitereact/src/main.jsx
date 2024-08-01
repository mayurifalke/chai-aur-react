import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Play(){
  return(
    <h1>I'm Playing</h1>
  )
}
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)
//we can't create any element in this way in react
/*const reactElement = {
  type: 'a',
  props:{
      href: 'https://google.com',
      target: '_blank'
  },

  children: 'Click me to visit google'
}*/

const myVariable = "mayuri";

//here is proper syntac of React using createElement method for create an element
const reactElement = React.createElement(
     'a',
     {href:'https://google.com',target:'_blank'},
     "Visit Google",
     myVariable
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
