import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  /*const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*+=~"
    
    for (let index = 1; index <=length; index++){
      let char = Math.floor(Math.random()*str.length+1)
1     pass = str.charAt(char)
    }


  },[length,numberAllowed,charAllowed,setPassword])*/

//=============useRef Hook================== 
const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*+=~"
    
    for (let i = 0; i < length; i++) {  // Use length instead of array.length
      let char = Math.floor(Math.random() * str.length)  // Correct the random index calculation
      pass += str.charAt(char)  // Append the character to the password
    }
    
    setPassword(pass)  // Set the generated password
  }, [length, numberAllowed, charAllowed,setPassword])


const copyPasswordToClipboard = useCallback(()=> {
  //Select will work perfectly without this line but select effect will not show so to show some effect this have used
  passwordRef.current?.select()

  //To set a range for select
  passwordRef.current?.setSelectionRange(0,8)
  
  window.navigator.clipboard.writeText(password)
}, [password])


useEffect(()=>{
  passwordGenerator()
},[length, numberAllowed,charAllowed,passwordGenerator])

  
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
         <button
         onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
       
    </div>
       <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
                 min={8}
                 max={100}
                 value={length}
                 className='cursor-pointer '
                 onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
                 defaultChecked= {numberAllowed}
                 id='numberInput'
                 onChange={()=>{setNumberAllowed((prev)=> !prev); 
                 }}
            />
            <label htmlFor='numberInput'>Numbers</label>

          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    
       </div>
    </div>
    </>
  )
}

export default App
