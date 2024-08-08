//2. creating provider for providing the context
import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){
  //initializing the state variable and set it to null
    const [user,setUser] = useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
          {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider