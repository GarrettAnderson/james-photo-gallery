import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'


class Contact extends Component {
  render() {
    return (
      <section className="content-container contact-form-container">
        <Sidebar/>
        <main>
          <section className="contact-form" id="contact-me">
            <h3>Contact</h3>
            <form
              className="contact-information-form"
              id="fs-frm"
              acceptCharset="utf-8"
              action="https://formspree.io/garrettleegrahamanderson@gmail.tld"
              method="POST"
            >
              <fieldset id="fs-form-inputs">
                <input type="text" name="name" id="full-name" placeholder="First and Last Name" required="" />
                <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                  required=""
                />
                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
              </fieldset>
              <input className="contact-send" type="submit" value="send" />
            </form>
          </section>
        </main>
      </section>
    )
  }
}

export default Contact
