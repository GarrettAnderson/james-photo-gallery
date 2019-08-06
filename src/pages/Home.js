import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    navShown: true
  }

  render() {
    return (
      <main>
        <button className="nav-hamburger" onClick={() => this.setState({ navShown: !this.state.navShown })}>
          {this.state.navShown ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
        </button>
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
        <section className="splash-screen" />
      </main>
    )
  }
}

export default Home
