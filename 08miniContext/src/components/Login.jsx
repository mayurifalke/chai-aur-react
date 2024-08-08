//file for sending data
import React,{ useContext, useState } from "react";
import UserContext from '../context/UserContext'


function Login(){
    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)   //useContext() is hook using it we can access state
    const handlingSubmit = (e)=>{
         //when form is submit it goes on some url thus to prevent it preventDefault is used
         e.preventDefault()
         setUser({username,password})
    }
  return(
    <div>
        <h2>Login</h2>
        <input value={username}
          placeholder="username"
          onChange={(e)=>setUsername(e.target.value)}
        >
        </input>
        <input value={password}
           placeholder="password"
           onChange={(e)=>setPassword(e.target.value)}
        >
        </input>
        <button onClick={handlingSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Login;