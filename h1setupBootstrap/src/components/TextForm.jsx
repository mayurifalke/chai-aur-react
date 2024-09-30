import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter the text")
   // text = "change text";  //wrong way to change state

   const handleUpText = function(){
    //setText("new text")
    console.log(text.toUpperCase())
    setText(text.toUpperCase())
   }

   const handleLowText = function(){
    console.log(text.toUpperCase())
    setText(text.toLowerCase())
   }
   const clearText = ()=>{
    setText(" ")
   }
   const handleCopyText = ()=>{
     const textarea = document.getElementById("textArea")
     textarea.select()
     navigator.clipboard.writeText(textarea.value)
   }
   //after occuring some change in textarea this method will get called and whatever the new text entered by user again it will get set
   const handleChange = (event)=>{
            setText(event.target.value)
   }
    return (
        <>
        <div className="mb-3 "  style={{color:props.mode === 'light'?'black':'white'}} >
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="textArea" style={{background:props.mode === 'light'?'white':'grey',color:props.mode === 'light'?'black':'white'}} 
                     rows="8" value={text} onChange={handleChange}></textarea>
            <button className='btn btn-primary mt-3 mx-2' onClick={handleUpText}>Convert into Uppercase</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={handleLowText}>Convert into Lowercase</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={clearText}>Clear Text</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
          <h2>your text summary</h2>
          <p>{text.split(" ").length} words {text.length} length</p>
          <p>{0.008 * text.split(" ").length}</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>  

        
        </>
    )
}
