import React from 'react'
import UserContext from './UserContext'

//children is nothing it is like a div
//concept--> jo bhi props aa rhe h yha pr unhe as it is use kr lo {children} chilren ki jgah kuch bhi name use kr skte h, children a generic nme h 
// isliye children name use krte h
const UserContextProvider = ({children}) =>{
    //jo bhi APIs call krni h yha kr lo aur yha ke baad jo access mil gya h wo sb provider m through in kr do
    const [user, setUser] = React.useState(null)
      return(
         //yha pr akela UserContext likhne se kaam nhi chlta h iski value ya property access krni pdti h  literally use  (.Provider) hi bolte h
         //yha provider se wrap to kr diya but actually kon si values ko access de rhe h ye bhi btana pdega to uske liye provider ke andar
         //ek property milti h prop, value= {{}} ab iske ndar hmne ek obj pass kr diya hai ab chahe jo value iske ander pass kr skte h
         <UserContext.Provider value={{user, setUser}}>
           {children}
         </UserContext.Provider>

      )
   }



export default UserContextProvider


//Ab ye store bn kr prepare ho gya h ab iska access kha denge 
//iska access main.jsx ya apa.jsx m se kisi m bhi de kte h  