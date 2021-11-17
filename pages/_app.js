import Layout from '../components/Layout'
import '../styles/before.css'
import '../styles/styles.css'
import '../styles/after.css'
import React from 'react'

function MyApp ({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
