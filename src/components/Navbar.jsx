import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pb-4 border-b border-gray-200">

      <h1 className="text-2xl font-bold text-gray-800">
        Task Dashboard
      </h1>

      <span className="text-sm text-gray-500">
        React Project
      </span>

    </div>
  )
}

export default Navbar