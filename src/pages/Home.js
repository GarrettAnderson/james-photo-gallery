import React, { Component } from 'react'
import NamesakeSplash from '../images/NamesakeSplash.png'
import Sidebar from '../components/Sidebar'
import SplashScreen from '../components/SplashScreen'

class Home extends Component {
  state = {
    navShown: true
  }

  render() {
    return (
      <section className="container">
        <main>
          <Sidebar/>
          
          <SplashScreen/>
        </main>
        {/* <footer> */}
          {/* <a href="https://www.instagram.com/jamesdeandoesotherstuff/" target="_blank">
            <p>James Dean Does Other Stuff</p>
          </a> */}
        {/* </footer> */}
      </section>
    )
  }
}

export default Home
