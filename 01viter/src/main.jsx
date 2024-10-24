import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function Myapp(){
  return(
    <div>
      <h1>hello My App</h1>
    </div>
  )
}

//this will not execute because it is custom which is created by us but while react render expect this according to their implimentaion because react has own 
//syntax which is followed by react to conversion
//===============================
/*const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}*/


//==================================
const anotherElement = (
  <a href='https;//google.com' target='_blank'>Visit Goggle </a>
)

//=============================================================
//After making tree or object these type of all variables are inject at the end for this in beloww look at reactElement
const name = "Anil Kumar"
const address = " Town Aurangabad Dist Bulandshahr"


//===================================
//create react element according to react expectation
//createElement is the method of react to create react elements
//babel injects the this React 
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement,
  name,
  address
)





createRoot(document.getElementById('root')).render(
  
 reactElement
)

