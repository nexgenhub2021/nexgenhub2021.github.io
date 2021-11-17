import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Home () {
  return (
    <React.Fragment>
      <Head>
        <title>NexGenHub | Home</title>
        <meta name="keywords" content="web"/>
      </Head>
      <div>
        <h1 className="my-title">Homepage</h1>
        <p className="my-desc">We are an organisation specializing in creating and deploying customized full-stack web-based solutions for everything from personal blogs to online businesses.</p>
        <p className="my-desc">Our team has experts from every field required for creating the perfect product for your needs.</p>
        <Link href="/contact">
          <a className="block w-36 px-0 py-2 my-5 mx-auto bg-blue-600 rounded text-white text-center hover:bg-blue-500">Contact Us</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
