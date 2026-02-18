import React from 'react'
import Header from '../other/header'
import { createWebSocketModuleRunnerTransport } from 'vite/module-runner'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'


const Admin = () => {


  return (
   <>
     <Header></Header>
     <Createtask></Createtask>
     <Alltask></Alltask>
     
    </>
  )
}

export default Admin