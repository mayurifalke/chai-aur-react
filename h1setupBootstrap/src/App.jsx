import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
 const [mode,setMode] = useState('light')
   
 const handleMode = ()=>{
  if(mode === 'light'){
   setMode('dark')
   document.body.style.backgroundColor = 'grey';
  }
  else{
   setMode('light')
   document.body.style.backgroundColor = 'white';
}
 }


  return (
   <>
    <Navbar title="TextUtils" mode = {mode} handleMode = {handleMode}/>
    {/* <Navbar title="Mayuri"/> */}
    <div className='container my-3'>
    <TextForm heading= "Enter the text to Analyze" mode = {mode}/>
    {/* <About/> */}
    </div>
   </>
  
  )
}

export default App
