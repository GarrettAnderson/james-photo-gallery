import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          {/* <section className="nav-section">
            <button className="home-nav-hamburger" onClick={() => this.setState({ navShown: !this.state.navShown })}>
              {this.state.navShown ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
            </button>
            <nav className={`home-nav-dropdown ${this.state.navShown ? 'is-shown' : ''} `}>
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
          </section> */}
          <SplashScreen/>
        </main>
        <footer>
          {/* <a href="https://www.instagram.com/jamesdeandoesotherstuff/" target="_blank">
            <p>James Dean Does Other Stuff</p>
          </a> */}
        </footer>
      </section>
    )
  }
}

export default Home
