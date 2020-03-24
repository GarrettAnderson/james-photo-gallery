import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'


class About extends Component {

  render() {
    return (
      <main className="about-me-container">
        <Sidebar/>
        <article id="about-me">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac arcu ex. Aenean vel mauris vel eros vehicula lobortis. Pellentesque dapibus odio tristique nibh pulvinar interdum. Fusce mollis id lacus at elementum. Vestibulum eleifend fermentum lacus, eget porta nulla malesuada sed. Donec fringilla vulputate tellus vel volutpat. Aenean tincidunt eros eget massa sollicitudin, ut pellentesque augue tincidunt. Suspendisse quis mollis dolor. Duis et tristique turpis. Nam posuere justo ligula, at mattis lorem iaculis ut. Donec quis libero quis ex venenatis suscipit. Sed id porta urna. Phasellus nec libero eros. Maecenas elit nisl, tempor non maximus eget, tempus finibus magna. Sed eu dui nunc. Curabitur vitae dignissim est. Aliquam facilisis nibh turpis, sit amet feugiat orci egestas eu. Nulla molestie odio tortor, nec consequat ligula efficitur id. In ac risus nec diam cursus commodo. Cras ac nibh at felis sodales aliquam. Praesent eu neque rutrum, placerat mauris a, pulvinar tortor. Aliquam iaculis feugiat convallis. Pellentesque ac elementum lacus.</p>
        </article>
      </main>
    )
  }
}

export default About
