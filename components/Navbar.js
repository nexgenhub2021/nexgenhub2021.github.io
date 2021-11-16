import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar () {
  return (
    <nav className="mx-auto mt-2.5 mb-20 py-2.5 px-0 flex justify-end items-end border-b border-solid border-gray-200">
      <div className="mr-auto">
        <Image src="/images/icon.png" alt="site logo" width={80} height={80}/>
      </div>
      <Link href="/"><a className="px-3">Home</a></Link>
      <Link href="/about"><a className="px-3">About</a></Link>
      <Link href="/contact"><a className="px-3">Contact</a></Link>
    </nav>
  )
}

export default Navbar
