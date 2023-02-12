import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({children}) => {
  return (
    <>
    <main className='bg-dark h-full px-6 min-h-screen font-primary'>
      {children}
      </main>
 
    </>
  )
}

export default Layout