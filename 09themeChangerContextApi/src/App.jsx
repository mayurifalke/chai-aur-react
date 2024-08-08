
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {

  const [themeMode,setThemeMode] = useState("light")

  //sending the data to the context api
 const lightTheme = ()=>{
      setThemeMode("dark")
  }
   const darkTheme = ()=>{
    setThemeMode("light")
  }

  //actual theme change
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    //wrapping the components into provider to get access of context data/values
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
  )
}

export default App
