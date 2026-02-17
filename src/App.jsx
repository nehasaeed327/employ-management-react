import React from 'react'
import Login from './components/auth/Login'
import Employ from './components/dashboard/Employ'
import Newtask from './Tasklist/Newtask'


const App = () => {
  

  return (
    <>
   <Newtask></Newtask>
   <Login></Login>
   <Employ></Employ>
   </>
  )
}

export default App