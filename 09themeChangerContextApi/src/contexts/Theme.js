//second way of creating context
import React, { createContext, useContext }  from "react";

//when the context is created which values are allready have for this we are passing default object into it
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider;

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}