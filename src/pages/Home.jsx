import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
const Home = () => {
  return (
    <div className="container px-3">
    <div className="flex gap-4">
      <Sidebar />
      <Main />
    </div>
  </div>
  )
}

export default Home