
import Header from './Header'
import './Contact.css'
import Footers from './Footers'

function Contact() {
  return (
  <>
  <Header/>
  <section className="contact-main-container">

  </section>
  <section className='Contact-container'>
  <h2>Give us a call email us or come and visit <br></br>us in one of our offices</h2>
  <div className="Contact-row">
    <div className="Contact-colume">
      <h3>New York</h3>
      <>________________________</>
      <p>123FIT AWAT 452003</p>
      <p>9111307538</p>
      <p>example@gmail.com</p>
    </div>
    <div className="Contact-colume">
      <h3>New York</h3>
      <>________________________</>
      <p>123FIT AWAT 452003</p>
      <p>9111307538</p>
      <p>example@gmail.com</p>
    </div>
    <div className="Contact-colume">
      <h3>New York</h3>
      <>________________________</>
      <p>123FIT AWAT 452003</p>
      <p>9111307538</p>
      <p>example@gmail.com</p>
    </div>
  </div>
  <center>
  <form>
    <h1>Contact Us</h1>
    <input type='text' name='Name' placeholder='Name' autoFocus></input><br></br>  <input type='text' name='Lat Name' placeholder='Last Name' autoFocus></input><br></br>
    <input type='email' name='Email'placeholder='Email' autoFocus></input><br></br>
    <textarea  placeholder='Message' autoFocus></textarea><br></br>
    <input type='Submit' ></input>
  </form>
  </center>
  </section>
  
  </>
  )
}

export default Contact