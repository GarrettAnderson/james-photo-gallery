import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  state = {
    navShown: true
  }
  render() {
    return (
      <section>
        <button className="nav-hamburger" onClick={() => this.setState({ navShown: !this.state.navShown })}>
          {this.state.navShown ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
        </button>
        <section className="contact-page">
          <nav className={`nav-dropdown ${this.state.navShown ? 'is-shown' : ''} `}>
            <ol>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
            </ol>
          </nav>
        </section>
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
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                <label htmlFor="email-address">Email Address</label>
                <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                  required=""
                />
                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
              </fieldset>
              <input type="submit" value="send" />
            </form>
          </section>
        </main>
      </section>
    )
  }
}

export default Contact
