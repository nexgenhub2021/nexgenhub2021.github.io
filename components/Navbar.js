import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar () {
  return (
    <nav>
      <div className="logo">
        <Image src="/images/icon.png" alt="site logo" width={80} height={80}/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
  )
}

export default Navbar
