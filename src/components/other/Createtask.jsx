import React from 'react'

const Createtask = () => {
  return (
    <div className=" flex items-center justify-center bg-[#0b0f19] p-6">

      {/* Card */}
      <div className="w-full max-w-4xl bg-[#111827] border border-gray-800 rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          Create Task
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Fill the details to assign a new task
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div className="space-y-4">

            {/* Title */}
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Task title"
                className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Due Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-gray-400 focus:ring-1 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Assign */}
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Employee name"
                className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Category
              </label>
              <input
                type="text"
                placeholder="Design / Development"
                className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between">

            {/* Description */}
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Description
              </label>
              <textarea
                rows="8"
                placeholder="Write task details..."
                className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Create Task
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Createtask