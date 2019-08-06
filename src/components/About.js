import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  state = {
    navShown: true
  }

  render() {
    return (
      <main>
        <header>
          <button className="nav-hamburger" onClick={() => this.setState({ navShown: !this.state.navShown })}>
            {this.state.navShown ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
          </button>
          <section className="about-page">
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
        </header>
        <article id="about-me">
          <h3>About</h3>
          <p>A Florida native with a global mindset and a passion for building beautiful things.</p>
        </article>
      </main>
    )
  }
}

export default About
