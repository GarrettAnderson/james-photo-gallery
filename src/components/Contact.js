import React, { Component } from 'react'
import Form from 'react-jsonschema-form'

class Contact extends Component {
  render() {
    const formSchema = {
      title: '',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: {
          type: 'string',
          title: 'Name',
          default: ''
        },
        email: {
          type: 'string',
          title: 'Email',
          default: ''
        },
        subject: {
          type: 'string',
          title: 'Subject',
          default: ''
        },
        message: {
          type: 'string',
          format: 'textarea',
          title: 'Message',
          default: ''
        }
      }
    }
    return (
      <section>
        <header>
          <h1>James Dean Does Other Stuff</h1>
          <nav className="header-nav">
            <ol>
              <li>
                <a href="#photos">Photography</a>
              </li>
              {/* <li>
                <a href="./components/Contact.js">Contact</a>
              </li> */}
            </ol>
          </nav>
        </header>
        <main>
          <section className="contact-form" id="contact-me">
            <h3>Contact</h3>
            <form
              id="fs-frm"
              accept-charset="utf-8"
              action="https://formspree.io/garrettleegrahamanderson@gmail.tld"
              method="POST"
            >
              <fieldset id="fs-form-inputs">
                <label for="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                <label for="email-address">Email Address</label>
                <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                <label for="message">Message</label>
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
