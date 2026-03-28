import React, { useContext, useEffect, useState } from 'react'

import Admin from './components/dashboard/Admin'
import Login from './components/auth/Login'
import { getLocalStorage } from './utilis/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const [user, setUser] = useState(null)

  const loginHandle = (email,password)=>{
    if(email=='admin@gmail' && password == '123') {
      setUser('admin')
      console.log('admin login')
  }
  else
    alert('invalid')
  }

// getting data from context
const info = useContext(AuthContext)  
console.log(info)

  return (
    <>
{!user ? <Login loginHandle ={loginHandle}/> : ''}

{user == 'admin' ? <Admin/> : 'nothing'}



   
   
   </>
  )
}

export default App