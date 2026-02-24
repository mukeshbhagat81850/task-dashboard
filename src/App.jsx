import React from 'react'
import Navbar from './components/Navbar'
import Taskform from './components/Taskform'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex justify-center items-center p-4'>

      <div className=' max-w-xl w-full bg-white rounded-2xl shadow-lg p-6'>
        <Navbar />
        <Taskform />
      </div>
    </div>
  )
}

export default App
