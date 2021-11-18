import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout ({ children }) {
  return (
    <React.Fragment>
    <div className="container mx-auto">
      <Navbar/>
      {children}
      <Footer/>
    </div>
    </React.Fragment>
  )
}

export default Layout
