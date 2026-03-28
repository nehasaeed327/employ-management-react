import React from 'react'

const Alltask = () => {

  const tasks = [
    { name: "Ali Khan", task: "Design Landing Page", status: "Completed" },
    { name: "Sara Ahmed", task: "Fix Bugs", status: "Pending" },
    { name: "Usman Tariq", task: "API Integration", status: "In Progress" },
    { name: "Ayesha Noor", task: "Write Docs", status: "Completed" },
    { name: "Hamza Ali", task: "Testing", status: "Pending" },
  ]

  return (
    <div className=" bg-[#0b0f19] flex items-center p-6">

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT: TABLE */}
        <div className="md:col-span-2 bg-[#111827] border border-gray-800 rounded-xl p-5">

          {/* Heading */}
          <h2 className="text-white text-lg font-semibold mb-4">
            All Tasks
          </h2>

          {/* Table Header */}
          <div className="grid grid-cols-3 text-gray-400 text-sm px-4 py-2 border-b border-gray-800">
            <span>Employee</span>
            <span>Task</span>
            <span>Status</span>
          </div>

          {/* Rows */}
          <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">

            {tasks.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 items-center px-4 py-3 bg-[#0b1220] rounded-lg hover:bg-[#0f172a] transition"
              >

                <span className="text-white text-sm">
                  {item.name}
                </span>

                <span className="text-gray-300 text-sm">
                  {item.task}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full w-fit ${
                    item.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : item.status === "Pending"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {item.status}
                </span>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT: INFO CARD */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">

          <img src="/bear.png" className="h-16 mb-3 opacity-80" alt="" />

          <h2 className="text-white text-xl font-semibold">
            Task Dashboard
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Manage and track all assigned tasks in one place.
          </p>

          <p className="text-gray-500 text-xs mt-4">
            Scroll to explore ⬇️
          </p>

        </div>

      </div>

    </div>
  )
}

export default Alltask