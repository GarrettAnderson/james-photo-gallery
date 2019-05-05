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
          <Form schema={formSchema} onSubmit={this.onSubmitEdit} className="contact-form" />
        </main>
      </section>
    )
  }
}

export default Contact
