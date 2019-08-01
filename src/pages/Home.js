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
              <li>Contact</li>
              <li>About</li>
            </ol>
          </nav>
        </main>
      </section>
    )
  }
}

export default Home
