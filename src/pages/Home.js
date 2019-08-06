import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <section className="splash-screen">
        <main>
          <header>
            James Dean <span>Does</span> Other Stuff
          </header>
          <nav>
            <ol>
              <Link to="/photos">
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
        </main>
      </section>
    )
  }
}

export default Home
