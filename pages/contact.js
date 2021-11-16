import Head from 'next/head'
import styles from '../styles/Contact.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>NexGenHub | Contact</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <form className={styles.container} onSubmit={(event) => event.preventDefault()}>
          <h1>Contact Us</h1>

          <label htmlFor="email">Email</label>

          <input className={styles.text} type="email" id="email" required/>

          <label htmlFor="service">Service</label>

          <select className={styles.text} name="service" id="service" required>
            <option value="web" defaultChecked>Website Creation</option>
            <option value="api">REST-ful API</option>
            <option value="security">Cyber Security</option>
          </select>

          <label htmlFor="subject">Subject</label>

          <textarea className={styles.text} id="subject" name="subject" placeholder="Some details regarding your query..." rows={10} required/>

          <button className={styles.btn} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
 
export default About;