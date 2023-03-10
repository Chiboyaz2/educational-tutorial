import React from "react"
import Back from "../common/back/Back"
import "./contact.css"


const Contact = () => { 
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.890530065348!2d3.2774688169456603!3d6.535507111951487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f38854064a7%3A0x932cac841910a63!2sAgodo%20Egbe%2C%20Ikotun%20Lagos!5e0!3m2!1sen!2sng!4v1674700538693!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Egbe/Lagos</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> njikagodwin212@gmail</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+2347040524341</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder="Create a message here...">               
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact