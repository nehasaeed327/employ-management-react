import React from 'react'

const Createtask = () => {
  return (
           <>
<div className='p-10 h-screen '>
  
   <h2 className='text-3xl mx-15 mb-5'>Create Task</h2>
  <form action=""  className='flex gap-20  justify-center'>

   
    <div  >
      
      <div className='mb-3'> 
        <h3>Task title</h3>
        <input type="text"  className='border-2  w-100 border w-100 rounded mt-2 border-indigo-600 px-5 py-2 placeholder: text-gray-700' placeholder='Task title' />
      </div>

      <div  className='mb-3'>
        <h3>Due Date</h3>
        <input className=' border-2 border date-input w-100 rounded mt-2 border-indigo-600 px-5 py-2 placeholder: text-gray-400' type="date" placeholder=''  />
      </div>

        <div  className='mb-3'>
        <h3>Assign to</h3>
        <input className='border border-2 w-100 rounded mt-2 border-indigo-600 px-5 py-2 placeholder: text-gray-700' type="text" placeholder='Employ name' />
      </div>

        <div  className='mb-3'>
        <h3>Category</h3>
        <input className='border border-2 w-100 rounded mt-2 border-indigo-600 px-5 py-2 placeholder: text-gray-700' type="text" placeholder='Design' />
      </div>
      
      

    </div >

    <div>
      <div >
        <h3>Description</h3>
        <textarea rows="10" className=' w-100 border-2 border w-100 rounded mt-2 border-indigo-600 px-5 py-2 placeholder: text-gray-700'  type="text" placeholder='Enter task title' ></textarea>
      </div>

       <div >
        <button className='w-100 bg-indigo-600 text-white py-2 rounded mt-1'>Create Task</button>
      </div>
    </div>
  </form>
</div>
   </>
  )
}

export default Createtask