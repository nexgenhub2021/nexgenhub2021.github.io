import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>NexGenHub | Home</title>
        <meta name="keywords" content="web"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/contact">
          <a className={styles.btn}>Contact Us</a>
        </Link>
      </div>
    </React.Fragment>
  )
}