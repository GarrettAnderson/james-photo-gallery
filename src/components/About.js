import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'


class About extends Component {

  render() {
    return (
      <main className="about-me-container">
        <Sidebar/>
        <article id="about-me">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac arcu ex. Aenean vel mauris vel eros vehicula lobortis. Pellentesque dapibus odio tristique nibh pulvinar interdum. Fusce mollis id lacus at elementum. Vestibulum eleifend fermentum lacus, eget porta nulla malesuada sed. Donec fringilla vulputate tellus vel volutpat. Aenean tincidunt eros eget massa sollicitudin, ut pellentesque augue tincidunt. Suspendisse quis mollis dolor. Duis et tristique turpis. Nam posuere justo ligula, at mattis lorem iaculis ut.</p>
        </article>
      </main>
    )
  }
}

export default About
