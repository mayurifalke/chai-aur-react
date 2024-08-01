import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [password, setPassword] = useState(" ");
  const [length, setLength] = useState(8);
  const [charachterAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const passwordRef = useRef(null)     //this hook is for to take refrence of an element

  //useCallback for optimiazation
  const generatePassword = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < length; i++) {
      let charnum = Math.floor(Math.random() * str.length + 1);
      if (numberAllowed) str += "0123456789";
      if (charachterAllowed) str += "!@#$%^&*()-_=+\|[]{}/?";
      pass += str.charAt(charnum);
    }
    setPassword(pass)   //for update the password

  }, [length, charachterAllowed, numberAllowed])

  //now we can't call this function directly beacuse react controls the rendering effect it decide which they have to render so  thus we are using useEffect hook here
 
  useEffect(() => {
    generatePassword();
  }, [length, charachterAllowed, numberAllowed])

  const copyOnClipboard = useCallback(()=>{
    passwordRef.current?.select();    //? if for optional beacuse passwordref can be 0 can be 0
    // password.current?.setSelectionRange(0, 9)
    window.navigator.clipboard.writeText(password);
  }
  ,[password])

  return (
    <>
      <div className='w-full max-w-md shadow-md rounded-lg px-4 text-orange-500 bg-gray-800 mx-20'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            ref={passwordRef}
            readOnly />
          <button  onClick={copyOnClipboard} 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)   //it is pointing to pervious value and according to perfrom action
              }}
            />
            <label>Numbers:</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charachterAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Charachters:</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
