import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
           
  const submitHandler= (e)=>{
   e.preventDefault();

    
    
  }
  return (
    <>
    <div className="flex h-screen w-screen justify-center bg-[url('../../../public/bg.jpg')] bg-cover bg-center ">
      <div className="flex justify-center items-center w-[50vw] h-[100vh] bg-black" >
        <div className="border-full border-indigo-600 justify-center items-center p-20 border-2 rounded">
          <form  onSubmit= {(e)=>{
              
              submitHandler(e)
            }}
            
             className=" flex flex-col justify-center items-center">
            <input required value={email} onChange={ (e)=>{
              setEmail(e.target.value)
                        }} type="email" placeholder='Enter your email'
            className="w-80 border-2 py-4 px-5 bg-transparent border-indigo-600 rounded-full outline-none text-indigo-600  focus:bg-transparent placeholder:text-gray-400" />
              <input required 
                value={password}

                onChange={ (e)=>{
                    setPassword(e.target.password)
                }}
              
              type="password" placeholder='Enter your password'
            className=" w-80 border-2 py-4 px-5 bg-transparent border-indigo-600 rounded-full outline-none text-indigo-600 mt-3 placeholder:text-gray-400" />

            <button type='submit' className="border-2 py-4 px-[40px] bg-indigo-600 border-indigo-600 rounded-full outline-none text-white mt-3 ">Login</button>
          </form>
        </div>

      </div>
     {/*  */}

      <div className=" w-100 h-100"></div>

     
                


    </div>


    
    </>
  )
}

export default Login