import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './components/Card'

function App() {
 let username = "";
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">Tailwind Props</h1>
      <Card username = "mayuri" btnText = "Click Me"/>
      <Card username= "chaiaurreact" />
    </>
  )
}

export default App
