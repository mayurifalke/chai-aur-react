import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    //wrapping the app component with the provider
    <UserContextProvider>
      <h1>React bhai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
