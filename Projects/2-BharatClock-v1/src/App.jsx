import { useState } from 'react'
import Item1 from './components/item1'
import Item2 from './components/item2'
import './App.css'

function App() {

  return (
    <center className='content'>
      <h1>Bharat Clock</h1>
      <Item1/>
      <Item2 />
    </center>
  )
}

export default App
