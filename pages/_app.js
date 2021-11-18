import Layout from '../components/Layout'
import '../styles/global.css'
import React from 'react'

function MyApp ({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
