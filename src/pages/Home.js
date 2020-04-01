import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import LargerViewportSidebar from '../components/LargerViewportSidebar'
import SplashScreen from '../components/SplashScreen'

class Home extends Component {
  state = {
    navShown: true
  }

  render() {
    return (
      <section className="home-container home-page">
        <main>
          <Sidebar/>
          <LargerViewportSidebar/>
          <SplashScreen/>
        </main>
        <footer>
          <a href="https://www.instagram.com/jamesdeandoesotherstuff/" target="_blank">
            <p>James Dean Does Other Stuff</p>
          </a>
        </footer>
      </section>
    )
  }
}

export default Home
