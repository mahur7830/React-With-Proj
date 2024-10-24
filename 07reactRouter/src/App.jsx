import { useState } from 'react'
import './App.css'


//==========There is no need of this app.jsx file bcause in this projet w are using third party library react router dom
//if we want, we can delete this file 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Footer/>
    <Home/> 
    
    </>
  )
}

export default App
 
