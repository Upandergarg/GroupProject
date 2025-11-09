import React from 'react'
import Header from './components/header.jsx'
import Leftbar from './components/leftbar.jsx'
import Rightbar from './components/rightbar.jsx'
import { Outlet } from 'react-router-dom'
import Feed from './components/feed.jsx'

function Layout() {
  return (
    <>
       <div className="bg-neutral-100 text-gray-900 text-lg">
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-[15rem_1fr] lg:grid-cols-[15rem_1fr_20rem] gap-4">
        <Rightbar/>
        <Feed />
        <Leftbar />
      </div>
      
 
    </div>
    <Outlet />
    
    </>
  )
}

export default Layout