import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utilis/localStorage'


// makinng context

export const AuthContext =createContext()

const AuthProvider = ({children}) => {

  
  
 const [userData, setUserData] = useState(null)

//getting daa from localstorage

 const data = getLocalStorage()  
 console.log(data)

  return (
    <div>    <AuthContext.Provider value={"neha"}>
   {children}
    </AuthContext.Provider></div>
  )
}

export default AuthProvider