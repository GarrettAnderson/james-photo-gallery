import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'


class About extends Component {

  render() {
    return (
      <main>
          <Sidebar/>
        <article id="about-me">
          <h3>About</h3>
          <p>A Florida native with a global mindset and a passion for building beautiful things.</p>
        </article>
      </main>
    )
  }
}

export default About
