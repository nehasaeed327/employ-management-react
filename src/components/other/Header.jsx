import React from 'react'

const Header = () => {
  return (
     <div className="flex w-[1000px] justify-between items-end  px-10 py-2">
        <h1 className="tex-2xl  font-medium">Hey <br></br><span className='text-3xl font-semibold '>Username </span></h1>
        <button className='bg-red-500 px-3 py-2 rounded-sm text-white text-lg font-medium'>Logout</button>
      </div>
  )
}

export default Header