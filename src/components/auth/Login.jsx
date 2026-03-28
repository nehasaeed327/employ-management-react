import React, { useState } from 'react'

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    props.loginHandle(email, password)

    setEmail("")
    setPassword("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19]">

      {/* Card */}
      <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          Welcome back
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Enter your credentials to continue
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400 mb-1 block">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-400 mb-1 block">
              Password
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>
            <span className="hover:text-indigo-400 cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Sign In
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          Don’t have an account?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>

    </div>
  )
}

export default Login