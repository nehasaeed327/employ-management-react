import React from 'react'

const Header = ({ username = "Admin" }) => {
  return (
    <header className="flex justify-between items-center w-full  px-6 py-4 bg-[#0b0f19] ">
      
      {/* Greeting */}
      <div>
        <h1 className="text-gray-300 text-lg">
          Hey, <span className="text-white text-2xl font-semibold">{username}</span>
        </h1>
      </div>

      {/* Logout Button */}
      <button className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-white font-medium shadow-sm">
        Logout
      </button>

    </header>
  )
}

export default Header