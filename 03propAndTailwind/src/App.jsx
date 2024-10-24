import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'


function App() {
  //const [count, setCount] = useState(0)
  //these values will pass to the card via props 
 let myObj = {
   username: "anil123",
   city:"kulla"
  }

  

  return (
    <>
    <h1 className='bg-green-400 text-black p4 rounded-xl mb-'>Tailwind Test</h1>
     <Cards username = "anil1232" city = "Bulandshahr"/>
       <Cards username="mahur123@"  city = "Hapur"/>

       </>
  )
}

export default App


