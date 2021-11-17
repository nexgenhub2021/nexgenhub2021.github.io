import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>NexGenHub | About</title>
        <meta name="keywords" content="web"/>
      </Head>
      <div>
        <h1 className="my-title">About</h1>
        <p className="my-desc">We create static websites, web apps, RESTful APIs, and much more.</p>
        <p className="my-desc">We can also handle deployment and maintainence of your websites and servers.</p>
        <p className="my-desc">Feel free to contact us regarding any queries!</p>
      </div>
    </React.Fragment>
  )
}

export default About
