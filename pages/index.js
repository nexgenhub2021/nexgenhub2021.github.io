import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

export default function Home () {
  return (
  <React.Fragment>
    <Head>
        <title>NexGenHub | Home</title>
        <meta name="keywords" content="web"/>
      </Head>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Building the next web
        <br className="hidden lg:inline-block"/>your one-stop website solution
      </h1>
      <p className="mb-8 leading-relaxed">Online presence is a must in today&apos;s world, and we are here to help you maximize yours. With our team of industry experts, your dreams will become reality.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link href="/contact">Get In Touch</Link></button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><Link href="/about">About Us</Link></button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src="/images/banner.jpg" height={600} width={900}/>
    </div>
  </div>
</section>
</React.Fragment>)
}
