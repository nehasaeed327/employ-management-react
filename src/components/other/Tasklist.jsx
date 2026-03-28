import React from 'react'

const Tasklist = () => {

  const tasks = [
    {
      priority: "High",
      date: "16 Feb 2026",
      title: "Add YouTube Video",
      desc: "Upload and optimize video content for marketing."
    },
    {
      priority: "Medium",
      date: "18 Feb 2026",
      title: "Fix UI Bugs",
      desc: "Resolve responsiveness issues in dashboard."
    },
    {
      priority: "Low",
      date: "20 Feb 2026",
      title: "Write Documentation",
      desc: "Prepare user guide for new features."
    },
  ]

  return (
    <div className="w-full mt-10 px-6">

      {/* Heading */}
      <h2 className="text-xl text-white mb-4">Your Tasks</h2>

      {/* Scroll Container */}
      <div className="flex gap-5 overflow-x-auto pb-4">

        {tasks.map((task, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-[#111827] border border-gray-800 rounded-xl p-5 flex-shrink-0 hover:border-gray-600 transition"
          >

            {/* Top Row */}
            <div className="flex justify-between items-center mb-3">

              {/* Priority Badge */}
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  task.priority === "High"
                    ? "bg-red-500/20 text-red-400"
                    : task.priority === "Medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {task.priority}
              </span>

              {/* Date */}
              <span className="text-xs text-gray-500">
                {task.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-semibold mb-2">
              {task.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {task.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Tasklist