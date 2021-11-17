import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
    <React.Fragment>
      <Head>
        <title>NexGenHub | Contact</title>
        <meta name="keywords" content="web"/>
      </Head>
      <div>
        <form className="p-5 rounded-md bg-gray-200 text-center sm:text-left" onSubmit={(event) => event.preventDefault()}>

          <h1 className="my-title">Contact Us</h1>

          <label htmlFor="email">Email</label>

          <input className="my-text" type="email" id="email" required/>

          <label htmlFor="service">Service</label>

          <select className="my-text" name="service" id="service" required>
            <option value="web" defaultChecked>Website Creation</option>
            <option value="api">REST-ful API</option>
            <option value="security">Cyber Security</option>
          </select>

          <label htmlFor="subject">Subject</label>

          <textarea className="my-text" id="subject" name="subject" placeholder="Some details regarding your query..." rows={10} required/>

          <button className="bg-green-600 hover:bg-green-500 text-white rounded-md border-none cursor-pointer py-3 px-5 w-full sm:w-min" type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Contact
