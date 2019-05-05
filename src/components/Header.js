import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>James Dean Does Other Stuff</h1>
        <nav className="header-nav">
          <ol>
            <li>
              <a href="#photos">Photography</a>
            </li>
            <li>
              <a href="/contact.js">Contact</a>
            </li>
          </ol>
        </nav>
      </header>
    )
  }
}

export default Header
