import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  })

  return (
    <React.Fragment>
      <Head>
        <title>NexGenHub | 404</title>
        <meta name="keywords" content="web"/>
      </Head>
      <div className="text-center">
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>Going back to the <Link href="/"><a className="text-blue-600 underline">Homepage</a></Link> is 3 seconds...</p>
      </div>
    </React.Fragment>
  )
}

export default NotFound
