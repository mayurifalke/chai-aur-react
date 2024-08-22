import React, { useState } from 'react'
import Imagecontext from './imagecontext'

export default function ImageProvider({children}) {
    const [url,setUrl] = useState(null)
  return (
    <Imagecontext.Provider value = {{url,setUrl}}>
      {children}
    </Imagecontext.Provider>
  )
}
