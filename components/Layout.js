import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

function Layout ({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>NexGenHub | {children.type.name}</title>
        <meta name="keywords" content="web"/>
      </Head>
    <div className="container mx-auto">
      <Navbar/>
      {children}
      <Footer/>
    </div>
    </React.Fragment>
  )
}

export default Layout
