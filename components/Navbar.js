import React from 'react'
import Cog from '../svg/Cog'
import Link from 'next/link'

function Navbar () {
  return (<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Cog/>
      <span className="ml-3 text-xl">NexGenHub</span>
    </a>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
      <Link href="/contact"><a className="mr-5 hover:text-gray-900">Contact</a></Link>
      <Link href="/about"><a className="mr-5 hover:text-gray-900">About</a></Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link href="/contact">Contact Us</Link>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>)
}

export default Navbar
