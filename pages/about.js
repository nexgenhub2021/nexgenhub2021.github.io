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
        <h1 className="text-gray-700 pb-5 text-center">About</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
      </div>
    </React.Fragment>
  )
}

export default About
