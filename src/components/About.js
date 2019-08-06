import React, { Component } from 'react'
import profileImg from '../images/IMG_0899.png'

class About extends Component {
  render() {
    return (
      <main>
        <header>
          <section className="profile-img-container">
            <img src={profileImg} alt="headshot" className="profile-image" />
          </section>
          <nav className="navbar">
            <ol>
              <li>
                <a href="#favorite-projects">Projects</a>
              </li>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#contact-me">Contact</a>
              </li>
            </ol>
          </nav>
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
